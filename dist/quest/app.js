const fewdic = []
fewarray.forEach(e => {
  fewdic[e.game_id] = e
})
const app = ({
  data: fewdic,
  zhCN,
  requiredic: {
    simple: "简单任务",
    fleet: "编成",
    sortie: "出击",
    sink: "击沉",
    excercise: "演习",
    expedition: "远征",
    modelconversion: "机种转换",
    scrapequipment: "废弃装备",
    equipexchange: "准备装备",
    modernization: "近代化改修/舰装合成",
    "a-gou": "あ号作戦"
  },
  slideact: {
    simple: "简单任务",
    fleet: "编成",
    sortie: "出击",
    sink: "击沉",
    excercise: "演习",
    expedition: "objects",
    modelconversion: "scraps",
    scrapequipment: "list",
    equipexchange: "scraps",
    modernization: "近代化改修/舰装合成",
    "a-gou": "あ号作戦"
  },
  newload: {},
  branches: [],
  fb: 2,
  showall() {
    those.switches.fb = 0
    setchart()
  },
  target(wk) {
    switches.fb = 1
    app.branches[1] = ["", [wk]]
    switches.fs = [1, 1, 1, 1]
    that.setData({
      switches: switches,
      current: datawk(wk)
    })
    setchart()
  },
  targets(wk) {
    wk = wk.split(',')
    switches.fb = 1
    app.branches[1] = ["", wk]
    switches.fs = [1, 1, 1, 1]
    that.setData({
      switches: switches,
      current: datawk(wk[0])
    })
    setchart()
  },
  onLaunch: function () {
    // app=this
    app.newload = app.initcache('newload', {})
    app.branches = app.initcache('branches', [
      ['所有任务', []],
      ['自定义', []],
      ['第一甲板链', ['F21']],
      ['第二甲板链', ['F23']],
      ['第三甲板链', ['B117']],
      ['岩井队链', ['F27']],
      ['岩本队链', ['F30']],
      ['基地航空链', ['F43', 'B81']],
      ['喷气机', ['F46']],
      ['夜战甲板员链', ['F46']],
      ['F6F-5N链', 'F63'],
      ['司令部要员1', ['D18']],
      ['司令部要员2', ['B134']],
      ['司令部要员3', ['B159']],
      ['独立任务'],
      ['非独立任务']
    ])
  },
  wkid: {},
  wktoi: {},
  setstat: function (wk, s) {
    if (typeof wk != 'string') x(wk, s);
    let history = app.get('history') || []
    if (history.constructor != Array) history = [];
    let add = [wk, s, new Date()]
    try {
      history.push(add)
      app.set('history', history)
    } catch (e) {
      x(e, wk, s, history)
    }
  },
  getstat: function (wkid) {
    // let history = app.get('history') || []
    try {
      // let l = history.length
      return app.valido[wkid][app.beginutc(wkid, new Date())][0]
    } catch (e) {
      // w(e, wkid, app.beginutc(wkid, new Date()),app.valido,)
      return 0
    }
  },
  initcache: function (key, def) {
    try {
      if (app.get(key) == null) {
        app.set(key, def)
        return def
      } else {
        return app.get(key)
      }
    } catch (error) {
      // x(error,key,def)
      return def
    }
  },
  set: function (key, value) {
    try {
      wx.setStorageSync(key.toString(), value)
    } catch (e) {
      x(e)
    }
  },
  get: function (key) {
    try {
      let value = wx.getStorageSync(key.toString())
      // if (value) {
      return value
      // }
    } catch (e) {
      x(e)
    }
  },
  addarr: function (arr, item) {
    let list = app.get(arr) || []
    if (list.indexOf(item) > -1) return;
    list.push(item)
    app.set(arr, list)
  },
  delarr: function (arr, item) {
    let list = app.get(arr)
    if (!list) return;
    app.arrsplice(list, item)
    app.set(arr, list)
  },
  // staritem: function(e){
  //   app.addarr(('starreward'),e)
  // },
  // unstaritem: function(e){
  //  app.delarr(('starreward'),e)
  // },
  arrsplice: function (arr, item) {
    if (!arr) return;
    let i = arr.length
    while (i--) {
      if (arr[i] == item) {
        arr.splice(i, 1)
      }
    }
  },
  getwk: function (wkid, key) {
    if (app.wktoi[wkid] != null && app.data[app.wktoi[wkid]] != null) {
      return app.data[app.wktoi[wkid]][key]
    } else {
      x(wkid, ' is not in data!', app.wktoi[wkid], app.wktoi)
      option.title.text = '未找到目标任务：' + wkid
    }
  },
  beginutc: function (wkid, datestr) {
    let dt = new Date(datestr)
    if (!(dt instanceof Date)) {
      x(wkid, datestr, dt);
      return app.periodstart('once', new Date()).toISOString()
    }
    if (!app.getwk(wkid, 'period')) {
      // x(wkid,datawk(wkid))
      return app.periodstart('once', new Date()).toISOString()
    }
    var utc = app.periodstart(app.getwk(wkid, 'period'), dt).toISOString()
    if (utc.slice(10) != 'T20:00:00.000Z') x(utc, wkid, datestr)
    return utc
  },

  getMonthDays: function (myMonth, nowYear) {
    var monthStartDate = new Date(nowYear, myMonth, 1);
    var monthEndDate = new Date(nowYear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
  },
  periodstart: function (period, dt) { //返回dt的上一个周期的起讫
    let myDate = new Date(dt)
    //当地时间转阿联酋时间(加法)
    myDate.setTime(myDate.getTime() + araboffset);
    //得到阿联酋时间，略去小时，即为当前日常任务开始时间
    myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate());
    var now = new Date(myDate); //当前日期
    var nowDayOfWeek = now.getDay(); //今天本周的第几天
    var nowDay = now.getDate(); //当前日
    var nowMonth = now.getMonth(); //当前月
    var nowYear = now.getFullYear(); //当前年
    var beginTime, endTime
    if (period == 'daily') {
      beginTime = new Date(nowYear, nowMonth, nowDay);
      endTime = new Date(nowYear, nowMonth, nowDay + 1);
    } else if (period == 'weekly') {
      beginTime = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
      endTime = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
    } else if (period == 'monthly') {
      beginTime = new Date(nowYear, nowMonth, 1);
      endTime = new Date(nowYear, nowMonth, app.getMonthDays(nowMonth, nowYear));
    } else if (period == 'seasonal') {
      var quarterStartMonth = 0;
      beginTime = new Date(nowYear, quarterStartMonth, 1);
      var quarterEndMonth = quarterStartMonth + 2;
      endTime = new Date(nowYear, quarterEndMonth, app.getMonthDays(quarterEndMonth, nowYear));
    } else if (period == 'annual') {
      beginTime = new Date(nowYear, 0, 1);
      endTime = new Date(nowYear + 1, 0, 1);
    } else if (period == 'once') {
      beginTime = new Date(2000, 0, 1);
      endTime = new Date(3000, 0, 1);
    } else {
      x(period, dt)
    }
    //当前各个周期任务的起讫，以阿联酋时间（+4）表示 , 阿联酋时间转当地时间(减法)
    beginTime.setTime(beginTime.getTime() - araboffset);
    // 当前各个周期任务的起讫，以阿联酋时间（+4）表示 , 转为日本时间+9
    // beginTime.setTime(beginTime.getTime() + 5*60*60000);
    return beginTime
  },
  valido: {},
  globalData: {
    userInfo: null
  }
})
// z(app.get('switches'))
// z(app.get('branches'))
// z(app.branches)

function wkids(arr) {
  if (!arr) return []
  let res = []
  arr.forEach(function (n) {
    res.push(app.wkid[String(n)])
  })
  return res
}