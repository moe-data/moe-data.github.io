function replaceBy(selector, c, old, replace) {
  var dropdown
  if (selector == 'class') {
    dropdown = document.getElementsByClassName(c)
  } else {
    if (selector == 'tag') {
      dropdown = document.getElementsByTagName(c)
    }
  }
  for (let i = 0, l = dropdown.length; i < l; i++) {
    dropdown[i].innerHTML = dropdown[i].innerHTML.replace(old, replace)
  }
}

const w = console.warn
const x = console.error
const z = console.log


function isvalid(e) {
  return e ? (isNaN(e) ? e.length : true) : false
}
function insert_spacing(str) {
  var p1 = /([A-Za-z_])([\u4e00-\u9fa5]+)/gi;
  var p2 = /([\u4e00-\u9fa5]+)([A-Za-z_])/gi;
  return str.replace(p1, "$1 $2").replace(p2, "$1 $2")
}
function insertbr(str) {
  var p1 = new RegExp(/([\u4e00-\u9fa5])([\u4e00-\u9fa5])/gi);
  var p2 = /([\u4e00-\u9fa5]+)([A-Za-z_])/gi;
  var p3 = /([A-Za-z_]+) ([A-Za-z_])/gi;
  return str.replace(p1, "$1<br>$2").replace(p2, "$1<br>$2").replace(p3, "$1<br>$2")
}
var selectAlli = 0;
//全选
$("#selectAll").on("click", function () {
  if (selectAlli == 0) {
    //把所有复选框选中
    $(".show span :checkbox").prop("checked", true);
    selectAlli = 1;
  } else {
    $(".show span :checkbox").prop("checked", false);
    selectAlli = 0;
  }

});
$("#ReverseSelect").on("click", function () {//反选
  $("#show span :checkbox").each(function () {
    //遍历所有复选框，然后取值进行 !非操作
    $(this).prop("checked", !$(this).prop("checked"));
  })
});
function js(url) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  // document.body.appendChild(script)
  var jsbody = document.getElementById("js");
  jsbody.appendChild(script);
}

function GetRequest(a, b) {
  char=''
  var url = location.search; //获取url中"?"符后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      // theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      if(a==strs[i].split("=")[0]){
        char= unescape(strs[i].split("=")[1]);
      }
    }
  }
  if (b==1) {
    char = char.split(",")
    remove(char,"")
  }else{if(!isNaN(char)){char=Number(char)}}
  return char;
}

function if1eq() {
  return "if *\(\w*\[?'?[0-9a-zA-Z_]*'?\]?=[^=]"
}
function remove(arr,b) {
  var index = arr.indexOf(b);
  if (index >= 0) {
    arr.splice(index, 1);
  }
  return arr;
};
function find(arr,key){
  const l = key.length
  const idxMap = new Map()
  // 具体小细节边界判断都忽略，实现功能为主
  for(let i=0;i<arr.length;i++){
    v=arr.substr(i,l)
    idxMap.set(v, i)
  }
  return idxMap.has(key) ? idxMap.get(key) : -1
}

function jsonstr(a){
  return JSON.stringify(a).replace("[", "").replace("]", "").replace(/"/g, '');
}
function sortNumber(a,b){return a - b}
