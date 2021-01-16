// var k= handlefile("https://pic3.zhimg.com/v2-61cc4410dd6c3efa5655fad381961c42_r.png")
// console.log(k)

for (t = 0; t < ranget.length; t++) {
    $.getJSON("parsed/" + q + ranget[t] + ".json", function (result) {
        bigdata = bigdata.concat(result['RECORDS']);
        console.log(bigdata.length);
        jsindex++;
    }).done(function (d) {
        progress(1 / (ranget.length + 2) * 80);
        $('h3.panel-title')[0].innerHTML = ("正在下载第 "+jsindex+" / "+(ranget.length + 2)+ " 个文件，请耐心等待。。");
        jsonover()
    }).fail(function (d) {
        $('h3.panel-title')[0].innerHTML = ("文件  " + "parsed/" + q + jsindex + ".json 读取失败")
        console.log(d);
        jsonover()
        alert("文件  " + "parsed/" + q + jsindex + ".json 读取失败" + d);
    })
}

// function handlefile(xhr){
//     $.get(xhr, function(result){
//     var start = result.indexOf('{"RECORDS"');
//     return JSON.parse(result.substring(start))
//     ;},"text")
//   }