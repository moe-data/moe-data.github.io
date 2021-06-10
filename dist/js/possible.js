const qtar = tar == "装备" ? 'd' : 'c'
var active = {}
$('.go').click(function () {
    var output = []
    var extra = []
    var duration = []
    $('button.btn-primary').each(function () {
        output.push($(this).val());
    });
    $('button.btn-info').each(function () {
        extra.push($(this).val());
    });
    $("input.time").each(function () {
        if ($(this).prop("checked")) {
            duration.push($(this).val());
        }
    });
    if (output.length + extra.length > 0) {
        if (duration.length > 0) {
            console.log(extra, output)
            window.location.href = ("result.html?t=" + duration.reverse() + '&q=' + qtar + '&o=' + output + '&e=' + extra + '&s=' + $('#sorto').val() + '&a=' + $("#a").val() + '&l=' + $("#lv")[0].checked)
        } else { alert("您未选择时间范围！") }
    } else {
        if (confirm("您未选择" + tar + "，\n是要查询所有" + tar + "吗？\n(可点击" + tar + "名称选择" + tar + ")") == true) {
            window.location.href = ("result.html?t=" + duration.reverse() + '&q=' + qtar + '&o=' + output + '&e=' + extra + '&s=' + $('#sorto').val() + '&a=' + $("#a").val() + '&l=' + $("#lv")[0].checked)
        }
    }
})
btnbind()
$('.hint').html(`
<div class="panel-heading">
    <h3 class="panel-title ">提示</h3>
</div> <div class="col-sm-12"><table  align="center"><br><br>
<tr><td><h3><span class="label label-primary">主查询</span></h3><span>&ensp;&ensp;目标出货率必须>0，计入总确率（点击一次）</span> <br> <br>
<tr><td><h3><span class="label label-info">副查询</span></h3><span>&ensp;&ensp;目标出货率允许=0，计入总确率（点击两次）</span> <br> <br>
<tr><td><h3><span class="label label-default off">不查询</span></h3><span>&ensp;&ensp;目标不计入总确率（不点击或点击三次）</span>  <br> <br>
</table></div> 
<div class="col-sm-12">
<ul type="circle">
    <br>
    <li>建造数据来自POI</li><br>
    <li>第一次所需的查询时间可能较长，请耐心等待。</li><br>
    <li>时间范围勾选的越少，加载速度越快</li><br>
    <li>加载速度和`+ tar + `选择数量无关</li><br>
    <li>不兼容IE浏览器</li><br>
</ul>  
</div>`)

$('.btn').click(function () {
    var output = []
    active = {}
    $('button.btn-primary').each(function () {
        output.push(Number($(this).val()));
    });
    if (output.length) {
        possibles.forEach(e => {
            if (isContain(e, output)) {
                e.forEach(function (ee) {
                    active[ee] = true
                })
            }
        });
        z(active)
        $("button.btn").each(function () {
            if (!active[$(this).val()]) {
                $(this).addClass('active').addClass('disabled')
            } else {
                $(this).removeClass('active').removeClass('disabled')
            }
        });
    } else {
        $("button.btn").each(function () {
            $(this).removeClass('active').removeClass('disabled')
        });
    }
})
$.getJSON("parsed/cstype.json").fail(function (d) {
    w("文件  " + "parsed/cstype.json" + " 读取失败" + d);
})
$("#nav").load("nav.html");
$("#foot").load("foot.html");