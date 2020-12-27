isFirst=true
// setcontainer();
// function setcontainer(){
// $('#container').attr( "style","width:"+(Width()-60)+"px;height:"+(400+Width()-60*2.22)+"px;")};
var exclude = ["id", "sortno", "sort_id", "afterfuel", "afterbull",  "fuel_max", "bull_max", "aftershipid", "ctype", "backs", "afterlv", "slot_num", "type","stype","itype", "buildtime"];
function getcol(){
    var strIds=new Array();//声明一个存放id的数组 
    $("input[name=items]").each(function (i,d){
        if(d.checked){
        strIds.push(d.value); }
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
    if(!raw[0]['i']&&!raw[0]['api_id']){
        console.log(raw[0])
        if(isFirst){info.innerHTML=("点击按钮试试看吧");isFirst=false}else{
        info.innerHTML=(raw[0]); }        return    }
    if(rawlen>325){
        if(isFirst){var temp=[]
            rnd=Math.round(1+21*Math.random())
            for(let i=0;i<rawlen;i++){
            if(raw[i][rawlen>600?'stype':'itype']==rnd&&(rawlen>600?raw[i]['final_form']=='yes':true)){temp.push(raw[i])};}
            raw=temp;}}
    info.innerHTML=(rawlen>325?"（默认加载全表数据，建议在表格中进行筛选）":'');
    column=getcol()
    rawlen=raw.length
    isFirst=false
    if(column.length<1||rawlen<1){
        info.innerHTML=("服务器忙，请在数秒后重试"); console.log(raw,rnd)
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
    // var items=['总确率']
    // console.log(gseries[1])
    // for(let j=1;j<gseries[1].length;j++){
    //     console.log(gseries[1][j],j)
    //     items.push(gseries[1][j])//formatItemId(gseries[1][j].slice(1,gseries[1][j].length)))
    //     console.log(j)
    // }
    // console.log(gseries[1].length)
    // console.log(items.length)
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
    for(let i=0;i<gseries[0].length;i++){
        for(let j=0;j<gseries[0][i]['data'].length;j++){
            if (dmin>gseries[0][i]['data'][j])dmin=gseries[0][i]['data'][j]
        }
    }
    option = {
        // title: {
        //     text: ''
        // },
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                var res =  (params[0].name)+'<br><table>';
                var myseries = '';
                for(let i=0;i<params.length;i++){
                    num=params[i].value
                    if(num){
                        // console.log(params[i],i)
                        myseries+='<tr><td>'+addicon(params[i].seriesName,params[i].color)+'：</td><td  align="right">'+ (num%1 === 0&&temp?num:num.toFixed(3))+'%</td></tr>'
                        temp=num%1 === 0
                }}
                return res+myseries;
            }
        },
        legend: {
            data: gseries[1],
            formatter:addemoji
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
    for(key in prot){
        var e=key
        if(e == 'ratio'||( !thls(e)&& e!='times'&& e[0]!='n'&& e[0]!='l')){
        keys.push(key)}
    }
        var years = keys; 
        genCheck(years);  
}
function getseries(r,c,shape,stack,sortkey){
    w=Width()
    // limit=w>1080?5:(w>900?20:25);
    var limit=Math.round(2*2^(4-w/500));
    var s=[]
    var col=[]
    var rawlen=r.length
    for(k=0;k<c.length;k++){
        var e=c[k]
        var prot=c[k]
        var name=getname(prot,kj)
        var data=[]
        var clr={}
        for(let i=0;i<rawlen;i++){
                    unit=(r[i][e])*100
            data.push(unit)
        }   
        var eie=exclude.indexOf(prot)>-1
        var emoji=""
        switch(nametype(e)) {
            case "ratio":
                emoji= "#d4f2e7"
              break;
            case fail:
                emoji= "#ddd"
              break;
            case 1:
                emoji= "#c222"+ parseInt(10+35*Math.random())
              break;
            case 2:
                emoji= "#c222"+ parseInt(10+35*Math.random())
              break;
            case 3:
                emoji= "#c222"+ parseInt(10+35*Math.random())
              break;
            case 5:
                emoji= "#5987ab"
              break;
            case 16:
                emoji= "#6c7"
              break;
            case 6:
                emoji= "#405e"+ parseInt(11+50*Math.random())
              break;
            case 7:
                emoji= "#447cab"
              break;
            case 8:
                emoji= "#d66461"
              break;
            case 10:
                emoji= "#acd8b3"
              break;
            case 11:
                emoji= "#eeb66f"
              break;
            case 19:
                emoji= "#dcaa44"
              break;
            case 23:
                emoji= "#9279a7"
              break;
            case 13:
                emoji= "#f00"
              break;
            case 18:
                emoji= "#64b1bc"
              break;
            case 17:
                emoji= "#6ba6b0"
              break;
            case 9:
                emoji= "#f5b304"
              break;
            case 25:
                emoji= "#999"
              break;
            case 30:
                emoji= "#899a4d"
              break;
            case 37:
                emoji= "#387027"
              break;
            case 44:
                emoji= "#94e7a5"
              break;
            }
            if(emoji){
                clr={color:emoji}
            }
        s.push({name:name,
                type:eie?(shape=='line'?'bar':'line'):shape,
                stack:eie?(shape=='line'):(stack==0?(shape=='line'?(false):true):(stack==1?true:false)),
                data:data,
                xAxisIndex: eie?1:0,
                origin:prot,
                label: {
                    show: true,
                    formatter:
                    // e=='itype'?
                    function(params){
                        // if(temp==formatItype(params.value)){return ''}else{
                        // temp=formatItype(params.value)
                        //  return temp}}:(e=='stype'?function(params){
                        // if(temp==formatStype(params.value)){return ''}else{
                        // temp=formatStype(params.value)
                        //  return temp}}:function(params){
                        // if(params.seriesType=='line'){
                        //     if(Math.random()<0.8||(params.value==0)){return ""}else{
                        //         return params.value
                            // }
                        // }else{
                            if(params.value<limit){return ""}else{
                                return params.value.toFixed(1).replace(/[.]?0+$/g,"") +'%'
                        }
                    },
                    // ),
                    position: eie?'right':'insideLeft',
                },
                lineStyle: {
                  type: prot==sortkey?'solid': (Math.random()>0.7?"dashed":(Math.random()>0.5?'solid':'dotted')),
                  width: prot==sortkey?4: 1
                },
                itemStyle: clr
            })
        col.push(name)
    }
    var shipname=[]
    var nametitle='title'
    if(!r[0][nametitle]){nametitle='i'}
    for(let i=0;i<rawlen;i++){
        shipname.push(r[i][nametitle])
    }

    if(shape=='bar'||sortkey=='sum'){
        var len = s[0]['data'].length;
        var slen=col.length
        s[slen]={name:kj?'合计':'total',
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
    console.log([s,col,shipname])
return [s,col,shipname]
}
function genCheck(years) {  
    var content = "content";  
    var checkText = "checkbox";  
    // var link = "link";  
    var size;  
    $("#show").html("");  
    size = years.length;  
    for (var i = 0; i < size; i++) {
        // if(exclude.indexOf(years[i])>-1){}else{
        genShowContent("show", checkText + years[i], i, years[i], content + years[i]);}
    // }  
}
function genShowContent(id, checkboxId, index, showText, idName) {  
    if(showText=='name'||showText=='title'){return}
    var chck=" checked='checked'"
    var isCheck=true
    if(showText=='ratio'){isCheck=false}
    var showContent = "<span class='msg'><input type='checkbox' name='items'"+((isCheck)?chck:"")+" value='".concat(showText,"' id='",checkboxId,"'/><label class='bigfont' for='"+checkboxId+"'>",addicon(getname(showText,kj))," </label><span class='content' id='",idName,"' ></span></span>")
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
function addemoji(value){
    var str=bra(value,0);
    var emoji=''
    type=nametype(str)
    switch(type) {
        // case 1:
        //     emoji= "🧨"
        //   break;
        // case 2:
        //     emoji= "🧨"
        //   break;
        // case 3:
        //     emoji= "🧨"
        //   break;
        // case 16:
        //     emoji= "🍾"
        //   break;
        case 6:
            emoji= "🛫"
          break;
        case 7:
            emoji= "🛫"
          break;
        case 8:
            emoji= "🛫"
          break;
        case 10:
            emoji= "✈️"
          break;
        case 11:
            emoji= "〽️"
          break;
        case 19:
            emoji= "⚙️"
          break;
        case 23:
            emoji= "🟪"
          break;
        case 13:
            emoji= "🖍️"
          break;
        // case 18:
        //     emoji= "🧿"
        //   break;
        // case 17:
        //     emoji= ""
        //   break;
        case 9:
            emoji= "🛩️"
          break;
        case 25:
            emoji= "🛢"
          break;
        case 30:
            emoji= "⛀"
        //   break;
        // case 37:
        //     emoji= ""
        //   break;
        // case 44:
        //     emoji= "🛩️"
        //   break;
        }
        return emoji+str;
    }
function nametype(value){
    str=bra(value,0)
    for (aitem=0;aitem<slotitem.length;aitem++){
        if(slotitem[aitem]['api_name']==str){
            str=slotitem[aitem]['api_type'][3];
            break;
        }
    }
    return str
}