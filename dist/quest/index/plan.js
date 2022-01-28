
/*加入完成时间
初始化快速设定：
1.已完成任务
2.上次周期完成度
路径整理
跳转
周期曾完成 不能解锁 现在周期
过去完成 虚线链条
加入富文本： 装备显示
筛选
1.周期
2.常用任务链
伸缩
loading
UI



// setTimeout(function(){
// 	border()
// 	// z(chart.getOption().series[0].data[9])
// 	// chart.dispatchAction({
// 	// 	type: 'highlight',
// 	// // 图例名称
// 	// // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
// 	// 	dataIndex: 9,
// 	// })
// },4000)
*/
function boo(Eck){
	return (Eck.length>27&&Eck.length<35)&&typeof(Eck)!="string"
}
function prop(obj){
	for (let key in Echart){
		if(Echart[key]){
	if(Echart[key].length==29){
		z(Echart[key])
	}else{
		var Echar=Echart[key];
		for (let ke in Echar){
			if(Echar[ke]){
		if(Echar[ke].length==29){
			z(Echar[ke]);
		}else{
		var Echa=Echar[ke];
		for (let k in Echa){
			if(Echa[k]){
		if((Echa[k].length==29||Echa[k].length==30)&&typeof(Echa[k])!="string"){
			z(Echa[k]);
		}else{
			
		var Ech=Echar[ke];
		for (let k in Ech){
			if(Ech[k]){
		if((Ech[k].length==29||Ech[k].length==30)&&typeof(Ech[k])!="string"){
			z(Ech[k]);
		}else{
			
		var Ec=Ech[k];
		for (let k in Ec){
			if(Ec[k]){
		if((Ec[k].length==29||Ec[k].length==30)&&typeof(Ec[k])!="string"){
			z(Ec[k]);
		}else{
			
		var Eca=Ech[k];
		for (let k in Eca){
			var Eck=Eca[k]
			if(Eck){
		if(boo(Eck)){
			z({Eck});
		}else{
			
		for (let k in Eck){
			var Ecb=Eck[k]
			if(Ecb){
		if(boo(Ecb)){
			z({Ecb});
		}else{
			
		for (let k in Ecb){
			var Ecc=Ecb[k]
			if(Ecc){
		if(boo(Ecc)){
			z(Ecc,k,Ecb,ke,key,Echart);return
		}else{
			
		}
		;}
	}
		}
		;}
	}
		}
		;}
	}
		}
		;}
	}
		}
		;}
	}
		}
		;}
	}
		}
		;}
	}
	}
	;}
}
}

// onLoad() {
// 	that=this
// 	those=this.data
// 	switches=those.switches
// 	// const query = wx.createSelectorQuery()
// 	// query.select('#mychart-dom-pie')
// 	//   .fields({ node: true, size: true })
// 	//   .exec((res) => {
// 	//     const canvas = res[0].node
// 	//     const ctx = canvas.getContext('2d')
// 	//     const dpr = wx.getSystemInfoSync().pixelRatio
// 	//     canvas.width = res[0].width * dpr
// 	//     canvas.height = res[0].height * dpr
// 	//     ctx.scale(dpr, dpr)
// 	//     ctx.fillRect(0, 0, 500, 1000)
// 	//   })
// }
/*<view id="down" class="sticky" wx:if="{{current}}">
  <block>{{current.wiki_id}}</block> <block>{{current.title}}</block> 
  <block wx:if="{{current.type==1}}">单次</block>
  <block wx:elif="{{current.type==2}}">日常</block>
  <block wx:elif="{{current.type==3}}">周常</block>
  <block wx:elif="{{current.type==4}}">日期末尾3,7,0</block>
  <block wx:elif="{{current.type==5}}">日期末尾2,8</block>
  <block wx:elif="{{current.type==6}}">月常</block> 
  <block wx:elif="{{current.type==7}}">季常</block>
  <block wx:else>年常</block>
<view>设为：
  <button class="mini-btn s0 {{current.button==0?'':'gray'}}" data-c="0" bindtap="handset" size="mini"><image class="icon" src="../../img/locked.png"></image>未解锁</button>
  <image class="progress {{current.button==1?'':'gray'}}" data-c="1" bindtap="handset" src="../../img/进行中.png" alt="进行中"/>
  <image class="progress {{current.button==2?'':'gray'}}" data-c="2" bindtap="handset" src="../../img/达成.png" alt="达成"/>
  <button class="mini-btn auto {{current.cache==null?'':'gray'}}" data-c="{{undefined}}" bindtap="handset" size="mini"><image class="icon" src="../../img/auto2.png"></image>自动</button>
  <image class="star {{current.star==fakse?'':'gray'}}" data-c="{{undefined}}" bindtap="handset" src="../../img/star.svg"></image>
</view>
<view class="discount">
  <view>
  <block wx:if="{{current.pre[0]}}" style="width: 70px;">前置任务{{current.pre}}</block>
  <block wx:if="{{current.post[0]}}" style="width: 70px;">后继任务{{current.post}}</block></view>
  <!-- <view wx:if="{{current.detail}}"> {{current.detail}}</view> -->
  <view wx:if="{{current.description}}"> {{current.description}}</view>
  <view><image class="icon" src="https://uploads.kcwiki.cn/commons/thumb/0/0d/IcoFuel.png/25px-IcoFuel.png" alt="油"></image>{{current.reward_fuel}}<image class="icon" src="https://uploads.kcwiki.cn/commons/thumb/4/4e/IcoAmmo.png/25px-IcoAmmo.png" alt="油"></image>{{current.reward_ammo}}<image class="icon" src="https://uploads.kcwiki.cn/commons/thumb/f/f8/IcoSteel.png/25px-IcoSteel.png" alt="油"></image>{{current.reward_steel}}<image class="icon" src="https://uploads.kcwiki.cn/commons/thumb/1/12/IcoBauxite.png/25px-IcoBauxite.png" alt="油"></image>{{current.reward_bauxite}}
  </view>
  <block wx:for="{{current.reward_other}}" wx:for-item="i">
    <block wx:if="{{i.choices}}">
      <text wx:for="{{i.choices}}" wx:for-item="j" wx:for-index="idx" 
      >奖励{{index+1}}：{{j.name}} <block wx:if="{{j.amount}}">x{{j.amount}} </block>\n</text>
    </block>
    <text wx:else>奖励{{index+1}}：{{i.name}} <block wx:if="{{i.amount}}">x{{i.amount}}</block>\n</text>
</block>
</view></view>
</view>*/

	// initChart() {
	// 	this.selectComponent('#mychart-dom').init((canvas, width, height, dpr) => {
	// 		// const chart = echarts.init(canvas, null, {
	// 		// 	width: width,
	// 		// 	height: height
	// 		// });
	// 		chart = echarts.init(canvas, null, {
	// 			width: width,
	// 			height: height,
	// 			devicePixelRatio: dpr // new
	// 		});
	// 		canvas.setChart(chart);
	// 		setchart();
	// 		z(chart._chartsViews)
	// 		chart.on('click', function (params) {
	// 			if (params.dataType == "node") {
	// 				current = params.data
	// 				that.data.down = true
	// 				current.button = ifnull(getstat(current.wiki_id), current.guess)
	// 				that.setData({
	// 					current: current,
	// 					down: that.data.down
	// 				})
	// 				z(params.data, ex[params.data.wiki_id], that.data.down)
	// 				// 	option.center=(chartdata._itemLayouts[params.dataIndex])
	// 				// setchart();
	// 			}
	// 		});
	// 		chart.getZr().on('click', function (event) {
	// 			if (!event.target) {
	// 				try {
	// 					that.data.down = false
	// 					that.setData({
	// 						down: that.data.down
	// 					})
	// 				} catch (e) {
	// 					w(e)
	// 				}
	// 			}
	// 		});
	// 		// chart.on('highlight', function (params) {
	// 		// 	current=params.data
	// 		// 	that.setData({
	// 		// 		current:current,
	// 		// 	})
	// 		// 	z({params});
	// 		// });
	// 		return chart;
	// 	});
	// },
	
		
			// switch (Number(stat)) { //4?,5,8
			// 	case 0:
			// 		s0(d)
			// 		break;
			// 	case 1:
			// 		s1(d)
			// 		break;
			// 	case 2:
			// 		s2(d)
			// 		break;
			// 	case 5:
			// 		s1(d)
			// 		break;
			// 	default:
			// 		w("stat=", stat)
			// 		break;
			// }

/*import * as echarts from '../../ec-canvas/echarts';

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ecBar: {
      // 如果想要禁止触屏事件，以保证在图表区域内触摸移动仍能滚动页面，
      // 就将 disableTouch 设为 true
      // disableTouch: true,

      onInit: function (canvas, width, height, dpr) {
        const barChart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(barChart);
        barChart.setOption(getBarOption());

        return barChart;
      }
    }
  },

  onReady() {
  }
});

function getBarOption() {
  return {
    color: ['#37a2da', '#32c5e9', '#67e0e3'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['热度', '正面', '负面']
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    series: [
      {
        name: '热度',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [300, 270, 340, 344, 300, 320, 310]
      },
      {
        name: '正面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true
          }
        },
        data: [120, 102, 141, 174, 190, 250, 220]
      },
      {
        name: '负面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'left'
          }
        },
        data: [-20, -32, -21, -34, -90, -130, -110]
      }
    ]
  };
}*/

    // }, {
    //   id: 'content',
    //   name: '1-2',
    //   open: false,
    //   pages: ['text', 'icon', 'progress', 'rich-text']
    // }, {
    //   id: 'form',
    //   name: '表单组件',
    //   open: false,
    //   pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']
    // }, {
    //   id: 'nav',
    //   name: '导航',
    //   open: false,
    //   pages: ['navigator']
    // }, {
    //   id: 'media',
    //   name: '媒体组件',
    //   open: false,
    //   pages: ['image', 'audio', 'video', 'camera']
    // }, {
    //   id: 'map',
    //   name: '地图',
    //   pages: ['map']
    // }, {
    //   id: 'canvas',
    //   name: '画布',
    //   pages: ['canvas']
    // }, {
    //   id: 'open',
    //   name: '开放能力',
    //   pages: ['ad', 'open-data', 'web-view']