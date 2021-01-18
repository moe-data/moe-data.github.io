stype[174] = "Z1 Z3";
stype[439] = "Warspite";
stype[441] = "Littorio级";
stype[443] = "Libeccio级";
stype[448] = "Zara级";
stype[491] = "Commandant Teste";
stype[515] = "Ark Royal";
stype[530] = "伊504";
stype[535] = "Luigi Torelli";
stype[539] = "UIT-25";
stype[553] = "伊勢改(二)";
stype[554] = "日向改(二)";
stype[571] = "Nelson";
stype[589] = "L.d.S.D.d.Abruzzi级";
const devpic = '<img src="https://uploads.kcwiki.cn/commons/a/a8/IcoMaterial.png" alt="资材" style="height:22px;">';

var o = GetRequest("o", 1);
var e = GetRequest("e", 1);
e = e.indexOf("") ? e : [];
const q = GetRequest("q", 1);
const ranget = GetRequest("t", 1);
let jsindex = 0;
var bigdata = [];
var slotitem;
const api_=(q == 'd') ? 'api_' : '';
const jsonfile= (q == 'd') ? 'api_mst_slotitem' : 'ship';
var lseg = { i: "", fuel:"",  ammo:"",  steel:"",  bauxite:"", 資材:"", secretary:"", denominator: '', times: '', ratio: '' };
var kj = false;
var ship;
var csjson = [];
var bar = 1;
$('.loading').css("width",Width())
$.getJSON("parsed/cstype.json").done(function (result) {
    csjson = result;jsonover()
});
$.getJSON("parsed/" + jsonfile + ".json").done(function (result) {
    slotitem = result;jsonover()
    var oname=[];
    for(let j=0;j<o.length;j++){
        oname.push(addemoji(formatOnlyname(o[j])))
    }
    document.title = oname;
});
$('#denominator').val(Number(GetRequest("a", 1)));
var sorted = [];
var minlv = GetRequest("l")=='true'?true:false;
function progress(p) {
    bar += p;
    $('.progress-bar').css("width", bar + '%');
};
var detect = (navigator.browserLanguage || navigator.language);
if (!havelang) {
    if (detect.length > 0) { console.log(detect); } else { detect = "zh-CN" };
    if (detect.slice(0, 2) == 'zh' || detect.slice(0, 2) == 'ja') {
        kj = true;
    }
    selectlang = document.getElementById("locale");
    for (let i = 0; i < selectlang.length; i++) {
        if (selectlang[i].value == detect) {
            selectlang[i].selected = true;
        }
    }
}
function jsonover(){    
    jsindex++;
    console.log(jsindex ,ranget.length + 2,bigdata.length);
    progress(1 / (ranget.length + 2) * 80);
    // if (jsindex == ranget.length + 1)$('h3.panel-title')[0].innerHTML = ("数据计算中。。。");
    if (jsindex >= ranget.length + 2) {
    progress(20);
    var filted = filt(group2By(bigdata, "i", "s"), o);
    if (!filted.length) {
        $('h3.panel-title')[0].innerHTML = ('无匹配的结果，请减少主查询个数，或将主查询改为副查询')
    } else {
        // console.log(filted.length);
        o = o.concat(e);
        isonl = isonladd(filted, o);
        isonl.forEach(function(e) {
            denominator = 0;
            for (keys in e) {
                if (keys[0] == 'n') {
                    denominator += e[keys];
                }
            }
            e['denominator'] = denominator;
            e['ratio'] = 0;
            e['times'] = 0;
            for (key in e) {
                if (key[0] == 'n') {
                    k = key.slice(1, key.length);
                    e[formatOnlyname(k)] = e[key] / e['denominator'];
                    if (o.indexOf(k) > -1) {
                        e['ratio'] += e[formatOnlyname(k)];
                        e['times'] += e['n' + k];
                    }
                }
            }
        });
        setdeno(1);
    }
    $('.loading').hide();
}else if(jsindex == 3) {
// var filted = filt(group2By(bigdata, "i", "s"), o);
//     if (filted.length){
//         o = o.concat(e);
//         isonl = isonladd(filted, o);
//         isonl.forEach(function(e) {
//             denominator = 0;
//             for (keys in e) {
//                 if (keys[0] == 'n') {
//                     denominator += e[keys];
//                 }
//             }
//             e['denominator'] = denominator;
//             e['ratio'] = 0;
//             e['times'] = 0;
//             for (key in e) {
//                 if (key[0] == 'n') {
//                     k = key.slice(1, key.length);
//                     e[formatOnlyname(k)] = e[key] / e['denominator'];
//                     if (o.indexOf(k) > -1) {
//                         e['ratio'] += e[formatOnlyname(k)];
//                         e['times'] += e['n' + k];
//                     }
//                 }
//             }
//         });
//         setdeno();
// }
}}
function setdeno(a) {
    $(".deno").css("background","");
    sorted = [];
    isonl.forEach(function(e) {
        if (e['denominator'] > $('#denominator').val()) {
            sorted.push(e);
        };
    });
    if (sorted.length) {
        sortkey = GetRequest("s");
        if(!sortkey==0){
            sorted.sort(sortby);
            sorted.reverse();
        }
        langchange();
        if(a){
        progress(97);
        $('div.panel').hide();
        $("#foot").load("foot.html");}
    } else {
        $('div.panel').show();
        $('h3.panel-title')[0].innerHTML = ('存在查询结果，但公式次数设置过大，请在左上方重新设置');
        $(".deno").css("background","gold");
            }
}
var colorFlag = 0;
$(document).ready(function () {
    $('#locale').change(function () {
        progress(5);
        setlang();
        langchange();
    });
    setTimeout(function () {
        js("https://cdn.bootcdn.net/ajax/libs/bootstrap-table/1.18.0/bootstrap-table-locale-all.js");
        js("https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js");
        progress(2);
        if (!havelang) {
            document.getElementById("locale")[0].selected = true;
        }
    }, 2400);
    setTimeout(function () {
        progress(3);
        // $("#foot").load("foot.html");
        $('.search-input').bind("input onchange", function () {
            setTimeout(function () {
                for (let i = 0; i < 6; i++) {
                    document.getElementsByClassName('search-input')[i].value = Japanized(document.getElementsByClassName('search-input')[i].value);
                }
            }, 50);
        });
        // loadchart();
    }, 2400);
});
function bgclr(a,b){
    if(Simplized(b.innerHTML)==title[a])$(b).addClass('css'+a);
}
function langchange() {
    initTable(locallang());
    $('div.th-inner.sortable.both').each(function(){
        if([devpic,'油','弹','钢','铝'].indexOf(Simplized(this.innerHTML))>-1||!isNaN((this.innerHTML))){
        $(this).css("width","0px");
        if(!isNaN((this.innerHTML)))$(this).css("color","grey");
        bgclr('fuel',this);
        bgclr('ammo',this);
        bgclr('steel',this);
        bgclr('bauxite',this);
        }
    })
}
function thead(eg) {
    var co = [];
    var col = [];
    for (e in eg) {
        var visible = true;
        var temp = getname(e, kj);
        var formatter = undefined;
        var colspan = minlv ? 3 : 2;
        var rowspan = 1;
        var strict = false;
        if (e == 'i') {
            colspan = 1;
            rowspan = 2;
            formatter = formatLink;
        }else{if(thls(e)){
            colspan = 1;
            rowspan = 2;
            if(e=='資材'){
            temp=devpic;
            if(q=='d')visible=false;}
        }}
        if (e == 'ratio') {
            colspan = 2;
            temp = '主查询合计';
            formatter = formatR;
        }
        if (e == 'ratio' || thls(e)||e[0]=='n') {
            if (!isNaN(e[e.length - 1])) {
                showid = e.slice(1, e.length);
                temp = (q == 'd') ? formatItemId(showid):formatshipId(showid);
            }
            co.push({
                title: getname(temp,kj),
                field: e,
                sortable: true,
                filterControl: 'input',
                filterStrictSearch: strict,
                formatter: formatter,
                colspan: colspan,
                rowspan: rowspan,
                visible: visible,
                // cellStyle:cellStyle,
                // escape:escapes,
            })
        }
    }
    for (e in eg) {
        var formatter = undefined;
        var f = '出货';
        if (e[0] == 'n') {
            f = e.slice(1, e.length);
        }
        // if (e == 'ratio'||( e!='i'&& e!='fuel'&& e!='denominator'&& e!='times'&& e!='ammo'&& e[0]!='n'&& e[0]!='l')) {
        if (e == 'ratio'||( !thls(e)&& e!='times'&& e[0]!='n'&& e[0]!='l')) {
            f = '%';
            if (e == 'ratio') {
                f = '确率';
            }
            formatter = formatR
        }
        if (e[0] == 'l') {
            f = 'Lv';
        }
        if (e == 'times' || e[0] == 'n' ||!thls(e)){
            col.push({
                title: f,
                field: e,
                sortable: true,
                formatter: formatter,
            })
        }
    }
    return [co, col];
}
function thls(e){
    return ['i','fuel','ammo','steel','bauxite','資材','secretary','denominator'].indexOf(e)>-1
}
function formatR(value) {
    return value ? (value * 100).toFixed(2) + '%' : null;
}
function formatLink(value, row, index) {
    remove(value,1);
    var piedata=[];
    for(key in row){
        if(key[0]=='n'){
            var itemID = key.slice(1,key.length);
            var name=addemoji(formatOnlyname(itemID));
            piedata.push({value: row[key], name: name});
        }
      }
    piedata.push(value);
    return "<a href='javascript:pie(" +JSON.stringify(piedata)+")'>"+value+"</a>";
}
function pie(e){
    // alert(JSON.stringify(e));
    $.cookie('pie',JSON.stringify(e), { expires: 365, path: '/' });
    window.location.href="pie.html";
}
function group2By(array, i, s) {
    let groups = {};
    array.forEach(function (o) {
        let group = JSON.stringify(o[i] + o[s]);
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });
    let arr=[];
    for (key in groups){
        arr.push(groups[key]);
    }
    return arr;
}
function filt(r, o) {
    var array = [];
    r.forEach(function(element) {
        var f = true;
        o.forEach(function(oe) {
            var ff = false;
            element.forEach(function(el) {
                // f = f && el['o'] == o[k]
                if (el['o'] == oe) {
                    ff = true;
                }
            });
            if (!ff) { f = false };
        });
        if (f && element[0]['s'] != 0) {
            array.push(element);
        }
    });
    return array;
}
function isonladd(array, o) {
    for (k = 0; k < o.length; k++) {
        egnrl(o[k]);
    }
    if(q=='d'){
    egnrl('-1');}
    let groups = [];
    // o.push(-1)
    for (let i = 0, l = array.length; i < l; i++) {
        let is = array[i][0]['i'];
        if(q=='d'){is.push(1);
            is.push(formatStype(array[i][0]['s']));}else{
            is.push(formatshipId(array[i][0]['s']));
        }
        var onal = { 'i': (is) };
        for(let j= 0; j < array[i].length; j++) {
            var item = jsonstr(array[i][j]['o']);
            egnrl(item);
            if (onal['n' + item]) {
                onal['n' + item] += Number(array[i][j]['n']);
            } else {onal['n' + item] = 0 + Number(array[i][j]['n']) };
            if (minlv) {
                if (onal['l' + item]) {
                    onal['l' + item] = Math.min(onal['l' + item], Number(array[i][j]['l']));
                } else { onal['l' + item] = Math.min(121, Number(array[i][j]['l'])) }
            }
        }
        groups.push(onal);
    };
    return (groups);
}
function egnrl(item) {
    lseg['n' + item] = 0;
    lseg[formatOnlyname(item)] = 0;
    if (minlv) {
        lseg['l' + item] = 0;
    }
}
function initTable(lval) {
    if (lval) { kj = (lval.slice(0, 2) == 'zh' || lval.slice(0, 2) == 'ja') } else { console.log(lval) };
    lsegname={'ratio':""};
    for(key in lseg){
        if(key[0]=='r'&&key!='ratio'){
            key = key.slice(1,key.length);
            var k=formatOnlyname(key);
            lsegname[k]=0;
        }
    }
    loadprot(lseg);
    // console.log("load table", sorted)
    addcol(sorted,"fuel","i",0);
    addcol(sorted,"ammo","i",1);
    addcol(sorted,"steel","i",2);
    addcol(sorted,"bauxite","i",3);
    addcol(sorted,"資材","i",4);
    addcol(sorted,"secretary","i",5);
    $('#mytab').bootstrapTable('destroy').bootstrapTable({
        method: 'get',
        data: sorted,
        sortReset: true,
        striped: true, // 是否显示行间隔色
        pageNumber: 1, // 初始化加载第一页
        pagination: true, // 是否分页
        sidePagination: 'client', // server:服务器端分页|client：前端分页
        pageSize: 20, // 单页记录数
        pageList: [10, 50, 100, 500],
        stickyHeader: true,
        stickyHeaderOffsetLeft: em,
        stickyHeaderOffsetRight: em,
        locale: lval,
        columns: thead(lseg)
    });
    // if (Width() < 900 && kj) { $('.table .th-inner').css('writing-mode', 'vertical-lr'); }
    var padding = '6';
    // if (Width() < 1200) {
    //     padding = kj ? '' : '4';
    //     $('.table .th-inner').css('white-space', 'normal')}
    document.getElementById("csscontainer").innerHTML = (".fix-sticky {padding-top:" + padding + "0px;position: fixed !important;overflow: hidden;  z-index: 100;}");
}
function formatOnlyname(value) {
    var str=value;
    if(value==-1){
        return fail;
    };
    for (nitem=0;nitem<slotitem.length;nitem++){
        if(slotitem[nitem][api_+'id']==value){
            str=slotitem[nitem][api_+'name'];
    return bra(str,1);
        }
    }return bra(str,1);
    }
function addicon(name,c){
    var str=bra(name,0);
    var color=c?'<span style="color:'+c+';">▐</span>':'';//▮∎■
    for (let a=0;a<slotitem.length;a++){
        if(slotitem[a]['api_name']==str){
    return '<span class="flex">'+color+itag(slotitem[a]['api_type'][3])+str+'</sapn>';
        }
    }return '<span class="flex">'+color+str+'</sapn>';
    }

if(q=='c'){
    // $('span.msg').css("width","76px");
    document.getElementById('css').innerHTML+='span.msg{width:76px}' 
}else{
    document.getElementById('css').innerHTML+='span.msg{width:162px}' 
}
