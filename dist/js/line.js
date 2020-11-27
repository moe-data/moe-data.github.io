isFirst=true
// setcontainer();
// function setcontainer(){
// $('#container').attr( "style","width:"+(Width()-60)+"px;height:"+(400+Width()-60*2.22)+"px;")};
var exclude = ["id", "sortno", "sort_id", "afterfuel", "afterbull",  "fuel_max", "bull_max", "aftershipid", "ctype", "backs", "afterlv", "slot_num", "type","stype","itype", "buildtime"];
function getcol(){
    var strIds=new Array();//声明一个存放id的数组 
    $("input[name=items]").each(function (i,d){ 
        if(d.getAttribute("index")==1){
        if(d.checked){
        strIds.push(d.value); }}else{
            var la =d.nextSibling.nextSibling.children;
            for(lalen=la.length,j=0;j<lalen;j++){
                if(la[j].firstChild.checked){strIds.push(d.value+'#'+j)//"Max",d.value+"Min")
                }
            }
        }
    }) 
    return strIds}
    
function loadchart(){
    info=document.getElementById('inform')
    if("undefined" == typeof echarts){
        if(isFirst){info.innerHTML=("默认加载全表数据，建议在表格中进行筛选");isFirst=false}else{
            info.innerHTML=(echarts); }            return    }
    var w=Width()
    var myChart = echarts.init(document.getElementById("container"));
    option = null;
    var raw=[]
    raw=$table.bootstrapTable('getSelections');
    if(raw.length==0){
        raw=$table.bootstrapTable('getData');
    }
    var rawlen=raw.length
    var rnd
    if(raw.length==0){console.log(raw);info.innerHTML=("没有符合筛选的数据");isFirst=false;return}
    if(!raw[0]['id']&&!raw[0]['api_id']){
        console.log(raw[0])
        if(isFirst){info.innerHTML=("点击按钮试试看吧");isFirst=false}else{
        info.innerHTML=(raw[0]); }        return    }
    if(rawlen>325){
        if(isFirst){var temp=[]
            rnd=Math.round(1+21*Math.random())
            for(i=0;i<rawlen;i++){
            if(raw[i][rawlen>600?'stype':'itype']==rnd&&(rawlen>600?raw[i]['final_form']=='yes':true)){temp.push(raw[i])};}
            raw=temp;}}
    info.innerHTML=(rawlen>325?"（默认加载全表数据，建议在表格中进行筛选）":'');
    column=getcol()
    rawlen=raw.length
    isFirst=false
    if(column.length<1||rawlen<1){
        info.innerHTML=("请选择属性"); console.log(raw,rnd)
        return    }
    sortkey=$('#sort').val();
    if(sortkey!='unsort'&&(raw[0][sortkey]||raw[0][sortkey]==false)){
    raw.sort(sortby)}
    console.log("start chart "+rawlen)//[0]["name"])
    var h=200+rawlen*15
    var extra=100
    var lable=0
    var sqrtrl=81/Math.sqrt(rawlen)
    var shapeval=$('#shape').val()
    if(!shapeval){shapeval='bar'}
    var stackval=$('#stack').val()
    if(!stackval){stackval=0}
    gseries=getseries(raw,column,shapeval,stackval,sortkey)
    lable=Math.round(gseries[1].length/4*22/w*375)+sqrtrl
    if(h>2178){h=2178;extra=50}
    document.getElementById('container').style.height = lable+extra+h+'px'
    document.getElementById('container').style.width = Width()-60+'px'
    myChart.resize();//直接加这句即可
    var interval='auto'
    var fontSize=10
    var rotate= 0
    if(rawlen<=100){
        interval=0;
    }
    if(rawlen<80){
        fontSize=12
    }
    var temp=0
    var temp2=30
    if(rawlen<6){temp=30}
    if(w<560){temp2=20}
    grid=lable+temp+temp2
    var inverse=true
    if($('#desc').length){inverse=!$('#desc')[0].checked}
    if(sortkey=='unsort'){inverse=!inverse}
    var dmin=0
    for(i=0;i<gseries[0].length;i++){
        for(j=0;j<gseries[0][i]['data'].length;j++){
            if (dmin>gseries[0][i]['data'][j])dmin=gseries[0][i]['data'][j]
        }
    }
    option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: gseries[1]//['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
            left: '0%',
            right: '0%',
            top: grid,
            bottom: '1%',
            containLabel: true,
            height: h
        },
        toolbox: {
            feature: {saveAsImage: {}}
        },
        yAxis: {
            type: 'category',
            boundaryGap: false,
            data: gseries[2],
            axisLabel: {
                interval: interval,
                rotate: rotate,
                fontSize: fontSize
              },
            inverse:inverse,
        },
        xAxis: [{
            type: 'value',
            offset: sqrtrl>40?40:sqrtrl,
            min:dmin
            // max: 'dataMax'
            },{
            type: 'value',
            offset: sqrtrl>40?40:sqrtrl,
            min:dmin
            }],
        series: gseries[0],
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }}

function loadprot(prot){
    var keys=[]
    var months = {}
    var stat=[]
    for(key in prot){
        if(isNaN(prot[key])){
            if(isNaN(prot[key][0])){stat[key]=0}else{
                keys.push(key)
                stat[key]=prot[key].length
                months[key]=[]
                for (i=0;i<stat[key];i++){
                    months[key].push(i+1)
                }
            }
        }else{
        keys.push(key)
        stat[key]=1
        }
    }
        var years = keys; 
        // var yearMonth = [years, months];  
        genCheck(years, months,stat);  
}
function getseries(r,c,shape,stack,sortkey){
    w=Width()
    // limit=w>1080?5:(w>900?20:25);
    var limit=Math.round(4*2^(4-w/500));
    var s=[]
    var col=[]
    var rawlen=r.length
    for(k=0;k<c.length;k++){
        var e=c[k]
        // for(e of c){
        var prot
        var suffix=""
        if(e.indexOf('#')>0){
            prot=e.split('#')[0]
            if(r[0][prot].length==2){
                if(e.split('#')[1]==1){
                    // suffix=" min"}else{
                        suffix=" max"}
            }else{
            suffix=1+Number(e.split('#')[1])};
        }else{
                prot=e
            }
        var name=getname(prot,kj)+suffix
        var data=[]
        for(i=0;i<rawlen;i++){
            if(r[i][e]==null){  if(r[i][(e.split('#')[0])]==null){
                unit=0}else{
                unit=(r[i][(e.split('#')[0])][e.split('#')[1]])}}else{
                    unit=(r[i][e])
                }
            data.push(unit)
        }   var eie=exclude.indexOf(prot)>-1
        s.push({name:name,
                type:eie?(shape=='line'?'bar':'line'):shape,
                stack:eie?(shape=='line'):(stack==0?(shape=='line'?(false):true):(stack==1?true:false)),
                data:data,
                xAxisIndex: eie?1:0,
                origin:prot,
                label: {
                    show: true,
                    formatter:e=='itype'?function(params){
                        if(temp==formatItype(params.value)){return ''}else{
                        temp=formatItype(params.value)
                         return temp}}:(e=='stype'?function(params){
                        if(temp==formatStype(params.value)){return ''}else{
                        temp=formatStype(params.value)
                         return temp}}:function(params){
                        if(params.seriesType=='line'){
                            if(Math.random()<0.8||(params.value==0)){return ""}else{
                                return params.value
                            }
                        }else{
                            if(params.value<limit){return ""}else{
                                return params.value
                        }}
                    }),
                    position: eie?'right':'insideLeft',
                },
                lineStyle: {
                  type: prot==sortkey?'solid': (Math.random()>0.7?"dashed":(Math.random()>0.5?'solid':'dotted')),
                  width: prot==sortkey?4: 1
                }
            })
        col.push(name)
    }
    var shipname=[]
    var nametitle='title'
    if(!r[0][nametitle]){nametitle='name'}
    for(i=0;i<rawlen;i++){
        shipname.push(r[i][nametitle])
    }

    if(shape=='bar'||sortkey=='sum'){
        var len = s[0]['data'].length;
        var slen=col.length
        s[slen]={name:kj?'属性合计':'total',
            symbol:'none',
            type:'line',
            stack:false,
            data:[],
            xAxisIndex: 1,
            lineStyle: {
              type: "dashed",
              width: 0
            }}
        for(var i = 0; i < len; i++){
            var sum=0
            for(var j=0;j<slen;j++){
                if(exclude.indexOf(s[j]['origin'])>-1||isNaN(s[j]['data'][i])){continue}
                sum+=Number(s[j]['data'][i])
            }
            s[slen]['data'].push(sum)
        }
    if(sortkey=='sum'){
        for (var n = 0; n < len-1; n++) {
            for (var m = 0; m < len - 1 - n; m++) {
                if (s[slen]['data'][m] > s[slen]['data'][m + 1]) {
                for(var j=0;j<=slen;j++){
                    var temp = s[j]['data'][m];
                    s[j]['data'][m] = s[j]['data'][m+1];
                    s[j]['data'][m+1] = temp;
                }
                var temp = shipname[m];
                shipname[m] = shipname[m+1];
                shipname[m+1] = temp;
                }
            }
        }
    }}
return [s,col,shipname]
}
function genCheck(years, months,stat) {  
    var content = "content";  
    var checkText = "checkbox";  
    var link = "link";  
    var size;  
    $("#show").html("");  
    size = years.length;  
    for (var i = 0; i < size; i++) {
        // if(exclude.indexOf(years[i])>-1){}else{
        genShowContent("show", checkText + years[i], i, years[i], content + years[i],stat[years[i]]);}
    // }  
    for (i in months){
        for(j in months[i]){
            genCheckBox(content + i, link + i, months[i][j], months[i][j], i, stat[i]);  }
        // var flag = isAllCheck(link + i);  
        // var box = document.getElementById(checkText + i);  
        // if (flag) {  
        //     box.checked = true;  
        // } else {  
        //     box.checked = false;  
        // }  
        $("input[name=" + link + i + "]").each(function () {  
            $(this).unbind();  
            $(this).change(function () {
                var flag = isAllCheck($(this).attr("name"));  
                var box = document.getElementById(checkText + $(this).attr("parentIndex"));  
                if (flag) {  
                    box.checked = true;  
                } else {  
                    box.checked = false;  
                }  
            });  
        });  
    }  
    for (var i = 0; i < size; i++) {
        if(stat[years[i]]>1){
        $("#" + checkText + years[i]).unbind();  
        $("#" + checkText + years[i]).change(function () {  
            var temp = link + $(this).attr("value");  
            var p = document.getElementById(checkText + $(this).attr("value"));  
            var box = document.getElementsByName(temp);  
            for (var j = 0; j < box.length; j++) {  
                if (p.checked) {  
                    box[j].checked = true;  
                } else {  
                    box[j].checked = false;  
                }  
            }  
        });  
    }  }
}  

function genCheckBox(id, name, value, showText, parentIndex, stat) {
    var chck=" checked='checked'"
    var txt=showText
    var isCheck=false
    if(stat==2){
        if(showText==1){txt="min";    }else{
        txt="max";isCheck=true;
    }
    if(parentIndex=='luck'){isCheck=!isCheck}if(parentIndex=='taik'){isCheck=false}}
        var checkbox = "<span class='la'><input type='checkbox' parentIndex=" + parentIndex + " name=".concat(name,((isCheck)?chck:"")+" value=",value," alt=",showText," /><span>",txt,"</span></span>");  
        $("#" + id).append(checkbox);  
    // debug(id,checkbox)
}  


function genShowContent(id, checkboxId, index, showText, idName,stat) {  
    if(showText=='name'||showText=='title'){return}
    var chck=" checked='checked'"
    var isCheck=false
    // console.log(id, checkboxId, index, showText, idName,stat)
    var colon='#'
    if(stat==1){colon=""}
    if(showText=='anti_submarine'||showText=='sight'||showText=='evasion'||showText=='HP'||showText=='houg'||showText=='raig'||showText=='tyku'){isCheck=true}
    var showContent = "<span class='msg'><input type='checkbox' name='items'"+((isCheck)?chck:"")+" value='".concat(showText,"' index=",stat," id='",checkboxId,"'/><span class='bigfont'>",getname(showText,kj),colon," </span><span class='content' id='",idName,"' ></span></span>")
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
