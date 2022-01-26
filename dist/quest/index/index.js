const paint = ['white', 'green', 'FireBrick', 'OliveDrab', 'DarkTurquoise', 'Khaki', 'Sienna', 'Violet', 'red', 'Yellow']
const datalen = app.data.length
const that = ({
	data: {
		switches: app.initcache('switches', {
			fs: [false, true, true, true],
			fp: [true, true, true, true],
			fm: [true, true, true, true],
			fb: 0,
		}),
		current: null,
		down: true,
		discountInfo: [{
			preferenceName: '2242',
			preferenceExplain: 'ssds'
		}, {
			preferenceName: '2242',
			preferenceExplain: 'ssds'
		}, {
			preferenceName: '2242',
			preferenceExplain: 'ssds'
		}, {
			preferenceName: '2242',
			preferenceExplain: 'ssds'
		}],
		isExpand: false,
		toggleAnimationData: {}, // 优惠信息动画
		ec: {
			onInit: initChart
		}
	},
	onReady() {
		console.time('计时器4')
		// this.initChart()
	},
	expand() {
		// 少于两条数据就不需要展开了
		if (this.data.discountInfo.length < 2) return;
		let animation = wx.createAnimation({
			duration: 1000,
			timingFunction: 'ease-out'
		});
		if (this.data.isExpand) {
			// 如果是展开的，就让它收缩
			animation.height('0rpx').step();
		} else {
			// 如果是收缩的，就让它展开
			// 展开的高度是动态计算的，用一行的高度（50）去乘以数组的数量
			// 这里我曾经想过用height:'auto'这个属性，但是发现没法实现这个动画，所以换成了动态计算它的实际高度
			let height = this.data.discountInfo.length * 100 + 'rpx';
			animation.height(height).step();
		}
		this.setData({
			isExpand: !this.data.isExpand,
			toggleAnimationData: animation.export()
		});
	},
	filts(o) {
		let d = {}
		d.c = o//.target.dataset
		let s = this.data.switches
		switch (d.c[1]) {
			case 's':
				s.fs[d.c[3]] = !s.fs[d.c[3]]
				break;
			case 'p':
				s.fp[d.c[3]] = !s.fp[d.c[3]]
				break;
			case 'm':
				s.fm[d.c[3]] = !s.fm[d.c[3]]
				break;
			case 'b':
				s.fb = o.detail.value
				s.fs[0] = true
				break;
			default:
				x(d)
				break;
		}
		this.setData({
			switches: s
		})
		setchart()
		that.onUnload()
	},
	handset(o) {
		let d = o.target.dataset.c
		if (d == app.getstat(this.data.current.wiki_id)) return
		// z(d)
		// 		z(app.getstat(this.data.current.wiki_id))
		// 		z((this.data.current.wiki_id))
		// 		z((current.wiki_id))
		// 		z((current.guess))
		manual(this.data.current.wiki_id, d)
		update()
		current = datawk(this.data.current.wiki_id)
		setchart()
		pagecurrent()
		z(current, datawk(this.data.current.wiki_id))
		that.setData({
			current: current
		})
	},
	goreward() {
		wx.navigateTo({
			url: '../reward/index'
		})
	},
	clearStorage() {
		wx.clearStorage()
		z('cleared')
	},
	onShareAppMessage(res) {
		return {
			title: Math.random() > 0.5 ? '任务太多不知道做哪个？快用舰娘任务小程序' : '舰娘任务可以在小程序中管理啦！',
			path: '/pages/index/index',
			success: function () { },
			fail: function () { }
		}
	},
	onShareTimeline(res) {
		return {
			title: Math.random() > 0.5 ? '任务太多不知道做哪个？快用舰娘任务小程序' : '舰娘任务可以在小程序中管理啦！'
		}
	},
	onLoad() {
		those = this.data
		console.time('计时器1')
		switches = those.switches
		this.setData({
			current: ifnull(app.get('current'), app.data[0])
		})
		// this.setData({switches:	app.initcache('switches', {
		// 	fs: [false, true, true, true],
		// 	fp: [true, true, true, true],
		// 	fm: [true, true, true, true],
		// 	fb: 0,
		// })})
	},
	onShow() {
		console.time('计时器2')
	},
	onHide() {
		app.set('current', this.data.current)
		app.set('switches', this.data.switches)
	},
	onUnload() {
		app.set('current', this.data.current)
		app.set('switches', this.data.switches)
	}
})
// window.Onbeforeunload =function(params) {
// 	app.set('current', this.data.current)
// 	app.set('switches', this.data.switches)
// 	alert(app.get('switches'))
// }

var slides
var slideq
var sliden = 0
Object.defineProperty(that, "setData", {
	value: function (e) {
		for (key in e) {
			let model = e[key]
			this.data[key] = model
			if (key == 'current' && model) {
				let newflag = model.newflag//!isNaN(model.reward_other)
				$('.id').html(model.wiki_id)
				$('.content').html(model.description.replace(/\n/g, '<br/>'))
				$('.after').html(seplink(model.post))
				$('.ammo').html(model.reward_ammo)
				$('.bauxite').html(model.reward_bauxite)
				$('.before').html(seplink(model.pre));
				$('.fuel').html(model.reward_fuel)
				$('.memo').html(model.memo)
				$('.period').html(model.period)
				if (!newflag) {
					let bonus = ""
					model.reward_other.forEach(function (be, i) {
						if (be.choices) {
							be.choices.forEach(function (ce) {
								bonus += "奖励" + (i + 1) + ": " + ce.name + 'x' + (ce.amount ? ce.amount : "") + "<br/>"
							})
						} else {
							bonus += "奖励" + (i + 1) + ": " + be.name + 'x' + (be.amount ? be.amount : "") + "<br/>"
						}
					})
					$('.bonus').html(bonus)
				} else {
					$('.bonus').html(model.reward_other + "<br>未收录")
				}
				slides = ""
				slideq = model
				sliden = 0
				// z(model.requirements)
				let req = model.requirements
				if (app.requiredic[req.category]) {
					addreq(req)
				} else if (req.list) {
					req.list.forEach(addreq)
				} else {
					x(req)
				}
				$('.slides').html(slides)
				$('.description').html(model.title + (newflag ? '<img src="https://pic2.zhimg.com/v2-894298321368004931eaecaa4000c7a1_r.gif" alt="">' : ""))
				app.set('current', this.data[key]);
			} else if (key == 'switches') {
				graystyle()
			}
		}
	}
})

function addreq(req) {
	let reqcate = app.requiredic[req.category]
	if (req.category == 'simple') { reqcate = categories[slideq.category].name }
	let times = req.times || req.amount || 1
	let map = req.map
	if (map && typeof map != "string") {
		map.forEach(function (m) {
			slides += reqcate + ': ' + m +
				slidehtml(times)
		})
	} else if (req[app.slideact[req.category]]) {
		req[app.slideact[req.category]].forEach(function (m) {
			if (app.slideact[req.category] == 'scraps') { reqcate = "废弃" }
			slides += reqcate + ': ' + ifnull(m.id || m.name, '') +
				slidehtml(m.times || m.amount || 1)
		})
	} else {
		slides += reqcate + ': ' + ifnull(req.map, '') +
			slidehtml(times)
	}
}
function slidehtml(max) {
	let actid = ++sliden + (slideq.wiki_id).toString()
	let value = app.get(actid) || 0
	return `<span class="right"><span class="` + actid + `">` + value + '</span>/' + max + `</span>` +
		`<input type="range" id="` + actid +
		`" value="` + value +
		`" min="0" max="` + max +
		`" step="1" onchange="onslide('` + actid + `')" oninput="inslide('` + actid + `')" list="tickmarks">`
}
function onslide(actid) {
	let range = document.getElementById(actid);
	app.set(actid, range.value);
}
function inslide(actid) {
	let range = document.getElementById(actid);
	$('.' + actid).html(range.value)
}
const tcache = "tcache"
const birth = app.periodstart('once', new Date())

// function keys(arr) {
// 	let k = []
// }
const blank = '    '
var size = 5
var repulsion = 1
let link = []
let edge = []
let valid = []
// let dawn = app.periodstart('daily', String(new Date()))

const kcurl = "https://kcwikizh.github.io/kcQuests/quests-scn.json"
const URL_PREFIX = 'https://raw.githubusercontent.com/antest1/kcanotify-gamedata/master'
const VERSION_URL = `${URL_PREFIX}/KCAINFO`
const DATA_URL = `${URL_PREFIX}/files`
const LANGS = ['scn', 'tcn', 'jp', 'en', 'ko']
const LOCALES = ['zh-CN', 'zh-TW', 'ja-JP', 'en-US', 'ko-KR']
// LANGS.map((lang) => {
const filename = `quests-${LANGS[0]}.json`
const fileURL = `${DATA_URL}/${filename}`
// })
$.getJSON(fileURL, function (latest) {
	app.onLaunch()
	// app.data.forEach(function (e, i) {
	// 	try { delete latest[e.id] } catch (err) { x(e, err) }
	// })
	// for (let i in latest) {
	// 	let o = latest[i]
	// 	app.data.push(
	// 		{
	// 			game_id: Number(i),
	// 			wiki_id: o.code,
	// 			category: 4,
	// 			type: 1,
	// 			name: o.name,
	// 			detail: o.desc,
	// 			// prerequisite: [869],
	// 		})
	// }
	$.getJSON(kcurl, function (kcpre) {
		app.data.forEach(function (e, i) {
			e.guess = ifnull(app.getstat(e.wiki_id), 0)
			// e.star = ifnull(app.get('star'+e.wiki_id),false)
			// e.del = ifnull(app.get('del'+e.wiki_id),false)
			e.id = String(e.game_id)
			e.title = e.name
			e.name = ifnull(e.wiki_id, e.id)
			// e.pre = wkids(e.prerequisite)
			e.pre = kcpre[e.game_id]?.pre
			if (!e.pre) { e.pre = [] }
			if (e.id == 192) z(e.pre, e.id, app.wkid[e.id])
			e.pre.forEach(function (wkid) {
				link.push({
					source: String(app.wktoi[wkid]),
					target: String(e.id),
					// lineStyle:{
					// 	color:'#333'
					// }
				})
			})
			// e.post = wkids(postQuest[String(e.game_id)])
			e.post = wkids(e.postQuest)
			e.categories = e.category
			e.itemStyle = {
				borderWidth: size * 0
			} //,borderColor:'transparent'}
			// s0(e)
			// e.symbol = "roundRect"
			// e.x=Math.random()*100
			// e.y=Math.random()*100
			switch (Number(e.type)) {
				case 1:
					e.value = ""
					e.period = 'once'
					break;
				case 2:
					e.value = "日"
					e.period = 'daily'
					break;
				case 3: //周常
					e.value = "週"
					e.period = 'weekly'
					break;
				case 4:
					e.value = "日"
					e.period = 'daily'
					break;
				case 5:
					e.value = "日"
					e.period = 'daily'
					break;
				case 6: //月常
					e.value = "月"
					e.period = 'monthly'
					break;
				case 7: //季常
					e.value = "季"
					e.period = 'seasonal'
					break;
				default:
					e.value = '年'
					e.period = 'annual'
					break;
			}
		})
		pushlink('A3')
		update()
		let me = ['A62', 'A68', 'A70', 'A73', 'A78', 'A79', 'A80', 'A83', 'A87', 'B136', 'B138', 'B44', 'B137', 'B128', 'C22', 'C48', 'B58', 'B60']
		// for(let i=0;i<me.length;i++){
		// 	let m=me[i]
		// 	try {
		// 	app.setstat(app.data[app.wktoi[m]],1)
		// 	} catch (error) {
		// 		z(m)
		// 	}
		// }
	})
})
// import * as echarts from '../../ec-canvas/echarts';

// for(let key in postQuest){
//   postQuest[key].forEach(function(e){
//   link.push({
//     source: String(key),
// 		target: String(e),
// 		lineStyle:{
// 			color:'yellow'
// 		}
//   })})
// }
let current = app.data[0]
let chartdata, reward, battle
let toolname = '舰娘任务管理器'
let focus = null
let master = ['A3']
let chain = []
var ex = {}
var ey = {}

const those = that.data
console.time('计时器1')
const switches = those.switches
// this.setData({
// 	current: ifnull(app.get('current'), app.data[0])
// })
// this.setData({switches:	app.initcache('switches', {
// 	fs: [false, true, true, true],
// 	fp: [true, true, true, true],
// 	fm: [true, true, true, true],
// 	fb: 0,
// })})



function seplink(m) {
	var link = ''
	for (let i = 0; i < m.length; i++) {
		link += `<a href='javascript:jump("` + m[i] + `")'>` + m[i] + "</a> "
	}
	return link
}
function pushlink(node) {
	app.data.forEach(function (e) {
		if (node == e.wiki_id) {
			try {
				e.pre.forEach(function (pre) {
					if (master.indexOf(pre) == -1) {
						master.push(pre)
						pushlink(pre)
					}
				})
				e.post.forEach(function (post) {
					if (master.indexOf(post) == -1) {
						master.push(post)
						pushlink(post)
					}
				})
			} catch (err) {
				w(err, e)
			}
		}
		return
	})
}

function datawk(wkid) {
	if (app.wktoi[wkid] != null && app.data[app.wktoi[wkid]] != null) {
		return app.data[app.wktoi[wkid]]
	} else {
		w(wkid + ' is not in app.data!', app.wktoi[wkid], app.wktoi)
		option.title.text = '目标任务不存在：' + wkid
	}
}

function setwk(wkid, key, value) {
	if (app.wktoi[wkid] != null && app.data[app.wktoi[wkid]] != null) {
		app.data[app.wktoi[wkid]][key] = value
	} else {
		x(wkid, ' is not in app.data!', app.wktoi[wkid], app.data)
		option.title.text = '未找到目标任务：' + wkid
	}
}


function pushpre(list) {
	for (let i = 0; i < list.length; i++)
		datawk(list[i]).pre.forEach(function (pre) {
			if (list.indexOf(pre) == -1) {
				list.push(pre)
				pushpre(list)
			}
		})
	return list
}
function pushpost(list) {
	for (let i = 0; i < list.length; i++)
		datawk(list[i]).post.forEach(function (pre) {
			if (list.indexOf(pre) == -1) {
				list.push(pre)
				pushpost(list)
			}
		})
	return list
}
// z(master)

function jump(wkid) {
	current = datawk(wkid)
	z([datawk(wkid).x, datawk(wkid).y])
	pagecurrent()
}

function pagecurrent() {
	that.setData({
		current: current
	})
}
// setTimeout(() => {
// 	jump('B37')
// }, 5000);

function report() { }
// function wkid(n){
// 	for(let i=0;i<datalen;i++){
// 		if(n==app.data[i].game_id)return app.data[i].wiki_id;
// 	}
// }

// function path(node, stat) {
// 	app.setstat(node, stat)
// 	affect(node, stat)
// }

function manual(node, stat) {
	app.setstat(node, stat)
	// setchart();
}

function affect(node, stat, n) {
	if (stat === null) return;
	n = ifnull(n, 0);
	n++
	if (n > datalen) {
		x("exeed limit ", n)
		return;
	}
	let e = datawk(node)
	if (e) {
		e.guess = stat
		if (stat > 0) {
			e.pre.forEach(function (pre) {
				affect(pre, 2, n)
			})
		}
		if (stat < 2) {
			e.post.forEach(function (post) {
				affect(post, 0, n)
			})
		}
	}
	// for (let i = 0; i < datalen; i++) {
	// 	let d = app.data[i]
	// 	if (node == d.wiki_id) {
	// 		d.guess = ifnull(stat, 0)
	// console.log(d.itemStyle)
	// setTimeout(function(){
	// if(Math.random()>0.94)setchart()
	// return
	// },300)
	// 	}
	// }
}

function trim(x) {
	return x.replace(/^\s+|\s+$/gm, '');
}

function s0(d, real) {
	d.name = d.wiki_id
	d.value = trim(d.value)
	d.itemStyle.borderColor = real ? 'rgba(255, 192, 203,0.7)' : 'rgb(255, 192, 203,0.5)'
}

function s1(d, real) {
	d.name = blank + d.wiki_id + (real ? '🟠' : '🟡')
	if (d.value.length == 1) d.value += blank; //function blank
	d.itemStyle.borderColor = real ? 'rgba(249, 132, 54, 0.7)' : 'rgba(255, 170, 85, 0.5)'
}

function s2(d, real) {
	// d.symbolSize = size * 2,
	d.name = blank + d.wiki_id + '☑️'
	if (d.value.length == 1) d.value += blank;
	d.itemStyle.borderColor = real ? 'rgba(31, 131, 131,0.7)' : 'rgb(82, 182, 182,0.5)'
}
let option = {
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	center: focus,
	// large:true,
	color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
	title: {
		text: toolname,
		left: 'right',
		top: 'buttom',
		textStyle: {
			color: '#aaa',
		},
		z: 0
	},
	legend: [{
		orient: 'vertical',
		icon: 'circle',
		left: 10,
		top: "30%",
		data: categories.slice(1, 8),
		selectedMode: 'multiple'
	}],
	animationDurationUpdate: 1500,
	animationEasingUpdate: 'quinticInOut',
	nodeScaleRatio: 0.9,
	series: [{
		data: chain,
		links: edge,
		symbolSize: size * 5,
		type: 'graph',
		layout: 'force',
		draggable: true,
		force: {
			repulsion: repulsion * size * size * 10,
			initLayout: 'circular',
			// friction:0.4
		},
		// symbolSize: 20,
		roam: true,
		label: {
			show: true,
			formatter: "\n{b|{b}}\n{c|{c}}",
			fontWeight: 'bolder',
			color: 'black',
			fontSize: 18,
			// textBorderColor: 'white',
			rich: {
				b: {
					fontWeight: 'lighter',
					color: 'white',
					fontSize: 15,
					textBorderColor: 'black',
					textBorderWidth: 2,
					// textBorderColor: 'white',
					lineHeight: size
				},
				c: {
					align: 'right',
					fontWeight: 'bolder',
					color: '#e3ce60',
					fontSize: size * 2,
					fontStyle: 'oblique',
					// fontFamily:'SimSun',
					textBorderColor: '#222',
					textBorderWidth: size / 4,
					// borderColor: 'black',
					// borderWidth:2,
					// backgroundColor : '#444',
				}
			}
		},
		edgeSymbol: ['none', 'arrow'],
		// edgeSymbolSize: [4, 10],
		// edgeLabel: {
		// 		show:true,
		//     textStyle: {
		//       fontSize: 8
		//     }
		// },
		lineStyle: {
			normal: {
				opacity: 0.9,
				width: 3,
				curveness: 0
			}
		},
		categories: categories,
		// focusNodeAdjacency: true,
		emphasis: {
			// label.rich.b.textBorderColor:'white',
			// itemStyle:{
			// 	color:'white',
			// },
			lineStyle: {
				width: size
			},
		},
		// animationThreshold:10,
	}],
	color: paint
};

function initChart(canvas, width, height, dpr) {
	// console.time('计时器5')
	// chart = echarts.init(canvas, null, {
	// 	width: width,
	// 	height: height,
	// 	devicePixelRatio: dpr // new
	// });
	// canvas.setChart(chart);
	// that.setData({switches:	app.initcache('switches', {
	// 	fs: [false, true, true, true],
	// 	fp: [true, true, true, true],
	// 	fm: [true, true, true, true],
	// 	fb: 0,
	// })})
	setchart();
	z(chart._chartsViews)
	chart.on('click', function (params) {
		if (params.dataType == "node") {
			current = params.data
			that.data.down = true
			current.button = ifnull(app.getstat(current.wiki_id), current.guess)
			that.setData({
				current: current,
				down: that.data.down
			})
			z(params.data, [ex[params.data.wiki_id], ey[params.data.wiki_id]], app.valido[(params.data.wiki_id)])
			// 	option.center=(chartdata._itemLayouts[params.dataIndex])
			// setchart();
		}
	});
	// chart.getZr().on('click', function (event) {
	// 	if (!event.target) {
	// 		try {
	// 			that.data.down = false
	// 			that.setData({
	// 				down: that.data.down
	// 			})
	// 		} catch (e) {
	// 			w(e)
	// 		}
	// 	}
	// });
	chart.on('highlight', function (params) {
		// current=params.data
		// that.setData({
		// 	current:current,
		// })
		z('highlight', params);
	});
	// console.timeEnd('计时器0')
	// console.timeEnd('计时器1')
	// console.timeEnd('计时器2')
	// console.timeEnd('计时器4')
	// console.timeEnd('计时器5')
	return chart;
}

// function ifnull(notnul, ifnul) {
// 	if (typeof (notnul) === 'undefined') {
// 		return ifnul
// 	} else {
// 		return notnul
// 	}
// }

function eqifnull(notnul, ifnul) {
	if (typeof (notnul) === 'undefined') {
		notnul = ifnul
	}
}


function didperiod(type) {
	app.data.forEach(function (e) {
		let Bd0 = type == 2 ? e.type == 4 || e.type == 5 : false
		z(Bd0)
		if (e.type == 2 || Bd0) {
			app.setstat(e.wiki_id, 2)
		}
	})
}
function fistvisit() {
	if (!app.get('fistvisit')) {
		z('fistvisit')
		wx.clearStorage()
		didperiod(2)
	}
	app.set('fistvisit', true)
}
fistvisit()


// for (let i = 200; i < datalen; i++) {
// 	if (app.data[i].type > 1)
// 		z(app.beginutc(app.data[i].wiki_id, new Date()),app.data[i].period, )
// }
// setTimeout(() => {
// 	update();
// 	var dawn = app.periodstart('daily', String(new Date()))
// }, dawn + 10000000000);

function update() {
	try {
		app.data.forEach(function (e) {
			e.guess = 0
		})
	} catch (error) {
		z(app.data);
		return
	}
	let valid = [];
	// z(app.get('history'))
	// z($.cookie('history'));
	(app.get('history') || []).forEach(function (h) {
		let vali = {}
		vali[app.beginutc(h[0], h[2])] = [h[1], h[2]]
		app.valido[h[0]] = vali
		//以后可以设置跳过已遍历的index
	})
	for (let wkid in app.valido) {
		for (let dt in app.valido[wkid]) {
			valid.push([wkid, app.valido[wkid][dt][0], app.valido[wkid][dt][1]])
			if (dt == app.beginutc(wkid, new Date()))
				setwk(wkid, 'last', app.valido[wkid][app.beginutc(wkid, new Date())])
		}
	}
	// z('v: ', app.valido, valid)
	//sort valid
	// valid.sort(sortdate)
	function sortdate(a, b) {
		return a[1] - b[1]
	}
	// z('v: ', app.valido, valid)
	valid.forEach(function (v) {
		if (typeof (app.valido[v[0]][app.beginutc(v[0], new Date())]) != 'undefined') {
			let stat = app.valido[v[0]][app.beginutc(v[0], new Date())][0]
			if (stat != null)
				affect(v[0], stat)
		}
	})
	//guess s1
	app.data.forEach(function (e) {
		if (e.guess != 2) {
			let flag = true
			e.pre.forEach(function (p) {
				for (let i = 0; i < datalen; i++) {
					let node = app.data[i]
					if (node.wiki_id == p) {
						if (node.guess != 2) flag = false
						break
					}
				}
			})
			if (flag == true) {
				e.guess = 1
			}
		}
	})
}

function setchart() {
	//Filter
	// z(switches.fb) 
	chain = []
	if (switches.fb != 0 && switches.fb < app.branches.length - 2) {
		app.branches[switches.fb][1].forEach(wkid => {
			datawk(wkid).target = true
		});
		let custom = pushpost(app.branches[switches.fb][1])
		custom.forEach(function (wkid) {
			chain.push(datawk(wkid))
		})
	} else {
		switch (Number(switches.fb)) {
			case 0:
				chain = JSON.parse(JSON.stringify(app.data))
				z(chain)
				break;
			case app.branches.length - 1:
				app.data.forEach(function (e) {
					if (master.indexOf(e.wiki_id) > -1) chain.push(e);
				})
				break;
			case app.branches.length - 2:
				app.data.forEach(function (e) {
					if (master.indexOf(e.wiki_id) == -1) chain.push(e);
				})
				break;
			default:
				break;
		}
	}
	that.setData({
		switches: switches
	})
	var cl = chain.length;
	while (cl--) {
		let c = chain[cl].guess
		if (switches.fs[0] && switches.fs[1] && switches.fs[2]) { } else {
			let status = false
			if ((!switches.fs[0]) && c == 0) status = true
			if ((!switches.fs[1]) && c == 1) status = true
			if ((!switches.fs[2]) && c == 2) status = true
			if (status) {
				chain.splice(cl, 1)
			}
		}
	}
	edge = []
	chain.forEach(function (e) {
		e.pre.forEach(function (p) {
			edge.push({
				source: String(app.wktoi[p]),
				target: String(app.wktoi[e.game_id]),
				// lineStyle:{
				// 	color:'#333'
				// }
			})
		})
	})
	if (chain.length + edge.length > 920) {
		option.title.text = '画布承载超限\n\n部分箭头未显示'
		z("chain too lonng", chain.length, edge.length);
		// edge = link.slice(edge.length - 950 + edge.length, edge.length)
		edge = link.slice(0, 920 - edge.length - chain.length)
	} else {
		option.title.text = ''
	}
	chain.forEach(function (e) {
		switch (Number(e.guess)) {
			case 0:
				s0(e)
				break;
			case 1:
				s1(e)
				break;
			case 2:
				s2(e)
				break;
			default:
				x(e)
				break;
		}
		if (app.getstat(e.wiki_id) == e.guess) {
			switch (Number(app.getstat(e.wiki_id))) {
				case 0:
					s0(e, 1)
					break;
				case 1:
					s1(e, 1)
					break;
				case 2:
					s2(e, 1)
					break;
				default:
					x(e)
					break;
			}
		}
		if (e.star == true) {
			e.itemStyle.symbolSize = size * 10
		}
		if (ex.length) {
			e.x = ex[e.wiki_id]
			e.y = ey[e.wiki_id]
		}
	})
	z('chain:', chain.length, 'edge:', edge.length)
	option.series[0].data = chain
	chart.setOption(option)
	chartdata = chart._chartsViews[0]._symbolDraw._data
	// z(chartdata, app.data)
	for (let i = 0; i < chartdata._idList.length; i++) {
		try {
			if (chartdata._itemLayouts[i]) {
				ex[app.wkid[chartdata._idList[i]]] = parseInt(chartdata._itemLayouts[i][0])
				ey[app.wkid[chartdata._idList[i]]] = parseInt(chartdata._itemLayouts[i][1])
			}
		} catch (error) {
			w(error, chartdata._itemLayouts, i)
			break;
		}
	}
	// z('position', ex)
	if (chain.length) {
		// z(ex[chain[0].wiki_id])
		edge.forEach(function (link) {
			for (let ii = 0; ii < chain.length; ii++) {
				var ch = chain[ii]
				if (ex[ch.wiki_id] == null) break;
				if (ch.game_id == link.source) {
					try { //先得到id后渲染
						link.lineStyle = {
							color: {
								type: 'radial',
								x: ex[ch.wiki_id],
								y: ey[ch.wiki_id],
								r: 300,
								colorStops: [{
									offset: 0,
									color: ch.itemStyle.borderColor
								}, {
									offset: 1,
									color: '#777'
								}],
								global: true
							}
						}
					} catch (e) {
						w(ex[ch.wiki_id], ch.wiki_id, e)
					}
				}
				if (ch.game_id == link.target) {
					if ((typeof link.lineStyle) != 'undefined') {
						try {
							// if(link.lineStyle.color.r==300){
							link.lineStyle.color.r == 120
							link.lineStyle.color.colorStops = link.lineStyle.color.colorStops || [{
								offset: 0,
								color: '#777'
							}, {
								offset: 1,
								color: '#777'
							}]
							link.lineStyle.color.colorStops[1].color = ch.itemStyle.borderColor;
						} catch (e) {
							w(link.lineStyle, e)
						}
						// }
					}
					break;
				}

			}
		})
	}
	option.series[0].links = edge
	chart.setOption(option)
	setTimeout(() => {
		reward = []
		battle = []
		app.data.forEach(function (e, i) {
			if (e.requirements.category == "sortie") {
				addbattle(e, e.requirements)
				addbattle(e, e.requirements, 10)
				addbattle(e, e.requirements, 11)
			} else if (e.requirements.list) {
				for (i = 0; i < e.requirements.list.length; i++) {
					if (e.requirements.list[i].category == "sortie") {
						addbattle(e, e.requirements.list[i])
						addbattle(e, e.requirements.list[i], 10)
						addbattle(e, e.requirements.list[i], 11)
					}
				}
			}
			if (e.reward_other) {
				for (let i = 0; i < e.reward_other.length; i++) {
					if (e.reward_other[i].name) {
						addreward(e, e.reward_other[i]);
						// addreward(e, e.reward_other[i],5);
						addreward(e, e.reward_other[i], 10);
						addreward(e, e.reward_other[i], 11);
					} else {
						for (let j = 0; j < e.reward_other.length; j++) {
							addreward(e, e.reward_other[i].choices[j]);
							// addreward(e, e.reward_other[i].choices[j],5);
							addreward(e, e.reward_other[i].choices[j], 10);
							addreward(e, e.reward_other[i].choices[j], 11);
						}
					}
				}
			}
		})
		z(battle)
		app.battle = battle
		app.reward = reward
	}, 1200);

	app.set('switches', that.data.switches);
	app.set('branches', app.branches);
}
function addbattle(e, r, guess) {

	let flag = false
	if (!guess) { guess = e.guess; flag = true } else
		if (guess == 10) { flag = e.guess < 2 } else
			if (guess == 11) { flag = true }
	if (flag) {
		let name = r.map || '任意'
		if (typeof name == 'string') {
			battle[guess] = ifnull(battle[guess], {})
			battle[guess][name] = ifnull(battle[guess][name], {})
			// battle[guess][name][e.wiki_id]=ifnull(battle[guess][name][e.wiki_id],0)
			// battle[guess][name][e.wiki_id] += Number(amount)}
			battle[guess][name][e.wiki_id] = r
		} else if (name.length >= 1) {
			for (let i = 0; i < name.length; i++) {
				let namei = name[i]
				battle[guess] = ifnull(battle[guess], {})
				battle[guess][namei] = ifnull(battle[guess][namei], {})
				battle[guess][namei][e.wiki_id] = r
			}
		}
	}
}
function addreward(e, r, guess) {//remove reward
	let name = r.name
	if (!name) { x(r) } else {
		let flag = false
		let amount = ifnull(r.amount, 1)
		if (name.slice(0, 2) == "戦果") {
			amount = name.slice(2, name.length)
			name = "戦果"
		}
		if (!guess) { guess = e.guess; flag = true } else
			// if(guess==5){flag= app.get('starreward').indexOf(name)>-1 }else
			if (guess == 10) { flag = e.guess < 2 } else
				if (guess == 11) { flag = true }
		if (flag) {
			reward[guess] = ifnull(reward[guess], {})
			reward[guess][name] = ifnull(reward[guess][name], {})
			reward[guess][name][e.wiki_id] = ifnull(reward[guess][name][e.wiki_id], 0)
			reward[guess][name][e.wiki_id] += Number(amount)
		}
	}
}

