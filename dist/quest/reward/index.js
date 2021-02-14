
// const app = getApp();
// let rewa, those
// const w = console.warn
// const x = console.error
// const z = console.log
const rewa = ({
  data: {
    // list: []
    list: [{
      name: '加载中。。。',
      n: '',
      open: false,
      pages: { B2: 13, B23: 23, B22: 33 }
    }]
  },
  tapguess: function (e) {
    // let guess = e.detail.currentTarget.dataset.index
    // x(guess,e);
    sg = e//guess
    loadlist()
  },
  tapcate: function (e) {
    // let guess = e.detail.currentTarget.dataset.index
    // x(guess,e);
    sc = e//guess
    loadlist()
  },
  //收缩核心代码
  staritem(e) {
    let list = this.data.list
    let star = list[e.target.dataset.idx].star
    if (star) {
      app.delarr(('starreward'), e.target.dataset.name)
      list[e.target.dataset.idx].star = false
    } else {
      app.addarr(('starreward'), e.target.dataset.name)
      list[e.target.dataset.idx].star = true
    }
    this.setData({
      list: list
    })
  },
  target: function (e) {
    app.target(e.target.dataset.name)
  },
  kindToggle(e) {
    const name = e.currentTarget.dataset.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; i++) {
      if (list[i].name === name) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  },
  // onLoad: function (options) {
  // 	this = this
  // 	those = this.data
  //   wx.setNavigationBarTitle({
  //     title: '奖励列表'
  //   })
  // },
  onShow() {
    z('in test', app.reward)
    loadlist()
    // this.setData({
    // 	list: reward[0]
    // })
  }
})
Object.defineProperty(rewa, "setData", {
  value: function (e) {
    for (key in e) {
      this.data[key] = e[key]
      if (key == 'list') {
        // x(e[key])
        let html = ''
        for (let i = 0; i < e[key].length; i++) {
          let ulli = ''
          let title = e[key][i]
          for (let map in title.pages) {
            ulli += '<li class="list_li">' 
            + map + '<span class="right"><span class="n">' 
            + title.pages[map].n
            +`</span><img src="../img/ta1.png" class="tar"  onclick="app.target('`+map+`')"></img>
            <img src="../img/`
            +(title.pages[map].finished?(title.pages[map].finished==2?'finish':'ongoing'):'locked')+`.png" class="sta"></img>` + '</span>'+'</li>'
          }
          html += `<dt class="rewa_dt list_dt"> <span class="_after"></span>
        <p>`+ title.name + '<span class="right"><span class="n">' 
        + title.n
        +`</span><img src="../img/ta1.png" class="tar"  onclick="app.targets('`+title.map.join(',')+`')"></img>
        <img src="../img/ta2.png" class="tar`
        +(title.finished?'':' gray')+`"></img></p>
        <i class="rewa_dt list_dt_icon"></i>
      </dt>
      <dd class="rewa_dd list_dd">
      <ul>
        `+ ulli + `
      </ul>
    </dd>
`
        }
        $('.list_dl').html(html)
        $(".rewa_dt").on("click", function () {
          $('.rewa_dd').stop();
          $(this).siblings("dt").removeAttr("id");
          if ($(this).attr("id") == "open") {
            $(this).removeAttr("id").siblings("dd").slideUp();
          } else {
            $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
          }
        });
      }
    }
  }
})
var cstype
var slotitem
var useitem
var furniture
var developable = [1, 2, 78, 147, 3, 4, 5, 6, 65, 90, 7, 8, 9, 10, 11, 12, 66, 13, 14, 15, 41, 16, 17, 18, 52, 242, 19, 20, 21, 22, 55, 181, 249, 23, 24, 57, 60, 25, 59, 163, 26, 194, 207, 27, 28, 29, 30, 31, 32, 33, 34, 72, 73, 37, 38, 39, 40, 49, 51, 35, 36, 46, 47, 44, 45, 226, 54, 61, 75, 120, 168, 250, -1]
var undevable = []
var devable = []
var use = []
var ship = []
var fntr = []
var cated = []
var sg = 0
var sc = 0// var reward= app.reward[guess]
// reward=app.reward||[]

var list
app.initcache('starreward', ['戦果', '試製甲板カタパルト', '司令部要員', '橘花改', '夜間作戦航空要員', '強風改', '流星改(一航戦/熟練)', '勲章', '補強増設', '熟練搭乗員', '戦闘詳報', '新型砲熕兵装資材', '新型航空兵装資材', '特注家具職人', '応急修理要員', '設営隊', 'F6F-5N'])
z('stat', app.getstat('A03'))
z(app.valido)

function loadlist() {
  if (!app.reward) {
    z('wait')
    setTimeout(() => {
      loadlist()
    }, 1200);
    return
  }
  let guess
  let cate
  switch (Number(sg)) {
    case 1:
      guess = 0
      break;
    case 2:
      guess = 1
      break;
    case 3:
      guess = 2
      break;
    case 4:
      guess = 11
      break;
    default:
      guess = 10
      break;
  }
  switch (Number(sc)) {
    case 0:
      cate = app.get('starreward') || []
      break;
    case 1:
      cate = undevable
      break;
    case 2:
      cate = devable
      break;
    case 3:
      cate = use
      break;
    case 4:
      cate = fntr
      break;
    case 5:
      cate = ship
      break;
    case 6:
      cate = cated
      break;
    case 7:
      cate = 'all'
      break;
  }
  list = []
  for (let keys in app.reward[guess]) {
    let pages = app.reward[guess][keys]
    let page = {}
    let finished = true
    let sum = 0
    let map = []
    for (let key in pages) {
      let fnshd = app.data[app.wktoi[key]].guess
      sum += pages[key]
      map.push(key)
      page[key] = {
        n: pages[key],
        // star:app.get('starwk').indexOf(key)>-1,
        finished: fnshd
      }
      if (fnshd != 2) finished = false;
    }
    if (cate == 'all') {  
      list.push({
      name: keys,
      n: sum,
      star: app.get('starreward').indexOf(keys) > -1,
      finished: finished,
      open: false,
      pages: page,
      map:map
    })
  }else if (cate != cated ? cate.indexOf(keys) > -1 : cate.indexOf(keys) == -1) {
      list.push({
        name: keys,
        n: sum,
        star: app.get('starreward').indexOf(keys) > -1,
        finished: finished,
        open: false,
        pages: page,
        map:map
      })
    }
  }
  list.sort(function(a,b){return a.name.localeCompare(b.name)})
  rewa.setData({
    list: list
  })
  z(list)
}