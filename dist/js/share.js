var title = {
  afterlv: "改造lv",
  backs: "稀有",
  broken: "拆解",
  buildtime: "建造时间",
  bull_max: "弹消费",
  ctype: "舰型",
  fuel_max: "油消费",
  getmes: "登场",
  houg: "火力",
  id: "ID",
  leng: "射程",
  luck: "运",
  maxeq: "搭载",
  total_eq: "搭载",
  name: "名称",
  powup: "改修",
  raig: "雷装",
  slot_num: "slot",
  soku: "速力",
  souk: "装甲",
  stype: "类型",
  itype: "类型",
  type: "种类",
  taik: "耐久",
  HP: "HP",
  tyku: "对空",
  final_form: "最终形态",
  aftershipid: "改造后",
  afterfuel: "改造油消耗",
  afterbull: "改造弹消耗",
  evasion: "回避",
  houk: "回避",
  anti_submarine: "对潜",
  tais: "对潜",
  sight: "索敌",
  saku: "索敌",
  description: "描述",
  // "price": "价格",
  baku: "爆装",
  houm: "命中",
  dtype: "本站暂行分类",
  cs: "分类ID",
  csname: "舰型ID",
  rare: "稀有",
  n: "出货次数",
  items: "公式",
  secretary: "旗舰",
  i: "点击查看饼图",
  secretary: "旗舰",
  times: "出货",
  denominator: "公式次数",
  ratio: "总确率",
  l: "最低等级",
  developable: "开发",
  fuel: "油",
  ammo: "弹",
  steel: "钢",
  bauxite: "铝",
  reward_fuel: "油",
  reward_ammo: "弹",
  reward_steel: "钢",
  reward_bauxite: "铝",
  prerequisite: "前置任务",
  requirements: "需求",
  reward_other: "其他奖励",
  postQuest: "后继任务",
}
var stype = [
  0,
  "海防艦",
  "駆逐艦",
  "軽巡洋艦",
  "重雷装巡洋艦",
  "重巡洋艦",
  "航空巡洋艦",
  "軽空母",
  "戦艦",
  "低速戦艦",
  "航空戦艦",
  "正規空母",
  "超弩級戦艦",
  "潜水艦",
  "潜水空母",
  "補給艦",
  "水上機母艦",
  "揚陸艦",
  "装甲空母",
  "工作艦",
  "潜水母艦",
  "練習巡洋艦",
  "補給艦",
]
stype[174] = "Z1 Z3"
stype[439] = "Warspite"
stype[441] = "Littorio级"
stype[443] = "Libeccio级"
stype[448] = "Zara级"
stype[491] = "Commandant Teste"
stype[515] = "Ark Royal"
stype[530] = "伊504"
stype[535] = "Luigi Torelli"
stype[539] = "UIT-25"
stype[82] = "伊勢改"
stype[88] = "日向改"
stype[553] = "伊勢改二"
stype[554] = "日向改二"
// stype[553] = "伊勢改(二)";
// stype[554] = "日向改(二)";
stype[571] = "Nelson"
stype[589] = "L.d.S.D.d.Abruzzi级"

function formatStype(value) {
  return stype[value] == null ? value : stype[value]
}
function formatDtype(value, row, index) {
  return stype[value] == null ? row["csname"] : stype[value]
}
function formatshipId(value, row, index) {
  var str = value
  for (let i = 0; i < csjson.length; i++) {
    if (csjson[i]["id"] == value) {
      str = csjson[i]["name"]
      break
    }
  }
  return str
}
function addcol(result, col, old, n) {
  l = result.length
  if (!l) {
    console.log("empty")
    return
  }
  for (let i = 0; i < l; i++) {
    try {
      result[i][col] = result[i][old][n]
    } catch (error) {
      x(result[i], old, error)
    }
  }
}
var sortkey
function sortby(x, y) {
  return isNaN(x[sortkey])
    ? isNaN(x[sortkey][1])
      ? x[sortkey].localeCompare(y[sortkey])
      : sortkey == "luck"
      ? x[sortkey][0] - y[sortkey][0]
      : x[sortkey][1] - y[sortkey][1]
    : x[sortkey] - y[sortkey]
}
function bSort(arr) {
  var len = arr.length
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      // 相邻元素两两对比，元素交换，大的元素交换到后面
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
function getname(api, kj) {
  var name
  if (kj) {
    name = title[api]
    if (name == null) {
      name = english(api)
    } else {
      if ($.cookie("JF_cn") == "1") {
        name = Traditionalized(name)
      } else {
        if ($.cookie("JF_cn") == "0") {
          name = Simplized(name)
        } else {
          if ($.cookie("JF_cn") == "2") {
            name = Japanized(name)
          }
        }
      }
    }
  } else {
    name = english(api)
  }
  return name
}
function english(api) {
  var name
  if (api == null) {
    return
  }
  name = api.replace("api_", "").replace(/_/g, " ")
  return name
}
function api(name) {
  return name.replace("api_", "")
}
function Width() {
  return document.body.clientWidth
}
setTimeout(function () {
  if (($(".loading").is(":hidden") || "undefined" != typeof btninfo) && Width() > 1000) {
    document.body.style.setProperty(
      "--pic",
      "url(https://fleet.diablohu.com/!/assets/images/homebg/" +
        // "2"
        Math.round(25 * Math.random()) +
        ".jpg)"
    )
    // console.log($('#logo').css("width"))
    $("#logo").attr("width", "500px")
  }
}, 2000)
//bootstrap出现特殊字符冲突
function bra(value, x) {
  if (x) {
    return value.replace("(", "（").replace(")", "）").replace("/", "╱")
  } else {
    return value.replace("（", "(").replace("）", ")").replace("╱", "/")
  }
}

function itag(str) {
  return (
    '<i style="background-image:url(https://fleet.diablohu.com/!/assets/images/itemicon/' +
    str +
    '.png);" class="item"></i>'
  )
}
function lvplus(arr) {
  if (isNaN(arr)) return
}
// 修正后的日期解析函数（兼容1-16和202601/202602格式）
function qndate(qn) {
  // 处理202601/202602这类6位数字（年+月）
  if (qn.toString().length >= 6) {
    const year = Math.floor(qn / 100) // 取前4位：202601 → 2026
    const month = qn % 100 // 取后2位：202601 → 1
    return `${year}/${month}`
  }
  // 处理1-16（原逻辑：2020年为基准，qn+1为月份，修正为合理时间映射）
  // 原逻辑：qn=0→2020/1, qn=1→2020/2... 调整为匹配原始HTML的时间范围
  if (qn === 0 || qn === 1) return "2019/5" // 2019年5月或更早
  if (qn === 2) return "2019/6~2020/3" // 2019年6月~2020年3月
  if (qn === 3) return "2020/4~8" // 2020年4月~8月
  // 处理8-16（2021年3月及以后，按qn-10=月份）
  var date = new Date(2020, Number(qn) + 1)
  return date.getFullYear() + "/" + (date.getMonth() + 1)
}
 // 映射滑动器值到对应的时间文本
 const timeLabels = [
  "2019年5月或更早",  // 值1
  "2019年6月~2020年3月",// 值2
  "2020年4月~8月",      // 值3
  "2020年9月~10月",     // 值8（映射为4）
  "2020年11月"          // 值9（映射为5）
];
// 修正滑动器值和时间标签的对应关系（简化为1-5）
const valueToLabel = {
  1: timeLabels[0],
  2: timeLabels[1],
  3: timeLabels[2],
  4: timeLabels[3],
  5: timeLabels[4]
};

// 更新选中的时间范围文本
function updateRange() {
  const startVal = parseInt(document.getElementById('startMonth').value);
  const endVal = parseInt(document.getElementById('endMonth').value);
  
  // 确保开始值 ≤ 结束值
  if (startVal > endVal) {
      document.getElementById('endMonth').value = startVal;
  }
  
  const startText = valueToLabel[startVal] || timeLabels[0];
  const endText = valueToLabel[endVal] || timeLabels[4];
  
  document.getElementById('rangeText').innerText = `${startText} ~ ${endText}`;
  
  // 这里可以扩展：根据选中的范围高亮/筛选表格行
  // 例如：highlightTableRows(startVal, endVal);
}

// 可选：根据范围高亮表格行的函数
function highlightTableRows(startVal, endVal) {
  const rows = document.querySelectorAll('table tr:not(:first-child)');
  rows.forEach((row, index) => {
      // index从0开始，对应value1-5
      const rowVal = index + 1;
      if (rowVal >= startVal && rowVal <= endVal) {
          row.style.backgroundColor = '#f0f8ff';
      } else {
          row.style.backgroundColor = '';
      }
  });
}
// 修正后的生成函数（最新2项默认勾选）
function timetable(t) {
  var timelist = $(".list").html()
  t.forEach((e, index) => {
    // 判断是否为最后2项 → 勾选
    const isChecked = index >= t.length - 2 ? ' checked="checked"' : ""
    timelist += `<tr>
        <td>
          <input class="time" type="checkbox" value="${e[0]}" id="${e[0]}"${isChecked}>
          <label for="${e[0]}">${qndate(e[0])}</label>
        </td>
        <td align="right">${e[1].toLocaleString()}</td> // 数字加千分位，匹配原始格式
        <td align="right">${e[2]}</td>
        <td align="right">${e[3]} MB</td>
      </tr>`
  })
  $(".list").html(timelist)
}

function isContain(parent, son) {
  for (var i = son.length - 1; i >= 0; i--) {
    if (parent.indexOf(son[i]) == -1) {
      return false
    }
  }
  return true
}

const exclude = [
  "id",
  "sortno",
  "sort_id",
  "afterfuel",
  "afterbull",
  "fuel_max",
  "bull_max",
  "aftershipid",
  "ctype",
  "backs",
  "afterlv",
  "slot_num",
  "type",
  "stype",
  "itype",
  "buildtime",
]
