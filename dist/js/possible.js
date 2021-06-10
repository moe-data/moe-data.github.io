
btnbind()
$.getJSON("parsed/cstype.json").fail(function (d) {
    w("文件  " + "parsed/cstype.json" + " 读取失败" + d);
})
$("#nav").load("nav.html");
$("#foot").load("foot.html");