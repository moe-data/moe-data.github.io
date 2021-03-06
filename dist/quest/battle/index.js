
// const app = getApp();
// let batt, those
// const w = console.warn
// const x = console.error
// const z = console.log
const batt = ({
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
    bg = e//guess
    loadbatl()
  },
  tapcate: function (e) {
    // let guess = e.detail.currentTarget.dataset.index
    // x(guess,e);
    bc = e//guess
    loadbatl()
  },
})
Object.defineProperty(batt, "setData", {
  value: function (e) {
    for (key in e) {
      this.data[key] = e[key]
      if (key == 'list') {
        z(e[key])
        let html = ''
        for (let i = 0; i < e[key].length; i++) {
          let ulli = ''
          let title = e[key][i]
          for (let map in title.pages) {
            let fleets = ""
            if (title.pages[map].groups) {
              let fleet = []
              title.pages[map].groups.forEach(function (group) {
                let member = ""
                if (group.ship) {
                  member = group.ship
                } else if (group.shipclass) {
                  member = group.shipclass + '级'
                } else {
                  x(group)
                }
                if (group.lv) {
                  member += '(lv' + group.lv[0] + '+)'
                }
                if (group.flagship) {
                  member += '❀'
                }
                if (group.amount) {
                  member += 'x' + group.amount
                }
                fleet.push(member)
                fleets = '<li class="list_l">' + fleet.join('+').replace(/,/g, '/') + '</li>'
              });
            }
            ulli += '<li class="list_li" onclick="jump(' + "'" + map + "'" + ')">'
              + map + '<span class="right"><span class="n">'
              + ifnull(title.pages[map].result, "") + '</span><span class="n">' + title.pages[map].n
              + `</span><img src="./img/ta1.png" class="tar"  onclick="app.target('` + map + `')"></img>
            <img src="./img/`
              + (title.pages[map].finished ? (title.pages[map].finished == 2 ? 'finish' : 'ongoing') : 'locked') + `.png" class="sta"></img>` + '</span>' + '</li>'
              + fleets
          }
          html += `<dt class="batt_dt list_dt"> <span class="_after"></span>
        <p>`+ title.name + '<span class="right"><span class="n">'
            + title.n
            + `</span><img src="./img/ta1.png" class="tar"  onclick="app.targets('` + title.map.join(',') + `')"></img>
        <img src="./img/ta2.png" class="tar`
            + (title.finished ? '' : ' gray') + `"></img></p>
        <i class="batt_dt list_dt_icon"></i>
      </dt>
      <dd class="batt_dd list_dd">
      <ul>
        `+ ulli + `
      </ul>
    </dd>
`
        }
        $('.batl_dl').html(html)
        if(list.length==0){
          $('.batl_dl').html(`<dl class="batl_dl list_dl" style="max-height: 709px;">
          <dt class="batt_dt list_dt" id="open"> <span class="_after"></span>
          <p>NO DATA<span class="right"><span class="n">0</span><img src="./img/ta1.png" class="tar">
          <img src="./img/ta2.png" class="tar gray"></span></p>
          </dt></dl>`)
        }else if(list.length==1){
          $(".batt_dt").attr("id", "open").next().slideDown()
        }else{
        $(".batt_dt").on("click", function () {
          $('.batt_dd').stop();
          $(this).siblings("dt").removeAttr("id");
          if ($(this).attr("id") == "open") {
            $(this).removeAttr("id").siblings("dd").slideUp();
          } else {
            $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
          }
        });}
      }
    }
  }
})
var bg = 2
var bc = 1

var batl
app.initcache('starbattle', ['戦果', '試製甲板カタパルト', '司令部要員', '橘花改', '夜間作戦航空要員', '強風改', '流星改(一航戦/熟練)', '勲章', '補強増設', '熟練搭乗員', '戦闘詳報', '新型砲熕兵装資材', '新型航空兵装資材', '特注家具職人', '応急修理要員', '設営隊', 'F6F-5N'])
z('stat', app.getstat('A03'))
z(app.valido)

function loadbatl() {
  if (!app.battle) {
    z('wait')
    setTimeout(() => {
      loadbatl()
    }, 1200);
    return
  }
  let guess
  switch (Number(bg)) {
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
  list = []
  for (let keys in app.battle[guess]) {
    let pages = app.battle[guess][keys]
    let page = {}
    let finished = true
    let sum = 0
    let map = []
    for (let key in pages) {
      let mapinfo = pages[key]
      let fnshd = app.data[app.wktoi[key]].guess
      sum += mapinfo.times || 1
      map.push(key)
      // z(mapinfo)
      // page[key] = {
      //   n: mapinfo.times||1,
      //   // star:app.get('starwk').indexOf(key)>-1,
      //   finished: fnshd
      // }
      page[key] = mapinfo
      page[key].finished = fnshd
      page[key].n = mapinfo.times || 1
      if (fnshd != 2) finished = false;
    }
    if (bc == 'arbitary' && isNaN(keys[0])) {
      list.push({
        name: keys,
        n: sum,
        star: app.get('starbattle')?app.get('starbattle').indexOf(keys) > -1:false,
        finished: finished,
        open: false,
        pages: page,
        map: map
      })
    } else if (bc == keys[0]) {
      list.push({
        name: keys,
        n: sum,
        star: app.get('starbattle')?app.get('starbattle').indexOf(keys) > -1:false,
        finished: finished,
        open: false,
        pages: page,
        map: map
      })
    }
  }
  list.sort(function (a, b) { return a.name.localeCompare(b.name) })
  batt.setData({
    list: list
  })
}