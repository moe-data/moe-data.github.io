var em='3em';
var havelang=false
if(document.body.clientWidth<768){em='0em'}
console.log($.cookie('lang'))
if($.cookie('lang')||$.cookie('lang')==0){havelang=true;
document.getElementById("locale")[$.cookie('lang')].selected = true;}
function setlang(){
    $.cookie('lang',document.getElementById("locale").selectedIndex, { expires: 365, path: '/' })
}
function locallang(){
    var myselect=document.getElementById("locale");
    var index=myselect.selectedIndex ;
    if(!myselect.options[index]){console.log(index); return 'zh-CN'}else{
        return myselect.value
    }
}
function formatname(value, row) {
    formatTableUnit(value,row);
    // return"<a href='ship.html?id="+row["id"]+"'>"+value+"</a>"
    return value
}
// 格式化时间
// function formatTime(value, row, index) {
//     var date = new Date();
//     date.setTime(value);
//     var month = date.getMonth() + 1;
//     var hours = date.getHours();
//     if(hours < 10)
//         hours = "0" + hours;
//     var minutes = date.getMinutes();
//     if(minutes < 10)
//         minutes = "0" + minutes;
//     var time = date.getFullYear() + "-" + month + "-" + date.getDate() +
//         " " + hours + ":" + minutes;
//     return time;
// }
function formatTime(value, row, index) {
    var date = new Date();
    date.setTime(value*60*1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if(hours < 10)
        hours = "0" + hours;
    var minutes = date.getMinutes();
    if(minutes < 10)
        minutes = "0" + minutes;
    var time = hours-8 + ":" + minutes;
    return time;
}
// 格式化访问理由 "viewReason": 1是面试,2是开会，3是拜访客户，4是项目实施
// 删除访客
function updDevice(id) {
    $('#mytab').bootstrapTable('hideRow', {index:id});
}
var $table = $('#mytab')
var $page = $('#page')
var $jump = $('#jump')
var $button2 = $('#button2')
// var $button3 = $('#button3')

// 定义删除、更新按钮
function Trash(value, row, index) {
    var htm = "";
    htm += '<button id="dupdevice" deviceId="' + value +
        '" onclick="updDevice(' + index + ')">🧺</button>'
    return htm;
}

//表格超出宽度鼠标悬停显示td内容
function paramsMatter(value, row, index) {
    value=value.replace(/<br>/g,"")
    var span = document.createElement("span");
    span.setAttribute("title", value);
    span.innerHTML = value;
    return span.outerHTML;
}
//td宽度以及内容超过宽度隐藏
function formatTableUnit(value, row) {
    return {
        css: {
            "white-space": "nowrap",
            "text-overflow": "ellipsis",
            "overflow": "hidden",
            "max-width": "200px"
        }
    }
}
$(function() {
  $jump.click(function () {
    $table.bootstrapTable('selectPage', +$page.val())
  })
  $button2.click(function () {
    loadchart()
  })
  // $button3.click(function () {
  //   $table.bootstrapTable('nextPage')
  // })
})