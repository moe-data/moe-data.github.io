
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
     <li>加载速度和选择目标数量无关</li><br>
     <li>不兼容IE浏览器</li><br>
    </ul>  
  </div>`)
$.getJSON("parsed/cstype.json").fail(function (d) {
    w("文件  " + "parsed/cstype.json" + " 读取失败" + d);
})
$("#nav").load("nav.html");
$("#foot").load("foot.html");