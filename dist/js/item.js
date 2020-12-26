
var slotitem
var fail="🐧 失败"
var years = [];
var init = {"主砲/副砲":[1,2,147,3,4,5,6,65,90,7,8,9,10,11,12,66],"魚雷":[13,14,15,41],"艦上攻撃機":[16,17,18,52,242],"艦上戦闘機":[19,20,21,22,55,181,249],"艦上爆撃機":[23,24,57,60],"水偵水爆":[25,59,163,26,194,207],"電探":[27,28,29,30,31,32],"増設":[33,34,72,73],"砲弾":[37,38,39,40,49,51,35,36],"ソナー/爆雷":[46,47,44,45,226],"艦上偵察機":[54,61],"其の它":[75,120,168,250]}
developable=[]
var release=init
for(key in release){
  release[key].forEach(function(e){
    developable.push(e)
})
// developable.sort(sortNumber)
}
var itype
function formatItype(value) {
    var typename=value
    itype.forEach( function(el) {
        if(el['api_id']==value){
            typename=el['api_name']
        }
    });
    return typename;
    }
function formatItemId(value) {
    var str=value
    if(value==-1){
        return fail
    }
    for (i=0;i<slotitem.length;i++){
        // console.log(slotitem[i]['api_id'],value)
        if(slotitem[i]['api_id']==value){
            str=slotitem[i]['api_name']
            type=slotitem[i]['api_type'][3]
    return '<span class="flex"><i style="background-image:url(https://fleet.diablohu.com/!/assets/images/itemicon/'+type+'.png);" class="item"></i>'+str+'</sapn>';
        }
    }return str
    }
