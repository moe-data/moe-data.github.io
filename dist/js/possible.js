const qtar = tar == "装备" ? 'd' : 'c'
var active = {}
if (tar == "装备") {
    $.getJSON("parsed/api_mst_slotitem_equiptype.json", function (res) {
        itype = res
    }).done(function () {
        $.getJSON("parsed/api_mst_slotitem.json", function (result) {
            addcol(result, "itype", "api_type", 2)
            slotitem = result;
        }).done(function () {
            genCheck(init);
            $('.btn').click(btnclick)
        }).fail(function (d) {
            alert("文件  " + "parsed/api_mst_slotitem.json" + " 读取失败" + d);
        })
    }).fail(function (d) {
        alert("文件  " + "parsed/api_mst_slotitem_equiptype.json" + " 读取失败" + d);
    })
}

function genCheck(Obj) {
    years = []
    for (key in Obj) {
        years.push(key)
    }
    var content = "content";
    var checkText = "checkbox";
    var link = "link";
    var size;
    $("#show").html("");
    size = years.length;
    for (var i = 0; i < years.length; i++) {
        genShowContent("show", checkText + i, i, years[i] + "", content + i);
    }
    for (var i = 0; i < years.length; i++) {
        var array = Obj["" + years[i] + ""];
        for (var j = 0; j < array.length; j++) {
            genCheckBox(content + i, link + i, array[j], (array[j]), i, false);
        }
        var box = document.getElementById(checkText + i);
    }
    btnbind()
}
function genCheckBox(id, name, value, showText, parentIndex, isCheck) {
    var checkbox = "<span class='la'><button class='btn " + ($.cookie('d' + value) == btninfo ? btninfo : ($.cookie('d' + value) == primary ? primary : btndef)) + "' parentIndex=" + parentIndex + (isCheck ? " checked='checked'" : '') + " value=" + value + " >" + StranText(formatItemId(showText)) + "</button></span>";
    $("#" + id).append(checkbox);

}
function genShowContent(id, checkboxId, index, showText, idName) {
    var showContent = "<dd class='msg'><dt class='bigfont'>".concat(StranText(showText)).concat("：</dt> <dd class='content' id='").concat(idName).concat("' ></dd></dd><br>");
    $("#" + id).append(showContent);
}
function isAllCheck(name) {
    var box = document.getElementsByName(name);
    for (var j = 0; j < box.length; j++) {
        if (!box[j].checked) {
            return false;
        }
    }
    return true;
}
function arrange(value) {
    release = {}
    if (isNaN(value)) {
        developable.forEach(function (d) {
            for (let i = 0, l = slotitem.length; i < l; i++) {
                e = slotitem[i]
                // slotitem.forEach(function(e){
                if (e['api_id'] == d) {
                    var jstr = e[value]
                } else { continue }
                if (release[jstr]) {
                    release[jstr].push(e['api_id'])
                }
                else {
                    release[jstr] = [];
                    release[jstr].push(e['api_id'])
                }
                break;
            }
        });
    } else {
        if (value == -1) {
            release = {
                "2020/11/13": [78, 147],
                "2020/10/16": [194, 242, 249, 250],
                "2020/03/27": [120],
                "2020/02/07": [51, 90, 207, 226],
                "2017/03/17": [168],
                "2016/06/30": [181],
                "2016/03/11": [49],
                "2016/02/29": [163],
                "2015/06/12": [65, 66],
                "2014/07/04": [73],
                "2014/06/06": [72],
                "2014/05/23": [61],
                "2014/03/14": [59],
                "2014/02/26": [60, 75],
                "2013/08/26": [47, 57],
                "2013/05/15": [54, 55],
                "2013/05/08": [44, 45, 46, 52],
            };
            release["2013/04/23"] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, -1]
        } else {
            if (value == -2) {
                release = init
            } else {
                developable.forEach(function (d) {
                    // for(e of slotitem){
                    for (let j = 0; j < slotitem.length; j++) {
                        e = slotitem[j];
                        if (e['api_id'] == d) {
                            var jstr
                            var tn = e['api_type'][value]
                            switch (value) {
                                case '2':
                                    jstr = formatItype(tn)
                                    break;
                                case '3':
                                    jstr = itag(tn)
                                    break;
                                default:

                                    var jstr = tn
                            }
                        } else { continue }
                        if (release[jstr]) {
                            release[jstr].push(e['api_id'])
                        }
                        else {
                            release[jstr] = [];
                            release[jstr].push(e['api_id'])
                        }
                        break
                    }
                });
            }
        }

    }
    genCheck(release);
}
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

$('.btn').click(btnclick)
function btnclick() {
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
}
$.getJSON("parsed/cstype.json").fail(function (d) {
    w("文件  " + "parsed/cstype.json" + " 读取失败" + d);
})
$("#nav").load("nav.html");
$("#foot").load("foot.html");