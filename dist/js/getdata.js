// const q = GetRequest("q", 1);
// const ranget = GetRequest("t", 1);
var bigdata = [];

for (t = 0; t < ranget.length; t++) {
    let qn=q + ranget[t]
    let zhimg
    switch(qn) {
        case 'c0':
            zhimg= ["https://pic1.zhimg.com/v2-b268cef03b23183609449136a5b9fc50_r.jpeg","https://pic2.zhimg.com/v2-107f50321d135b881112c2270d521285_r.png"]
          break;
        case 'c1':
            zhimg= ["https://pic4.zhimg.com/v2-69b7e5827f96e8e4f11ba2c10c42b53f_r.png"]
          break;
        case 'c9':
            zhimg= ["https://img-blog.csdnimg.cn/20210122151445480.jpg","http://tiebapic.baidu.com/forum/pic/item/cd8f1d13495409235c4ca2398558d109b3de490b.jpg","https://pic2.zhimg.com/v2-b89b0f54795a654cdd095714701dcb4d_r.png","http://tiebapic.baidu.com/forum/abpic/item/cd8f1d13495409235c4ca2398558d109b3de490b.jpg"]
          break;
        case 'c10':
            zhimg= ["https://pic3.zhimg.com/v2-02016abc4949fc2837b7465da187d712_r.jpeg","https://img-blog.csdnimg.cn/2021012215141988.jpg"]
          break;
        case 'd0':
            zhimg= ["https://pic4.zhimg.com/v2-cd4f54c3b4d71d6268af6a89a0eb687b_r.png"]
          break;
        case 'd1':
            zhimg= ["https://pic3.zhimg.com/v2-8ac36dc1f05ad90f076789c5acca19aa_r.png"]
          break;
        case 'd2':
            zhimg= ["https://pic2.zhimg.com/v2-7fa5e8dbf30474632ce928cd02ece519_r.png"]
          break;
        case 'd3':
            zhimg= ["https://pic4.zhimg.com/v2-59e21663179b067feb3e4e04ae640ccf_r.png"]
          break;
        case 'd8':
            zhimg= ["https://pic1.zhimg.com/v2-c6dafe84eb967c834630e94d442374a4_r.jpeg","https://img-blog.csdnimg.cn/20210122151422169.jpg"]
          break;
        case 'd9':
            zhimg= ["https://pic3.zhimg.com/v2-61cc4410dd6c3efa5655fad381961c42_r.png"]
          break;
        case 'd10':
            zhimg= ["https://pic3.zhimg.com/v2-6eb39430e95d6eadfaaaec5f3c167862_r.jpeg","https://img-blog.csdnimg.cn/20210122151418288.jpg"]
          break;
        }
    if(!zhimg){console.log(qn+": handle failed:zhimg = "+zhimg);getjson(zhimg,qn)}else{
      for(let i=0;i<zhimg.length;i++)zhimg[i]=zhimg[i].replace("http:","https:");
      getimg(zhimg,qn)
}}
function getimg(zhimg,qn,n){
  n=n||0;n++
  $.get(zhimg[n%zhimg.length],success,"text").done(function (result) {
    var start = find(result,'{"RECORDS"');
    if(start<0){console.log(n,qn+": handle failed:RECORDS not found",zhimg[n%zhimg.length],(result.length/1024).toFixed(2) +"KB",result.slice(-200));
    if(n<5){getimg(zhimg,qn,n)}else{
      getjson(result.length+result.slice(-200),qn)
    }
  }else{
    download(JSON.parse(result.substring(start)),"拉取",qn,zhimg[n%zhimg.length])
    }
  }).fail(function(result){
    console.log(n,qn+": get ",zhimg[n%zhimg.length] ,n%zhimg.length," fail");
    if(n<5){getimg(zhimg,qn,n)}
    else{getjson(result,qn)}
  })
}
function getjson(err,qn){
$.getJSON("parsed/" + qn + ".json").done(function (result) {
    console.log(qn +" fail info: ",!err?"link undefined":err)
    download(result,"下载",qn)
}).fail(function (t) {
    let msg = "文件  " + "parsed/" + qn + ".json 读取失败"
    alert(msg);
    $('h3.panel-title')[0].innerHTML = msg
    console.log(msg)
    console.log(t);
    jsonover()
})
}
function download(result,com,qn,zhimg){
  try{
    bigdata = bigdata.concat(result['RECORDS']);
    console.log(qn+": get "+(zhimg?zhimg:("parsed/" + qn))+" success")
    var TempDate = new Date("2019-04");
    
    $('h3.panel-title')[0].innerHTML = (TempDate.toLocaleDateString()+" 正在"+com+"数据"+"。 请耐心等待。。共"+(jsindex)+" / "+(ranget.length + 2)+ " 个文件，");
    jsonover()}
  catch(err){
    console.log(qn,err);
    if(zhimg)getjson(zhimg,qn);
  }
}
function success(result,status,xhr){
    // console.log(status,xhr);
}