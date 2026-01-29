var slotitem
const fail = '🐧失敗'
var years = []
var init = {
  '主砲/副砲': [1, 2, 78, 147, 3, 4, 5, 6, 65, 90, 7, 8, 9, 10, 11, 12, 66],
  魚雷: [13, 14, 15, 41],
  艦上攻撃機: [16, 17, 18, 52, 242],
  艦上戦闘機: [19, 20, 21, 22, 55, 181, 249],
  艦上爆撃機: [23, 24, 57, 60],
  水偵水爆: [25, 59, 163, 26, 194, 207],
  電探: [27, 28, 29, 30, 31, 32],
  増設: [33, 34, 72, 73],
  砲弾: [37, 38, 39, 40, 49, 51, 35, 36],
  'ソナー/爆雷': [46, 47, 44, 45, 226],
  艦上偵察機: [54, 61],
  其の他: [75, 120, 168, 250, -1],
}
var releasetime = {
  '2025/11/13': [478, 447],
  '2020/11/13': [78, 147],
  '2020/10/16': [194, 242, 249, 250],
  '2020/03/27': [120],
  '2020/02/07': [51, 90, 207, 226],
  '2017/03/17': [168],
  '2016/06/30': [181],
  '2016/03/11': [49],
  '2016/02/29': [163],
  '2015/06/12': [65, 66],
  '2014/07/04': [73],
  '2014/06/06': [72],
  '2014/05/23': [61],
  '2014/03/14': [59],
  '2014/02/26': [60, 75],
  '2013/08/26': [47, 57],
  '2013/05/15': [54, 55],
  '2013/05/08': [44, 45, 46, 52],
}
$.getJSON("dist/items/developable/sortby/init.json", function (result) {
  init = result;
}).done(function (d) {
});
$.getJSON("dist/items/developable/sortby/releasetime.json", function (result) {
  releasetime = result;
}).done(function (d) {
});
developable = []
var release = init
for (key in release) {
  release[key].forEach(function (e) {
    developable.push(e)
  })
  // developable.sort(sortNumber)
}
var itype
function formatItype(value) {
  var typename = value
  itype.forEach(function (el) {
    if (el['api_id'] == value) {
      typename = el['api_name']
    }
  })
  return typename
}
function formatItemId(value) {
  var str = value
  if (value == -1) {
    return fail
  }
  for (let i = 0; i < slotitem.length; i++) {
    // console.log(slotitem[i]['api_id'],value)
    if (slotitem[i]['api_id'] == value) {
      str = slotitem[i]['api_name']
      var newtag = ''
      let newest
      for (let t in releasetime) {
        newest = releasetime[t]
        break
      }
      if (newest.indexOf(value) > -1 && 'undefined' != typeof btninfo) {
        newtag =
          '<i style="background-image:url(https://pic4.zhimg.com/v2-338655a5d330e7af1ef36a314c689637_r.gif);" class="new"></i>'
      }
      return '<span class="flex">' + itag(slotitem[i]['api_type'][3]) + str + newtag + '</sapn>'
    }
  }
  return str
}
