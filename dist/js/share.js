var title={
    "afterlv": "改造lv",
    "backs": "稀有",
    "broken": "拆解",
    "buildtime": "建造时间",
    "bull_max": "弹消费",
    "ctype": "舰型",
    "fuel_max": "油消费",
    "getmes": "登场",
    "houg": "火力",
    "id": "ID",
    "leng": "射程",
    "luck": "运",
    "maxeq": "搭载",
    "total_eq": "搭载",
    "name": "名称",
    "powup": "改修",
    "raig": "雷装",
    "slot_num": "slot",
    "soku": "速力",
    "souk": "装甲",
    "stype": "类型",
    "itype": "类型",
    "type": "种类",
    "taik": "耐久",
    "HP": "HP",
    "tyku": "对空",
    "final_form": "最终形态",
    "aftershipid": "改造后",
    "afterfuel": "改造油消耗",
    "afterbull": "改造弹消耗",
    "evasion": "回避",
    "anti_submarine": "对潜",
    "sight": "索敌",
    "description": "描述",
    // "price": "价格",
    "baku":"爆装",
    "houm":"命中",
    "dtype":"大分类",
    "cs":"小分类ID",
    "csname":"小分类",
    "rare":"稀有",
    "n":"出货次数",
    "items":"公式",
    "secretary":"旗舰",
    "i":"公式",
    "s":"旗舰",
    "times":"出货",
    "denominator":"总次数",
    "ratio":"确率",
    "l":"最低等级",
    "developable":"开发"
    }

var developable = [-1,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 49, 52, 54, 55, 57, 59, 60, 61, 65, 66, 72, 73, 75, 163, 168, 181, 51, 90, 120, 207, 226, 194, 242, 249, 250]
var stype=["","海防艦","駆逐艦","軽巡洋艦","重雷装巡洋艦","重巡洋艦","航空巡洋艦","軽空母","戦艦","戦艦","航空戦艦","正規空母",
"超弩級戦艦","潜水艦","潜水空母","補給艦","水上機母艦","揚陸艦","装甲空母","工作艦","潜水母艦","練習巡洋艦","補給艦"]
function formatStype(value) {
    return stype[value]==null?value:stype[value];
    }
var itype=["","小口径主砲","中口径主砲","大口径主砲","副砲","魚雷","艦上戦闘機","艦上爆撃機","艦上攻撃機","艦上偵察機","水上偵察機","水上爆撃機","小型電探","大型電探","ソナー",
"爆雷","追加装甲","機関部強化","対空強化弾","対艦強化弾","VT信管","対空機銃","特殊潜航艇","応急修理要員","上陸用舟艇","オートジャイロ","対潜哨戒機","追加装甲(中型)",
"追加装甲(大型)","探照灯","簡易輸送部材","艦艇修理施設","潜水艦魚雷","照明弾","司令部施設","航空要員","高射装置","対地装備","大口径主砲（II）","水上艦要員","大型ソナー",
"大型飛行艇","大型探照灯","戦闘糧食","補給物資","水上戦闘機","特型内火艇","陸上攻撃機","局地戦闘機","陸上偵察機","輸送機材","潜水艦装備","","","","","噴式戦闘機",
"噴式戦闘爆撃機","噴式攻撃機","噴式偵察機"]
itype[93]="大型電探（II）"
itype[94]="艦上偵察機（II）"
function formatItype(value) {
    return itype[value]==null?value:itype[value];
    }
function formatDtype(value,row,index) {
    return stype[value]==null?row["csname"]:stype[value];
    }
function formatshipId(value,row,index) {
    var str='unknwon'
    for (i=0;i<csjson.length;i++){
        if(csjson[i]['id']==value){
            str=csjson[i]['name']
        }
    }
    return str;
    }
function formatItemId(value) {
    var str='unknwon'
    if(value==-1){
        return "失败"
    }
    for (i=0;i<slotitem.length;i++){
        if(slotitem[i]['id']==value){
            str=slotitem[i]['name']
        }
    }
    return str;
    }
function addcol(result,col,old,n){
    l=result.length
    if(!l){console.log("empty");return}
for(i=0;i<l;i++){
    result[i][col]=result[i][old][n]
}}
var sortkey
function sortby(x,y){
    return isNaN(x[sortkey])?(isNaN(x[sortkey][1])?x[sortkey].localeCompare(y[sortkey]):(sortkey=='luck'?x[sortkey][0]-y[sortkey][0]:x[sortkey][1]-y[sortkey][1])):x[sortkey]-y[sortkey]}
function bSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len-1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
         // 相邻元素两两对比，元素交换，大的元素交换到后面
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
  }
  return arr;
}
function getname(api,kj){
    var name
    if(kj){
        name=title[api]
        if(name==null){
            name=english(api)
        }else{
            if($.cookie('JF_cn')=="1"){name=Traditionalized(name)}else{
                // if($.cookie('JF_cn')=="0"||$.cookie('JF_cn')==null){name=Simplized(name)}else{
                    if($.cookie('JF_cn')=="2"){name=Japanized(name)}
                // }
            }
        }
    }else{name=english(api)}
    return name
}
function english(api){
    var name
    name=api.replace('api_','').replace(/_/g,' ')
    return name
}
function Width(){
    return document.body.clientWidth;}
setTimeout(function(){
    if($('.loading').is(':hidden')&&Width()>1000){
    document.body.style.setProperty('--pic', "url(http://fleet.diablohu.com/!/assets/images/homebg/"+
    // "2"
    Math.round(Math.random(25))
    +".jpg)");}
        },     5000);