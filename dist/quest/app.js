const questdic = {}
questarray.forEach(e => {
  questdic[e.game_id] = e
})

const app = ({
  data: questdic,
  zhCN,
  postQuest: {
    "101": [102],
    "102": [103],
    "103": [104, 105],
    "104": [115, 116, 174],
    "105": [106, 108, 254, 401, 612, 816],
    "106": [107, 109],
    "107": [113],
    "108": [111],
    "109": [110, 704],
    "110": [118, 646],
    "111": [112],
    "112": [896],
    "113": [114, 119, 635],
    "114": [185, 626],
    "115": [215],
    "116": [120, 146, 838],
    "117": [217],
    "118": [611],
    "119": [121, 163, 219],
    "120": [128, 222, 274],
    "121": [122, 124, 125, 127, 129, 223],
    "122": [123, 126, 224],
    "123": [143, 148, 161, 225],
    "124": [227],
    "125": [131, 231],
    "126": [232],
    "127": [139, 405],
    "128": [138, 233],
    "129": [130],
    "130": [410],
    "131": [133, 172, 239],
    "132": [144, 149, 240, 805],
    "133": [136, 244],
    "134": [245],
    "135": [246],
    "136": [152, 248],
    "137": [140, 147, 249, 418],
    "138": [250],
    "139": [414],
    "141": [251],
    "143": [253],
    "144": [258],
    "145": [259],
    "146": [261, 618],
    "147": [262],
    "148": [170, 266],
    "149": [267, 268],
    "150": [269],
    "151": [270],
    "152": [162, 307],
    "153": [275],
    "154": [276],
    "155": [277],
    "156": [183, 278],
    "157": [279],
    "158": [281],
    "161": [287],
    "162": [288],
    "163": [289],
    "164": [293],
    "165": [166, 182, 879],
    "166": [294, 630],
    "167": [633, 649],
    "168": [295],
    "169": [296],
    "170": [297],
    "171": [807, 819],
    "172": [808],
    "173": [814],
    "174": [817],
    "175": [820],
    "176": [821],
    "177": [339, 826],
    "178": [835],
    "179": [836],
    "180": [856],
    "181": [858],
    "182": [859],
    "183": [189, 860],
    "184": [196, 863],
    "185": [669, 864],
    "186": [871],
    "188": [875],
    "189": [877],
    "190": [319],
    "191": [195],
    "192": [881],
    "193": [323],
    "194": [887],
    "195": [328, 891],
    "196": [892],
    "201": [156, 177, 185, 211, 212, 216, 286, 336, 807, 892],
    "202": [203],
    "203": [204, 501, 502],
    "204": [201, 205, 689],
    "205": [206, 286],
    "206": [207, 255, 816, 830],
    "207": [208, 416],
    "208": [209],
    "209": [824],
    "210": [327],
    "213": [222],
    "214": [221, 893],
    "215": [117],
    "216": [171, 172, 210, 213, 214, 218, 286, 311, 312, 634, 678, 810, 855, 864],
    "217": [861],
    "218": [220, 226, 316, 846],
    "219": [901],
    "220": [228, 635, 854],
    "221": [257, 261, 264],
    "223": [890],
    "224": [147, 155, 182],
    "225": [183, 689],
    "226": [230],
    "227": [152, 154],
    "228": [229, 241, 613, 645, 819, 857],
    "229": [242],
    "230": [285, 881],
    "233": [263, 822, 842],
    "235": [236],
    "239": [132, 175, 188, 264, 412, 812],
    "240": [156, 177, 265],
    "242": [243],
    "243": [276, 809, 888],
    "245": [135],
    "246": [142],
    "247": [324, 845, 879],
    "248": [137, 252],
    "249": [265, 271],
    "250": [141, 614, 615],
    "253": [616],
    "255": [256, 876],
    "258": [145, 180],
    "259": [260],
    "260": [285],
    "263": [162, 189],
    "264": [161, 164, 266, 626, 822],
    "265": [280, 297, 628],
    "266": [166],
    "267": [150],
    "269": [190, 271],
    "270": [184],
    "271": [151],
    "272": [283, 417],
    "273": [236, 828, 888],
    "274": [153, 277],
    "275": [194],
    "278": [309, 636],
    "280": [284],
    "281": [282],
    "283": [620],
    "284": [845],
    "287": [169, 290, 420, 622, 623, 851],
    "289": [168],
    "290": [292],
    "292": [916],
    "293": [165, 173, 174, 629],
    "294": [625, 631, 645],
    "295": [169, 171, 178],
    "296": [170, 641],
    "299": [893],
    "301": [303],
    "302": [646],
    "303": [181, 284, 299, 302, 304, 326, 648, 689, 691, 694, 805, 825, 858, 863, 890],
    "304": [650],
    "306": [134],
    "307": [273],
    "308": [419],
    "309": [157, 279],
    "311": [280],
    "312": [636],
    "320": [880],
    "323": [325, 884],
    "324": [683, 885, 886],
    "330": [331],
    "331": [695],
    "333": [283, 334],
    "335": [336],
    "337": [339],
    "401": [402, 404],
    "402": [187, 403, 424, 429, 806],
    "405": [406],
    "406": [408, 422],
    "408": [409],
    "410": [411, 420, 643],
    "412": [247, 413],
    "413": [431],
    "414": [415],
    "416": [272, 432],
    "418": [308, 316],
    "419": [424],
    "420": [624, 809],
    "422": [423],
    "423": [651],
    "424": [425],
    "425": [433, 663],
    "426": [428],
    "427": [428],
    "429": [187, 871],
    "430": [431],
    "431": [291],
    "432": [433],
    "502": [503],
    "503": [504],
    "601": [602],
    "602": [603, 605],
    "603": [193, 195, 604],
    "604": [646, 652],
    "605": [606, 621, 679, 680, 693, 901],
    "606": [607, 896],
    "607": [608, 659, 661, 666, 673],
    "608": [609, 617, 619, 669],
    "611": [306],
    "612": [661],
    "613": [312],
    "618": [619, 662],
    "619": [638, 658, 689],
    "621": [833],
    "623": [620],
    "624": [164, 629],
    "625": [632],
    "626": [627, 630],
    "627": [628, 629],
    "629": [631],
    "630": [632],
    "632": [167],
    "634": [811],
    "635": [312],
    "636": [815],
    "638": [637, 639, 671],
    "641": [642, 690],
    "642": [643, 647],
    "643": [644],
    "646": [648],
    "647": [649],
    "648": [652],
    "649": [650, 651],
    "659": [660],
    "661": [662, 664],
    "662": [425],
    "664": [665, 683],
    "665": [667],
    "669": [670, 671],
    "673": [188, 290, 317, 674, 689, 876],
    "674": [290, 298, 675, 676, 677, 688],
    "676": [318, 678],
    "679": [680],
    "680": [191, 686, 880],
    "682": [322, 430, 685, 693],
    "685": [686, 687],
    "689": [690],
    "693": [694, 695],
    "694": [897],
    "695": [696],
    "701": [702],
    "702": [678, 689, 703],
    "703": [705],
    "704": [610],
    "805": [192, 806],
    "806": [813],
    "808": [191],
    "809": [647, 828],
    "810": [426, 811],
    "811": [812],
    "812": [813],
    "814": [815],
    "815": [846],
    "817": [818, 823],
    "818": [639],
    "819": [176],
    "820": [844],
    "821": [186],
    "825": [642],
    "826": [827],
    "827": [837],
    "828": [656, 829, 833],
    "829": [844],
    "835": [179],
    "836": [837],
    "838": [705, 839, 851],
    "839": [423, 659, 853, 870],
    "846": [656, 658, 848, 850, 854, 862, 865],
    "849": [850],
    "850": [660],
    "851": [181, 852],
    "854": [872],
    "855": [856, 857],
    "856": [158],
    "859": [666],
    "861": [862],
    "864": [670, 865],
    "869": [427],
    "870": [186, 429],
    "871": [193],
    "873": [874, 875],
    "875": [325],
    "876": [878],
    "880": [884, 889],
    "886": [684],
    "894": [895],
    "896": [897],
    "897": [696],
    "901": [902],
    "902": [903]
  },
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
  newload: [],
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
    app.newload = app.initcache('newload', [])
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

    app.data = app.data.concat(app.newload)
    app.data.forEach(function (e, i) {
      // if (e.wiki_id.length == 3 && e.wiki_id[1] == 0) {
      //   e.wiki_id = e.wiki_id[0] + e.wiki_id[2]
      // }
      app.wkid[String(e.game_id)] = e.wiki_id
      app.wktoi[String(e.wiki_id)] = e.game_id
      e.description = ifnull(app.zhCN[String(e.game_id)], e.detail)
      e.postQuest = ifnull(app.postQuest[String(e.game_id)], [])
      // gameid[String(e.wiki_id)] = e.game_id
    });
    console.time('计时器0')
    // 展示本地存储能力sss
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           app.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (app.userInfoReadyCallback) {
    //             app.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  wkid: {},
  wktoi: {},
  // let gameid = {},
  setstat: function (wkid, stat) {
    if (typeof wkid != 'string') x(wkid, stat);
    let history = app.get('history') || []
    if (history.constructor != Array) history = [];
    let add = [wkid, stat, new Date()]
    try {
      history.push(add)
      app.set('history', history)
    } catch (e) {
      x(e, wkid, stat, history)
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