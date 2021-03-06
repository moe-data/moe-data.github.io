Welcome to the moe-data.github.io wiki!


***
Raw data is too large for putting on github pages

Here shows how to convert data from poi to the parsed json in moe-data


Data source comes from https://github.com/poooi/poi-server/wiki

### 1. download the .gz files<br>
Construction

```
URL: http://[SERVER_NAME]/api/report/v2/create_ship
```

Field | Type | Explanation
--- | --- | ---
`items` | `[Number]` | Items for construction, from api_item1 to api_item5 in KanColle game api
`kdockId` | `Number` | Dock ID, examples: [0, 3], note the index is 0-based, if you get it from KanColle API's `api_kdock_id` field, you need to minus 1 from it.
`secretary` | `Number` | Secretaryship's ship_id
`shipId` | `Number` | Result ship id
`highspeed` | `Number` | use highspeed. [0, 1, 10]
`teitokuLv` | `Number` | Game player's level
`largeFlag` | `Boolean` | Set to true if it was LSC(大型舰建造)
`origin` | `String` | (Optional) It's the name of your report plugin, requests' `User-Agent` will be used if not present

Development

```
URL: http://[SERVER_NAME]/api/report/v2/create_item
```

Field | Type | Explanation
--- | --- | ---
`items` | `[Number]` | (Same as construction)
`secretary` | `Number` | (Same as construction)
`itemId` | `Number` | `api_slot_item.api_slotitem_id` on success. If development failed, `api_fdata` will be a comma separated list, get the second element from it (e.g. if `api_fdata = "2,33"`, you should fill this field with `33`)
`teitokuLv` | `Number` | (Same as construction)
`successful` | `Boolean` | (Successful or unsuccessful.)
`origin` | `String` | (Same as construction)

### 2. convert gz to SQL.(tool: mongodb)<br> 
I have renamed the files<br>
the json file is named like "d1.json" or "c1.json"
<br> where d for develop, c for construction.<br> 
and the number indicates date:

Number | filename(in poi) | date | days | size
--- | --- | --- | --- | ---
1 | createitemrecords-5cf1c000.gz | 2019/6/1 |  | 188417481
2 | createitemrecords-5d194d00.gz | 2019/7/6 | 35 | 13895626
2 | createitemrecords-5d422b80.gz | 2019/8/1 | 26 | 11084170
2 | createitemrecords-5d929700.gz | 2019/10/15 | 75 | 9712275
2 | createitemrecords-5dbb7580.gz | 2019/11/1 | 17 | 2986889
2 | createitemrecords-5de30280.gz | 2019/12/1 | 30 | 4747394
2 | createitemrecords-5e0be100.gz | 2020/1/1 | 31 | 3395150
2 | createitemrecords-5e34bf80.gz | 2020/2/1 | 31 | 6903967
2 | createitemrecords-5e5afb00.gz | 2020/3/1 | 29 | 8088439
2 | createitemrecords-5e83d980.gz | 2020/4/1 | 31 | 7904881
3 | createitemrecords-5eab6680.gz | 2020/5/1 | 30 | 7095492
3 | createitemrecords-5ed44500.gz | 2020/6/1 | 31 | 6933353
3 | createitemrecords-5efbd200.gz | 2020/7/1 | 30 | 6568448
3 | createitemrecords-5f24b080.gz | 2020/8/1 | 31 | 7322584
3 | createitemrecords-5f4d8f00.gz | 2020/9/1 | 31 | 7542877
8 | createitemrecords-5f9dfa80.gz | 2020/11/3 | 63 | 
9 | createitemrecords-5fc58780.gz    | 2020/12/3 | 30 | 
10 | 5fee6600.gz | 2021/1/1 | 29 | 
11 |  | 2021/2/1 | 31 | 
12 |  | 2021/3/1 | 28 | 
13 |  | 2021/4/1 | 31 | 

I seperated them according to the release date of items<br>
(I didn't seperate it for ship construcitons since don't know the release date, here I need help)
```json
          "2020/11/13":[78,147],
          "2020/10/16":[194,242,249,250],
          "2020/03/27":[120],
          "2020/02/07":[51,90,207,226],
          "2017/03/17":[168],
          "2016/06/30":[181],
          "2016/03/11":[49],
          "2016/02/29":[163],
          "2015/06/12":[65,66],
          "2014/07/04":[73],
          "2014/06/06":[72],
          "2014/05/23":[61],
          "2014/03/14":[59],
          "2014/02/26":[60,75],
          "2013/08/26":[47,57],
          "2013/05/15":[54,55],
          "2013/05/08":[44,45,46,52],
```
### 3. run SQL query:(tool: SQL)
```sql
UPDATE d2 set itemId=-1 WHERE successful="false";
UPDATE d2 set itemId=-1 WHERE itemId=0;
DELETE FROM d2 WHERE secretary=0;
```
### 4. run SQL query:<br>
the table `cstype` is from https://github.com/moe-data/moe-data.github.io/blob/master/parsed/cstype.json

for develop:
```sql
SELECT * FROM(
select ifnull(items,-2) i, ifnull(b.dtype,ifnull(secretary,-2)) s, ifnull(itemid,-2) o, ifnull(count(*),-2) n, ifnull(min(teitokuLv),-2) l 
from d2 LEFT JOIN cstype b on secretary=b.id  
group by items,itemid,b.dtype
ORDER BY items,b.dtype,itemid)t
WHERE s!=-2 and i!='[null,null,null,null]' and i!='' and i!='[]'
```
for construction:
```sql
SELECT * FROM(
select ifnull(items,-2) i, ifnull(secretary,-2) s, ifnull(shipid,-2) o, ifnull(count(*),-2) n, ifnull(min(teitokuLv),-2) l 
from c10 
group by items,secretary,shipid
ORDER BY items,secretary,shipid) t
WHERE s!=-2 and i!='[null,null,null,null]' and i!='' and i!='[]'
```
### 5. export the query result in 4 to json format

***


