var title = {
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
    "houk": "回避",
    "anti_submarine": "对潜",
    "tais": "对潜",
    "sight": "索敌",
    "saku": "索敌",
    "description": "描述",
    // "price": "价格",
    "baku": "爆装",
    "houm": "命中",
    "dtype": "本站暂行分类",
    "cs": "分类ID",
    "csname": "舰型ID",
    "rare": "稀有",
    "n": "出货次数",
    "items": "公式",
    "secretary": "旗舰",
    "i": "点击查看饼图",
    "secretary": "旗舰",
    "times": "出货",
    "denominator": "公式次数",
    "ratio": "总确率",
    "l": "最低等级",
    "developable": "开发",
    "fuel": "油",
    "ammo": "弹",
    "steel": "钢",
    "bauxite": "铝",
    "reward_fuel": "油",
    "reward_ammo": "弹",
    "reward_steel": "钢",
    "reward_bauxite": "铝",
    prerequisite: '前置任务',
    requirements: '需求',
    reward_other: '其他奖励',
    postQuest: '后继任务',
}
var stype = [0, "海防艦", "駆逐艦", "軽巡洋艦", "重雷装巡洋艦", "重巡洋艦", "航空巡洋艦", "軽空母", "戦艦", "低速戦艦", "航空戦艦", "正規空母",
    "超弩級戦艦", "潜水艦", "潜水空母", "補給艦", "水上機母艦", "揚陸艦", "装甲空母", "工作艦", "潜水母艦", "練習巡洋艦", "補給艦"]
function formatStype(value) {
    return stype[value] == null ? value : stype[value];
}
function formatDtype(value, row, index) {
    return stype[value] == null ? row["csname"] : stype[value];
}
function formatshipId(value, row, index) {
    var str = value
    for (let i = 0; i < csjson.length; i++) {
        if (csjson[i]['id'] == value) {
            str = csjson[i]['name']; break
        }
    }
    return str;
}
function addcol(result, col, old, n) {
    l = result.length
    if (!l) { console.log("empty"); return }
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
    return isNaN(x[sortkey]) ? (isNaN(x[sortkey][1]) ? x[sortkey].localeCompare(y[sortkey]) : (sortkey == 'luck' ? x[sortkey][0] - y[sortkey][0] : x[sortkey][1] - y[sortkey][1])) : x[sortkey] - y[sortkey]
}
function bSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，大的元素交换到后面
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
function getname(api, kj) {
    var name
    if (kj) {
        name = title[api]
        if (name == null) {
            name = english(api)
        } else {
            if ($.cookie('JF_cn') == "1") { name = Traditionalized(name) } else {
                if ($.cookie('JF_cn') == "0") { name = Simplized(name) } else {
                    if ($.cookie('JF_cn') == "2") { name = Japanized(name) }
                }
            }
        }
    } else { name = english(api) }
    return name
}
function english(api) {
    var name
    if (api == null) { return }
    name = api.replace('api_', '').replace(/_/g, ' ')
    return name
}
function api(name) {
    return name.replace('api_', '')
}
function Width() {
    return document.body.clientWidth;
}
setTimeout(function () {
    if (($('.loading').is(':hidden') || "undefined" != typeof btninfo) && Width() > 1000) {
        document.body.style.setProperty('--pic', "url(https://fleet.diablohu.com/!/assets/images/homebg/" +
            // "2"
            Math.round(25 * Math.random())
            + ".jpg)");
        // console.log($('#logo').css("width"))
        $('#logo').attr("width", "500px")
    }
}, 2000);
//bootstrap出现特殊字符冲突
function bra(value, x) {
    if (x) { return value.replace("(", "（").replace(")", "）").replace("/", "╱") } else {
        return value.replace("（", "(").replace("）", ")").replace("╱", "/")
    }
}

function clearall() {
    $('.btn').each(function () {
        $(this).addClass(btndef)
        $.cookie('d' + $(this).val(), null, { expires: 365, path: '/' })
        $(this).removeClass(btninfo)
        $(this).removeClass(primary)
    })
}
function btnbind() {
    $('.btn').click(function () {
        $(this).addClass('clicked')
        if ($(this).hasClass(primary)) {
            $(this).removeClass(btndef)
            $(this).addClass(btninfo)
            $.cookie('d' + $(this).val(), btninfo, { expires: 365, path: '/' })
            $(this).removeClass(primary)
        } else {
            if ($(this).hasClass(btninfo)) {
                $(this).addClass(btndef)
                $.cookie('d' + $(this).val(), null, { expires: 365, path: '/' })
                $(this).removeClass(btninfo)
                $(this).removeClass(primary)
            } else {
                $(this).addClass(primary)
                $.cookie('d' + $(this).val(), primary, { expires: 365, path: '/' })
                $(this).removeClass(btndef)
            }
        }
    })
}
function itag(str) {
    return '<i style="background-image:url(https://fleet.diablohu.com/!/assets/images/itemicon/' + str + '.png);" class="item"></i>'
}
function lvplus(arr) {
    if (isNaN(arr))
        return
}


function qndate(qn) {
    var date = new Date(2020, qn + 1).toLocaleDateString()
    z(qn, date)
    return date.slice(0, -2)
}
function timetable(t) {
    var timelist = $('.list').html()
    t.forEach(e => {
        timelist += '<tr><td><input class="time" type="checkbox" value="' + e[0] +
            '"  id="' + e[0] +
            '" checked="checked"><label for ="' + e[0] +
            '">' + qndate(e[0]) +
            '</label></td><td align="right">' + e[1] +
            '</td><td align="right">' + e[2] +
            '</td> <td align="right">' + e[3] +
            'MB</td> </tr>'

    })
    $('.list').html(timelist)
}