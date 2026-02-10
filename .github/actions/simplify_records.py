from pymongo import MongoClient
import json
import os
from collections import defaultdict
import sys

client = MongoClient('mongodb://localhost:27017/')
db = client['poi-production']

def export_processed_mongodb_data(collection, output_file, output_type):
    """
    从MongoDB集合读取数据，按指定逻辑处理后导出为JSON文件
    
    参数:
        collection: MongoDB集合对象
        output_file: 输出JSON文件的路径
        output_type: 字段类型（仅支持"itemId"或"shipId"），替换原itemId字段
    """
    developable = []
    # 新增：校验output_type合法性
    if output_type not in ("itemId", "shipId"):
        raise ValueError(f"output_type must be 'itemId' or 'shipId', got {output_type}")
    
    # 查询指定字段，排除_id（替换itemId为output_type）
    cursor = collection.find({}, {'_id': 0, 'items': 1, output_type: 1, 'teitokuLv': 1, 'successful': 1, 'secretary': 1})
    first = True
    
    # 新增：用于统计重复条目（压缩到1条）
    record_stats = defaultdict(lambda: {'count': 0, 'min_teitokuLv': None})
    # 新增：存储异常条目（包含-2）
    abnormal_records = []
    
    # 第一步：遍历数据，统计重复&校验规则&处理SQL逻辑
    for doc in cursor:
        # secretary为整数0或字符串"0"的情况
        secretary_val = doc.get('secretary')
        if secretary_val in (0, "0"):
            continue  # 跳过secretary=0的记录，不写入文件
        
        # === 对应SQL: UPDATE d2 set itemId=-1 的两个条件 ===
        # 替换itemId为output_type指定的字段
        field_val = doc.get(output_type)
        successful_val = doc.get('successful')
        
        # 条件1: successful为false（兼容布尔False或字符串"false"）
        # 条件2: 字段本身为0（兼容整数0或字符串"0"）
        if successful_val in (False, "false") or field_val in (0, "0"):
            o = -1
        else:
            o = field_val  # 保持原数值
        
        # 新增：抛出错误 - successful与o值不匹配
        if (successful_val in (False, "false") and o > -1) or (successful_val in (True, "true") and o < 1):
            raise ValueError(f"Invalid o value: successful={successful_val}, o={o}, doc={doc}")
        
        # 新增：处理SQL的ifnull逻辑（空值替换为-2）
        # 处理items（排除'[null,null,null,null]'、''、'[]'）
        items_val = doc.get('items', [])
        items_str = json.dumps(items_val, ensure_ascii=False)
        if items_str in ('[null,null,null,null]', '', '[]'):
            items_final = -2
        else:
            items_final = items_val
        
        # 处理secretary（匹配SQL: LEFT JOIN cstype b on secretary=b.id）
        secretary_str = secretary_val if secretary_val is not None else -2
        secretary_final = secretary_str #load_cstype_map().get(secretary_str, -2)
        
        # 处理teitokuLv（记录最小值，匹配SQL: min(teitokuLv)）
        teitoku_lv = doc.get('teitokuLv', -2)
        teitoku_lv = int(teitoku_lv) if teitoku_lv not in (None, "") else -2
        
        # 处理o（ifnull为-2）
        o_final = o if o is not None else -2
        
        # 构造简化后的记录（用于去重）
        simplified_key = (
            json.dumps(items_final, ensure_ascii=False),
            secretary_final,
            o_final
        )
        
        # 统计重复次数&更新最小teitokuLv
        record_stats[simplified_key]['count'] += 1
        if record_stats[simplified_key]['min_teitokuLv'] is None or teitoku_lv < record_stats[simplified_key]['min_teitokuLv']:
            record_stats[simplified_key]['min_teitokuLv'] = teitoku_lv
        
        # 新增：标记异常条目（包含-2）
        if -2 in (items_final, secretary_final, o_final, teitoku_lv):
            abnormal_records.append({
                'i': items_final,
                's': secretary_final,
                'o': o_final,
                'n': record_stats[simplified_key]['count'],
                'l': teitoku_lv
            })
        
        # Collect unique positive itemId / shipId for developable
        o = int(o_final)
        if isinstance(o_final, (int, str)) and str(o_final).isdigit() and -2 < o < 1501 and o not in developable:
            if output_type == "itemId" and successful_val:
                developable.append(o)
                if o in [42,43,79,81,83,86]:
                    print({
                        'i': items_final,
                        's': secretary_final,
                        'o': o,
                        'n': record_stats[simplified_key]['count'],
                        'l': teitoku_lv
                    })
                    sys.exit(2)
            elif output_type == "shipId":
                developable.append(o)
    
    # 新增：校验压缩后的条目数量（<50则exit5）
    compressed_count = len(record_stats)
    if compressed_count < 50:
        print(f"Error: Compressed record count ({compressed_count}) < 50")
        sys.exit(5)
    
    # 第二步：写入压缩后的JSON（替换successful为出现次数）
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('{"RECORDS": [')
        for idx, (key, stats) in enumerate(record_stats.items()):
            items_final = json.loads(key[0])
            secretary_final = key[1]
            o_final = key[2]
            count = stats['count']
            min_teitoku_lv = stats['min_teitokuLv'] if stats['min_teitokuLv'] is not None else -2
            
            # 构造最终记录（匹配SQL输出结构）
            final_record = [
                items_final,
                secretary_final,
                o_final,
                count,  # 替换原successful的1/0为出现次数
                min_teitoku_lv
            ]
            
            if idx > 0:
                f.write(',')
            f.write(json.dumps(final_record, ensure_ascii=False))
        f.write(']}')
    
    # 新增：打印异常条目（包含-2）
    print(f"\n======= 异常条目（包含-2）=======")
    for idx, rec in enumerate(abnormal_records):
        print(f"异常条目{idx+1}: {json.dumps(rec, ensure_ascii=False)}")
    
    # 新增：show the number of abnormal records
    print(f"Number of abnormal records (containing -2): {len(abnormal_records)}")
    
    print(f"{output_type} 处理后的JSON已导出到 {output_file}")
    print(f"{output_type} 压缩后条目数量: {compressed_count}")
    if len(developable) < 20:
        print(f"Error: Compressed record count ({len(developable)}) < 20")
        sys.exit(2)
    return sorted(set(developable))

# 获取当月文件名
month = os.environ.get("MONTH")  # 我们从 workflow 传入
if not month:
    sys.exit(2)

# 调用函数 - createitemrecords（output_type=itemId）
collection = db['createitemrecords']
developable = export_processed_mongodb_data(collection, f"dump/d{month}.json", "itemId")

# 调用函数 - createshiprecords（output_type=shipId）
collection = db['createshiprecords']
constructable = export_processed_mongodb_data(collection, f"dump/c{month}.json", "shipId")

# Final unique developable values (all positive itemId + shipId)
print(f"Total unique developable values: {len(developable)}")
print(json.dumps(developable))
with open(os.environ["GITHUB_OUTPUT"], "a") as fh:
    fh.write(f"developable={json.dumps(developable)}\n")

print(f"Total unique constructable values: {len(constructable)}")
print(json.dumps(constructable))
with open(os.environ["GITHUB_OUTPUT"], "a") as fh:
    fh.write(f"constructable={json.dumps(constructable)}\n")


# 读取ship.json用于LEFT JOIN逻辑（匹配SQL）
# def load_cstype_map():
#     try:
#         with open('parsed/cstype.json', 'r', encoding='utf-8') as f:
#             cstype_data = json.load(f)
#             # 构建id到dtype的映射（匹配SQL: LEFT JOIN cstype b on secretary=b.id）
#             return {item.get('id'): item.get('dtype', -2) for item in cstype_data}
#     except FileNotFoundError:
#         raise FileNotFoundError("ship.json not found at parsed/ship.json")