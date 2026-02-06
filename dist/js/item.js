var slotitem
const fail = '🐧失敗'
var years = []
// var release = init
// for (key in release) {
//   release[key].forEach(function (e) {
//     developable.push(e)
//   })
  // developable.sort(sortNumber)
// }
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
