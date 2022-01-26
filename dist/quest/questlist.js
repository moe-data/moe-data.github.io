const kcurl = "https://kcwikizh.github.io/kcQuests/quests-scn.json"

const URL_PREFIX = 'https://raw.githubusercontent.com/antest1/kcanotify-gamedata/master'
const VERSION_URL = `${URL_PREFIX}/KCAINFO`
const DATA_URL = `${URL_PREFIX}/files`
const LANGS = ['scn', 'tcn', 'jp', 'en', 'ko']
const LOCALES = ['zh-CN', 'zh-TW', 'ja-JP', 'en-US', 'ko-KR']
LANGS.map((lang) => {
    const filename = `quests-${lang}.json`
    const fileURL = `${DATA_URL}/${filename}`
})

// for (let i = 200; i < datalen; i++) {
// 	if (app.data[i].type > 1)
// 		z(app.beginutc(app.data[i].wiki_id, new Date()),app.data[i].period, )
// }
// setTimeout(() => {
// 	update();
// 	var dawn = app.periodstart('daily', String(new Date()))
// }, dawn + 10000000000);

// function ifnull(notnul, ifnul) {
// 	if (typeof (notnul) === 'undefined') {
// 		return ifnul
// 	} else {
// 		return notnul
// 	}
// }

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
svdata = {
    "api_result": 1,
    "api_result_msg": "\u6210\u529f",
    "api_data": {
        "api_count": 92,
        "api_completed_kind": 0,
        "api_list": [
            {
                "api_no": 167,
                "api_category": 1,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u65b0\u822a\u7a7a\u6226\u968a\u3092\u7de8\u6210\u305b\u3088\uff01",
                "api_detail": "\u6539\u4e8c\u6539\u88c5\u3092\u7d42\u3048\u305f\u7fd4\u9db4\u578b\u822a\u7a7a\u6bcd\u82662\u96bb\u3068\u540c\u8b77\u885b\u8266\u306b\u3088\u308b\u65b0\u822a\u7a7a\u6226\u968a\u3092\u65b0\u7de8\u6210\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    300,
                    300,
                    300
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 173,
                "api_category": 1,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u5f37\u884c\u9ad8\u901f\u8f38\u9001\u90e8\u968a\u3092\u7de8\u6210\u305b\u3088\uff01",
                "api_detail": "\u300c\u5ddd\u5185\u6539\u4e8c\u300d\u65d7\u8266\u3001\u300c\u6c5f\u98a8\u6539\u4e8c\u300d\u300c\u6642\u96e8\u6539\u4e8c\u300d\u4ed6\u99c6\u90102\u96bb\u306b\u3088\u308b\u6c34\u96f7\u6226\u968a\u3092\u7de8\u6210\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    100,
                    100,
                    100,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 175,
                "api_category": 1,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u65b0\u7de8\u300c\u7b2c\u516b\u99c6\u9010\u968a\u300d\u3092\u518d\u7de8\u6210\u305b\u3088\uff01",
                "api_detail": "\u300c\u671d\u6f6e\u6539\u4e8c\u300d\u3092\u65d7\u8266\u3068\u3057\u305f\u300c\u6e80\u6f6e\u300d\u300c\u5927\u6f6e\u300d\u300c\u8352\u6f6e\u300d4\u96bb\u306b\u3088\u308b\u7b2c\u516b\u99c6\u9010\u968a\u3092\u518d\u7de8\u6210\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    200,
                    200,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 177,
                "api_category": 1,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u7b2c\u5341\u4e5d\u99c6\u9010\u968a\u300d\u3092\u7de8\u6210\u305b\u3088\uff01",
                "api_detail": "\u7279\u578b\u99c6\u9010\u8266\u300c\u78ef\u6ce2\u300d\u300c\u6d66\u6ce2\u300d\u300c\u7dbe\u6ce2\u300d\u300c\u6577\u6ce2\u300d4\u96bb\u306b\u3088\u308b\u7b2c\u5341\u4e5d\u99c6\u9010\u968a\u3092\u7de8\u6210\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    190,
                    190,
                    190,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 179,
                "api_category": 1,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u7cbe\u92ed\u300c\u7b2c\u5341\u516d\u6226\u968a\u300d\u3092\u518d\u7de8\u6210\u305b\u3088\uff01",
                "api_detail": "\u300c\u9b3c\u6012\u6539\u4e8c\u300d\u3092\u65d7\u8266\u3068\u3057\u3066\u3001\u300c\u5317\u4e0a\u6539\u4e8c\u300d\u300c\u5927\u4e95\u6539\u4e8c\u300d\u300c\u7403\u78e8\u6539\u300d\u53ca\u3073<br>\u300c\u9752\u8449\u6539\u300d\u300c\u6d66\u6ce2\u6539\u300d\u300c\u6577\u6ce2\u6539\u300d\u304b\u30895\u96bb\u3001\u8a086\u96bb\u306e\u7cbe\u92ed\u300c\u7b2c\u5341\u516d\u6226\u968a\u300d\u3092\u518d\u7de8\u6210\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    300,
                    300,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 183,
                "api_category": 1,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u65b0\u7de8\u300c\u7b2c\u56db\u6c34\u96f7\u6226\u968a\u300d\u3092\u7de8\u6210\u305b\u3088\uff01",
                "api_detail": "\u7de8\u6210\u4efb\u52d9\uff1a\u7b2c\u4e00\u8266\u968a\u65d7\u8266\u306b\u300c\u7531\u826f\u6539\u4e8c\u300d\u3092\u914d\u5099\u3001\u968f\u4f34\u8266\u306b\u4e8c\u99c6\u300c\u6751\u96e8\u300d\u300c\u5915\u7acb\u300d\u300c\u6625\u96e8\u300d\u300c\u4e94\u6708\u96e8\u300d<br>\u4ed61\u96bb\u306e\u99c6\u9010\u8266\u3092\u914d\u5099\u3001\u65b0\u7de8\u300c\u7b2c\u56db\u6c34\u96f7\u6226\u968a\u300d\u3092\u7de8\u6210\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    400,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 184,
                "api_category": 1,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u7cbe\u92ed\u300c\u7b2c\u4e8c\u4e8c\u99c6\u9010\u968a\u300d\u3092\u518d\u7de8\u6210\u305b\u3088\uff01",
                "api_detail": "\u7de8\u6210\u4efb\u52d9\uff1a\u300c\u6587\u6708\u6539\u4e8c\u300d\u300c\u7690\u6708\u6539\u4e8c\u300d\u300c\u6c34\u7121\u6708\u6539\u300d\u300c\u9577\u6708\u6539\u300d\u306e\u7cbe\u5f37\u99c6\u9010\u82664\u96bb\u306e\u7de8\u6210\u306b\u3088\u308b<br>\u7cbe\u92ed\u7b2c\u4e8c\u4e8c\u99c6\u9010\u968a\u3092\u518d\u7de8\u6210\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    220,
                    0,
                    220,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 185,
                "api_category": 1,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u7cbe\u5f37\u300c\u4efb\u52d9\u90e8\u968a\u300d\u3092\u7de8\u6210\u305b\u3088\uff01",
                "api_detail": "\u7de8\u6210\u4efb\u52d9\uff1a\u7b2c\u4e00\u8266\u968a\u65d7\u8266\u306b\u300cSaratoga Mk.II\u300d\u307e\u305f\u306f\u540c\u300cMod.2\u300d\u3092\u914d\u5099\u3001\u968f\u4f34\u8266\u306b<br>\u8efd\u5de1\u6d0b\u82661\u96bb\u3001\u99c6\u9010\u82662\u96bb\u4ee5\u4e0a\u3092\u914d\u3057\u305f\u591c\u9593\u4f5c\u6226\u53ef\u80fd\u306a\u6a5f\u52d5\u90e8\u968a\u3092\u65b0\u7de8\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    300,
                    0,
                    300
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 188,
                "api_category": 1,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u7cbe\u92ed\u300c\u4e09\u4e00\u99c6\u300d\u7b2c\u4e00\u5c0f\u968a\u3001\u629c\u9328\u6e96\u5099\uff01",
                "api_detail": "\u7de8\u6210\u4efb\u52d9\uff1a\u300c\u9577\u6ce2\u6539\u4e8c\u300d\u65d7\u8266\u3001\u50da\u8266\u306b\u300c\u9ad8\u6ce2\u6539\u300d\u307e\u305f\u306f\u300c\u6c96\u6ce2\u6539\u300d\u300c\u671d\u971c\u6539\u300d\u3092\u914d\u3057\u305f\u3001<br>\u7b2c\u4e09\u4e00\u99c6\u9010\u968a\u7b2c\u4e00\u5c0f\u968a(2\u96bb\u8266\u968a)\u3092\u7de8\u6210\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    200,
                    200,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 191,
                "api_category": 1,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u6539\u88c5\u300c\u7b2c\u5341\u4e03\u99c6\u9010\u968a\u300d\u3001\u518d\u7de8\u59cb\u3081\uff01",
                "api_detail": "\u6539\u88c5\u99c6\u9010\u968a\u7de8\u6210\u4efb\u52d9\uff1a\u6539\u88c5\u3057\u305f\u967d\u708e\u578b\u99c6\u9010\u8266\u300c\u6d66\u98a8\u6539\u300d\u300c\u8c37\u98a8\u6539\u300d\u3001\u305d\u3057\u3066\u5bfe\u7a7a\u6226\u95d8\u306e\u6fc0\u5316\u306b\u5099\u3048\u3001<br>\u5bfe\u7a7a\u5175\u88c5\u3092\u8ef8\u306b\u5927\u5e45\u5f37\u5316\u6539\u88c5\u3057\u305f\u300c\u78ef\u98a8\u4e59\u6539\u300d\u300c\u6d5c\u98a8\u4e59\u6539\u300d\u306b\u3088\u308b\u300c\u7b2c\u5341\u4e03\u99c6\u9010\u968a\u300d\u3092\u518d\u7de8\u305b\u3088\uff01",
                "api_voice_id": 1191,
                "api_get_material": [
                    170,
                    170,
                    170,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 194,
                "api_category": 1,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u7cbe\u92ed\u300c\u7b2c\u5341\u516b\u6226\u968a\u300d\u3092\u518d\u7de8\u6210\u305b\u3088\uff01",
                "api_detail": "\u65e7\u5f0f\u5c0f\u578b\u8efd\u5de1\u90e8\u968a\u306e\u6539\u88c5\u518d\u7de8\u6210\uff1a\u6539\u5929\u9f8d\u578b\u8efd\u5de1\u300c\u5929\u9f8d\u6539\u4e8c\u300d\u53ca\u3073\u300c\u9f8d\u7530\u6539\u4e8c\u300d\u306e2\u96bb\u3067<br>\u69cb\u6210\u3055\u308c\u308b\u7cbe\u92ed\u300c\u7b2c\u5341\u516b\u6226\u968a\u300d\u3092\u518d\u7de8\u6210\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    180,
                    0,
                    180,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 213,
                "api_category": 2,
                "api_type": 2,
                "api_label_type": 3,
                "api_state": 1,
                "api_title": "\u6d77\u4e0a\u901a\u5546\u7834\u58ca\u4f5c\u6226",
                "api_detail": "1\u9031\u9593\u3067\u6575\u8f38\u9001\u8239\u309220\u96bb\u4ee5\u4e0a\u6483\u6c88\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    500,
                    0,
                    400,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 221,
                "api_category": 2,
                "api_type": 2,
                "api_label_type": 3,
                "api_state": 1,
                "api_title": "\u308d\u53f7\u4f5c\u6226",
                "api_detail": "1\u9031\u9593\u306e\u5168\u529b\u51fa\u6483\u3092\u884c\u3044\u3001\u6575\u8f38\u9001\u8239\u56e3\u3092\u6355\u6349\u30fb\u6483\u6ec5\u3001\u6575\u306e\u88dc\u7d66\u8def\u3092\u5bf8\u65ad\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    400,
                    0,
                    800,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 226,
                "api_category": 2,
                "api_type": 1,
                "api_label_type": 2,
                "api_state": 1,
                "api_title": "\u5357\u897f\u8af8\u5cf6\u6d77\u57df\u306e\u5236\u6d77\u6a29\u3092\u63e1\u308c\uff01",
                "api_detail": "\u8266\u968a\u3092\u5357\u897f\u8af8\u5cf6\u6d77\u57df\u306b\u5168\u529b\u51fa\u6483\u3055\u305b\u3001\u591a\u6570\u306e\u6575\u8266\u968a\u300c\u4e3b\u529b\u300d\u7fa4\u3092\u6355\u6349\u3001\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    300,
                    0,
                    0,
                    200
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 228,
                "api_category": 2,
                "api_type": 2,
                "api_label_type": 3,
                "api_state": 1,
                "api_title": "\u6d77\u4e0a\u8b77\u885b\u6226",
                "api_detail": "\u6709\u529b\u306a\u5bfe\u6f5c\u80fd\u529b\u3092\u6301\u3064\u6d77\u4e0a\u8b77\u885b\u968a\u306b\u3088\u3063\u3066\u3001\u53ef\u80fd\u306a\u9650\u308a\u591a\u304f\u306e\u6575\u6f5c\u6c34\u8266\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    600,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 234,
                "api_category": 2,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u30d0\u30ec\u30f3\u30bf\u30a4\u30f3\u9650\u5b9a\u4efb\u52d9 \u3010\u4e00\u53f7\u4f5c\u6226\u3011",
                "api_detail": "\u30d0\u30ec\u30f3\u30bf\u30a4\u30f3\u9650\u5b9a\u4efb\u52d9\uff1a\u8efd\u5de11\u96bb\u53ca\u3073\u99c6\u9010\u82662\u96bb\u4ee5\u4e0a\u3092\u542b\u3080\u8266\u968a\u3067\u5357\u897f\u8af8\u5cf6\u9632\u885b\u7dda\u3001\u5357\u897f\u8af8\u5cf6\u8fd1\u6d77\u3001<br>\u30d0\u30b7\u30fc\u6d77\u5ce1\u53ca\u3073\u6771\u90e8\u30aa\u30ea\u30e7\u30fc\u30eb\u6d77\u3092\u54e8\u6212\uff01\u6575\u8266\u968a\u3092\u6355\u6349\u6483\u7834\u3057\u3001\u5404\u6d77\u57df\u306e\u5236\u6d77\u6a29\u78ba\u4fdd\u306b\u52aa\u3081\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    0,
                    2021,
                    214
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 236,
                "api_category": 2,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u7cbe\u92ed\u300c\u4e8c\u56db\u99c6\u9010\u968a\u300d\u51fa\u6483\u305b\u3088\uff01",
                "api_detail": "\u4e8c\u56db\u99c6\u51fa\u6483\u4efb\u52d9\uff1a\u300c\u6d77\u98a8\u6539\u4e8c\u300d\u3092\u65d7\u8266\u3068\u3057\u3001\u300c\u5c71\u98a8\u300d\u300c\u6c5f\u98a8\u300d\u300c\u6dbc\u98a8\u300d\u306e\u3046\u30612\u96bb\u4ee5\u4e0a\u3092\u542b\u3080\u8266\u968a\u3092\u7de8\u6210\u3001<br>\u6771\u90e8\u30aa\u30ea\u30e7\u30fc\u30eb\u6d77\u3001\u6c96\u30ce\u5cf6\u6d77\u57df\u3001\u5357\u65b9\u6d77\u57df\u524d\u9762\u3001\u30b5\u30d6\u5cf6\u6c96\u6d77\u57df\u306b\u7a81\u5165\uff01\u6575\u8266\u968a\u3092\u6355\u6349\u3001\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    800,
                    800,
                    800,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 237,
                "api_category": 2,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u7fbd\u9ed2\u300d\u300c\u795e\u98a8\u300d\u3001\u51fa\u6483\u305b\u3088\uff01",
                "api_detail": "\u7b2c\u4e94\u6226\u968a\u4efb\u52d9\uff1a\u300c\u7fbd\u9ed2\u300d\u300c\u795e\u98a8\u300d\u3092\u57fa\u5e79\u3068\u3057\u3066\u3001\u4ed6\u306b\u91cd\u5de1\u7d1a1\u96bb\u99c6\u9010\u82662\u96bb\u3001\u307e\u305f\u306f\u99c6\u9010\u82664\u96bb\u306e<br>\u8266\u968a\u3067\u5357\u897f\u8af8\u5cf6\u8fd1\u6d77\u3001\u30d0\u30b7\u30fc\u6d77\u5ce1\u3001\u6771\u90e8\u30aa\u30ea\u30e7\u30fc\u30eb\u6d77\u306b\u51fa\u6483\u3001\u6575\u8266\u968a\u3068\u4ea4\u6226\u3001\u3053\u308c\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    516,
                    0,
                    1945,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 256,
                "api_category": 2,
                "api_type": 3,
                "api_label_type": 6,
                "api_state": 1,
                "api_title": "\u300c\u6f5c\u6c34\u8266\u968a\u300d\u51fa\u6483\u305b\u3088\uff01",
                "api_detail": "\u6f5c\u6c34\u8266\u6226\u529b\u3092\u4e2d\u6838\u3068\u3057\u305f\u8266\u968a\u3067\u4e2d\u90e8\u6d77\u57df\u54e8\u6212\u7dda\u3078\u53cd\u5fa9\u51fa\u6483\u3001\u6575\u6226\u529b\u3092\u6f38\u6e1b\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    600,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 259,
                "api_category": 2,
                "api_type": 3,
                "api_label_type": 6,
                "api_state": 1,
                "api_title": "\u300c\u6c34\u4e0a\u6253\u6483\u90e8\u968a\u300d\u5357\u65b9\u3078\uff01",
                "api_detail": "\u6226\u82663\u96bb\u8efd\u5de11\u96bb\u4ed6\u3092\u57fa\u5e79\u3068\u3057\u305f\u6c34\u4e0a\u6253\u6483\u90e8\u968a\u3067\u5357\u65b9\u6d77\u57df\u3078\u9032\u51fa\u3001\u6575\u8266\u968a\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    350,
                    400,
                    350,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 265,
                "api_category": 2,
                "api_type": 3,
                "api_label_type": 6,
                "api_state": 1,
                "api_title": "\u6d77\u4e0a\u8b77\u885b\u5f37\u5316\u6708\u9593",
                "api_detail": "\u93ae\u5b88\u5e9c\u6b63\u9762\u6d77\u57df\u306e\u5bfe\u6f5c\u54e8\u6212\u3092\u5f37\u5316\u3057\u3001\u6575\u6f5c\u6c34\u8266\u3092\u5236\u5727\u3001\u5b89\u5168\u306a\u6d77\u4e0a\u8f38\u9001\u4f53\u5236\u3092\u78ba\u7acb\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    800,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 276,
                "api_category": 2,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u6d77\u4e0a\u7a81\u5165\u90e8\u968a\u3001\u9032\u767a\u305b\u3088\uff01",
                "api_detail": "\u300c\u6bd4\u53e1\u300d\u300c\u9727\u5cf6\u300d\u300c\u9577\u826f\u300d\u300c\u6681\u300d\u300c\u96f7\u300d\u300c\u96fb\u300d\u306e\u8266\u968a\u3067\u3001\u5357\u65b9\u6d77\u57df\u9032\u51fa\u4f5c\u6226\u3092\u5b9f\u65bd\u3001\u6575\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    500,
                    0,
                    500,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 280,
                "api_category": 2,
                "api_type": 3,
                "api_label_type": 6,
                "api_state": 1,
                "api_title": "\u5175\u7ad9\u7dda\u78ba\u4fdd\uff01\u6d77\u4e0a\u8b66\u5099\u3092\u5f37\u5316\u5b9f\u65bd\u305b\u3088\uff01",
                "api_detail": "\u6d77\u4e0a\u8b66\u5099\u4efb\u52d9\uff1a\u8efd\u7a7a\u6bcd\u307e\u305f\u306f\u8efd\u5de1\u7d1a1\u96bb\u3001\u99c6\u9010\u8266\u307e\u305f\u306f\u6d77\u9632\u8266\u3092\u8a083\u96bb\u4ee5\u4e0a\u914d\u5099\u3057\u305f\u6d77\u4e0a\u8b77\u885b\u8266\u968a\u3067\u3001<br>\u5357\u897f\u8af8\u5cf6\u6c96\u8b66\u5099\u3001\u6d77\u4e0a\u8b77\u885b\u4f5c\u6226\u3001\u53571\u53f7\u4f5c\u6226\u3001\u5357\u897f\u8af8\u5cf6\u54e8\u6212\u3092\u5b9f\u65bd\u3001\u5404\u4f5c\u6226\u6d77\u57df\u306e\u6575\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    400,
                    400,
                    0,
                    400
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 283,
                "api_category": 2,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u7cbe\u5f37\uff01\u300c\u7b2c\u4e00\u822a\u7a7a\u6226\u968a\u300d\u51fa\u6483\u305b\u3088\uff01",
                "api_detail": "\u7b2c\u4e00\u8266\u968a\u65d7\u8266\u300c\u8d64\u57ce\u6539\u4e8c(\u6539\u4e8c\u620a)\u300d\u540c\u4e8c\u756a\u8266\u300c\u52a0\u8cc0\u300d\u306e\u7b2c\u4e00\u822a\u7a7a\u6226\u968a\u3092\u4e2d\u6838\u3068\u3057\u305f\u8266\u968a\u3067\u3001\u30ab\u30ec\u30fc\u6d0b<br>\u30ea\u30e9\u30f3\u30ab\u5cf6\u6c96\u3001\u73ca\u745a\u8af8\u5cf6\u6c96\u306b\u5c55\u958b\uff01\u3055\u3089\u306bKW\u74b0\u7901\u6c96\u6d77\u57df\u306b\u53cd\u5fa9\u51fa\u6483\uff01\u93a7\u8896\u4e00\u89e6\uff01\u6575\u3092\u7c89\u7815\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    0,
                    1000,
                    1000
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 290,
                "api_category": 2,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u6bd4\u53e1\u300d\u306e\u51fa\u6483",
                "api_detail": "\u300c\u6bd4\u53e1\u300d\u5357\u65b9\u6d77\u57df\u51fa\u6483\u4efb\u52d9\uff1a\u9ad8\u901f\u6226\u8266\u300c\u6bd4\u53e1\u300d\u3092\u65d7\u8266\u3068\u3059\u308b\u6709\u529b\u306a\u8266\u968a\u3067\u3001\u5357\u65b9\u6d77\u57df<br>\u30b5\u30d6\u5cf6\u6c96\u6d77\u57df\u53ca\u3073\u30b5\u30fc\u30e2\u30f3\u6d77\u57df\u306b\u51fa\u6483\u3002\u540c\u4f5c\u6226\u6d77\u57df\u306e\u6575\u8266\u968a\u3068\u4ea4\u6226\u3001\u3053\u308c\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    1113,
                    1942,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 298,
                "api_category": 2,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u7b2c\u4e03\u99c6\u9010\u968a\u300d\u3001\u5357\u897f\u8af8\u5cf6\u3092\u99c6\u3051\u308b\uff01",
                "api_detail": "\u300c\u66d9\u300d\u300c\u6f6e\u300d\u300c\u6f23\u300d\u300c\u6727\u300d\u304b\u3089\u6210\u308b\u300c\u7b2c\u4e03\u99c6\u9010\u968a\u300d2\u96bb\u4ee5\u4e0a\u3092\u542b\u3080\u6709\u529b\u306a\u8266\u968a\u3092\u7de8\u6210\u3001\u5357\u897f\u8af8\u5cf6\u8fd1\u6d77\u3001<br>\u30d0\u30b7\u30fc\u6d77\u5ce1\u3001\u6771\u90e8\u30aa\u30ea\u30e7\u30fc\u30eb\u6d77\u3001\u6c96\u30ce\u5cf6\u6d77\u57df\u306e\u6575\u6226\u529b\u3092\u6483\u6ec5\u3001\u5357\u897f\u8af8\u5cf6\u6d77\u57df\u306e\u5236\u6d77\u6a29\u3092\u78ba\u4fdd\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    700,
                    700,
                    700,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 1,
                "api_invalid_flag": 0
            },
            {
                "api_no": 302,
                "api_category": 3,
                "api_type": 2,
                "api_label_type": 3,
                "api_state": 1,
                "api_title": "\u5927\u898f\u6a21\u6f14\u7fd2",
                "api_detail": "\u4eca\u9031\u4e2d\u306b\u300c\u6f14\u7fd2\u300d\u3067\u4ed6\u306e\u63d0\u7763\u306e\u8266\u968a\u306b\u5bfe\u3057\u306620\u56de\u300c\u52dd\u5229\u300d\u3057\u3088\u3046\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    200,
                    200,
                    200,
                    200
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 304,
                "api_category": 3,
                "api_type": 1,
                "api_label_type": 2,
                "api_state": 1,
                "api_title": "\u300c\u6f14\u7fd2\u300d\u3067\u4ed6\u63d0\u7763\u3092\u5727\u5012\u305b\u3088\uff01",
                "api_detail": "\u672c\u65e5\u4e2d\u306b\u4ed6\u306e\u53f8\u4ee4\u5b98\u306e\u8266\u968a\u3068\u306e\u300c\u6f14\u7fd2\u300d\u30675\u56de\u4ee5\u4e0a\u300c\u52dd\u5229\u300d\u3092\u304a\u3055\u3081\u3088\u3046\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    50,
                    0,
                    50
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 317,
                "api_category": 3,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u7532\u578b\u99c6\u9010\u8266\u306e\u6226\u529b\u6574\u5099\u8a08\u753b",
                "api_detail": "\u7532\u578b\u99c6\u9010\u8266\u6574\u5099\u4efb\u52d9\uff1a\u7532\u578b\u99c6\u9010\u8266\u3010\u5915\u96f2\u578b\/\u967d\u708e\u578b\u3011\u30922\u96bb\u4ee5\u4e0a\u914d\u5099\u3057\u305f\u7b2c\u4e00\u8266\u968a\u3067\u6f14\u7fd2\u30673\u56de\u300c\u52dd\u5229\u300d\u3001<br>\u305d\u306e\u5f8c\u3001\u540c\u8266\u968a\u3092\u5357\u897f\u8af8\u5cf6\u6d77\u57df\u306b\u6295\u5165\u3002\u5404\u51fa\u6483\u3067\u5f97\u3089\u308c\u305f\u6226\u8a13\u3092\u8266\u968a\u578b\u99c6\u9010\u8266\u6226\u529b\u6574\u5099\u306b\u6d3b\u7528\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    350,
                    0,
                    350
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 324,
                "api_category": 3,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u6226\u95d8\u822a\u7a7a\u6bcd\u8266\u4e00\u756a\u8266\u3001\u6f14\u7fd2\u59cb\u3081\uff01",
                "api_detail": "\u6539\u88c5\u822a\u7a7a\u6226\u8266(\u6226\u95d8\u822a\u7a7a\u6bcd\u8266)\u6f14\u7fd2\u4efb\u52d9\uff1a\u65d7\u8266\u300c\u4f0a\u52e2\u6539\u4e8c\u300d\u3001\u968f\u4f34\u8266\u306b\u99c6\u9010\u82662\u96bb\u4ee5\u4e0a\u3092\u914d\u3057\u305f\u822a\u7a7a\u6226\u968a<br>\u3092\u7de8\u6210\u3002\u65b0\u6539\u88c5\u8266\u306e\u6163\u719f\u3082\u517c\u306d\u305f\u540c\u822a\u7a7a\u6226\u968a\u306e\u6f14\u7fd2\u3067\u3001\u672c\u65e5\u4e2d\u306b3\u56de\u4ee5\u4e0a\u52dd\u5229\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    0,
                    0,
                    500
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 344,
                "api_category": 3,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u7b2c\u5341\u65b9\u9762\u8266\u968a\u300d\u6f14\u7fd2\uff01",
                "api_detail": "\u7b2c\u5341\u65b9\u9762\u8266\u968a\u6f14\u7fd2\u4efb\u52d9\uff1a\u540c\u8266\u968a\u306e\u57fa\u5e79\u6226\u529b\u3067\u3042\u308b\u91cd\u5de1\u300c\u7fbd\u9ed2\u300d\u300c\u8db3\u67c4\u300d\u3001\u99c6\u9010\u8266\u300c\u795e\u98a8\u300d\u306e\u3046\u3061<br>2\u96bb\u4ee5\u4e0a\u3092\u542b\u3080\u8266\u968a\u3092\u7de8\u6210\u3002\u540c\u8266\u968a\u3067\u3001\u672c\u65e5\u4e2d\u306b\u3010A\u5224\u5b9a\u3011\u4ee5\u4e0a\u306e\u52dd\u5229\u30924\u56de\u4ee5\u4e0a\u9054\u6210\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    500,
                    500,
                    500
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 345,
                "api_category": 3,
                "api_type": 5,
                "api_label_type": 110,
                "api_state": 1,
                "api_title": "\u6f14\u7fd2\u30c6\u30a3\u30fc\u30bf\u30a4\u30e0\uff01",
                "api_detail": "\u300cWarspite\u300d\u300c\u91d1\u525b\u300d\u300cArk Royal\u300d\u300cNelson\u300d\u53ca\u3073J\u7d1a\u99c6\u9010\u8266\u304b\u30894\u96bb\u4ee5\u4e0a\u542b\u3080\u8266\u968a\u3092\u7de8\u6210\uff01<br>\u540c\u30c6\u30a3\u30fc\u30bf\u30a4\u30e0\u8266\u968a\u3067\u3001\u672c\u65e5\u4e2d\u306b\u3010A\u5224\u5b9a\u3011\u4ee5\u4e0a\u306e\u52dd\u5229\u30924\u56de\u4ee5\u4e0a\u9054\u6210\u305b\u3088\uff01Tea Time\u306f\u5927\u5207\u30cd\u30fc\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    600,
                    600,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 403,
                "api_category": 4,
                "api_type": 1,
                "api_label_type": 2,
                "api_state": 2,
                "api_title": "\u300c\u9060\u5f81\u300d\u3092\uff11\uff10\u56de\u6210\u529f\u3055\u305b\u3088\u3046\uff01",
                "api_detail": "\u672c\u65e5\u4e2d\u306b\u300c\u9060\u5f81\u300d10\u56de\u6210\u529f\u3055\u305b\u3088\u3046\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    150,
                    300,
                    300,
                    150
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 1,
                "api_invalid_flag": 0
            },
            {
                "api_no": 411,
                "api_category": 4,
                "api_type": 2,
                "api_label_type": 3,
                "api_state": 1,
                "api_title": "\u5357\u65b9\u3078\u306e\u9f20\u8f38\u9001\u3092\u7d99\u7d9a\u5b9f\u65bd\u305b\u3088\uff01",
                "api_detail": "\u4eca\u9031\u4e2d\u306b\u300c\u6771\u4eac\u6025\u884c\u300d\u7cfb\u9060\u5f81\u3092\u7d99\u7d9a\u7684\u306b\u5b9f\u65bd\u3001\u540c\u7a2e\u4f5c\u6226\u30927\u56de\u6210\u529f\u3055\u305b\u3088\u3046\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    400,
                    0,
                    0,
                    400
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 425,
                "api_category": 4,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u6d77\u4e0a\u8b77\u885b\u7dcf\u968a\u3001\u9060\u5f81\u958b\u59cb\uff01",
                "api_detail": "\u9060\u5f81\u4efb\u52d9\uff1a\u9060\u5f81\u4efb\u52d9\u300c\u5bfe\u6f5c\u8b66\u6212\u4efb\u52d9\u300d\u300c\u6d77\u4e0a\u8b77\u885b\u4efb\u52d9\u300d\u300c\u30bf\u30f3\u30ab\u30fc\u8b77\u885b\u4efb\u52d9\u300d\u3092\u5b9f\u65bd\u3001<br>\u8efd\u5de1\u3001\u99c6\u9010\u8266\u3001\u6d77\u9632\u8266\u306a\u3069\u304b\u3089\u7de8\u6210\u3055\u308c\u305f\u8b77\u885b\u8266\u968a\u3067\u5404\u9060\u5f81\u3092\u6210\u529f\u3055\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    700,
                    700,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 430,
                "api_category": 4,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u6d77\u9632\u8266\u300d\u3001\u9032\u767a\u305b\u3088\uff01",
                "api_detail": "\u6d77\u4e0a\u8b77\u885b\u4efb\u52d9\uff1a\u9060\u5f81\u4efb\u52d9\u300c\u5175\u7ad9\u5f37\u5316\u4efb\u52d9\u300d\u300c\u6d77\u5ce1\u8b66\u5099\u884c\u52d5\u300d\u300c\u6d77\u4e0a\u8b77\u885b\u4efb\u52d9\u300d\u300c\u30bf\u30f3\u30ab\u30fc\u8b77\u885b\u4efb\u52d9\u300d<br>\u3092\u6d77\u9632\u8266\u3001\u99c6\u9010\u8266\u306a\u3069\u3092\u4e3b\u8ef8\u3068\u3057\u305f\u8b77\u885b\u8266\u8247\u3067\u5b9f\u65bd\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    800,
                    0,
                    0,
                    600
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 1,
                "api_invalid_flag": 0
            },
            {
                "api_no": 432,
                "api_category": 4,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u8b66\u5099\u53ca\u3073\u54e8\u6212\u5075\u5bdf\u3092\u5f37\u5316\u305b\u3088\uff01",
                "api_detail": "\u8b66\u5099\u54e8\u6212\u4efb\u52d9\uff1a\u9060\u5f81\u300c\u6d77\u5ce1\u8b66\u5099\u884c\u52d5\u300d\u300c\u5f37\u884c\u5075\u5bdf\u4efb\u52d9\u300d\u300c\u5357\u897f\u65b9\u9762\u822a\u7a7a\u5075\u5bdf\u4f5c\u6226\u300d\u3092\u5b9f\u65bd\u3001<br>\u5357\u65b9\u6226\u7dda\u9060\u5f81\u306e\u524d\u6bb5\u4f5c\u6226\u3068\u3057\u3066\u3001\u5185\u5730\u53ca\u3073\u5357\u897f\u8af8\u5cf6\u65b9\u9762\u306e\u8b66\u5099\u53ca\u3073\u54e8\u6212\u5075\u5bdf\u3092\u5b9f\u65bd\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    500,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 438,
                "api_category": 4,
                "api_type": 5,
                "api_label_type": 108,
                "api_state": 1,
                "api_title": "\u5357\u897f\u8af8\u5cf6\u65b9\u9762\u306e\u6d77\u4e0a\u8b77\u885b\u3092\u5f37\u5316\u305b\u3088\uff01",
                "api_detail": "\u6d77\u4e0a\u8b77\u885b\u4efb\u52d9\uff1a\u300c\u5175\u7ad9\u5f37\u5316\u4efb\u52d9\u300d\u300c\u5bfe\u6f5c\u8b66\u6212\u4efb\u52d9\u300d\u300c\u30bf\u30f3\u30ab\u30fc\u8b77\u885b\u4efb\u52d9\u300d\u53ca\u3073<br>\u300c\u5357\u897f\u8af8\u5cf6\u635c\u7d22\u6483\u6ec5\u6226\u300d\u306e\u5404\u9060\u5f81\u4efb\u52d9\u3092\u5b9f\u65bd\u3001\u3053\u308c\u3092\u6210\u529f\u3055\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    2000,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 1,
                "api_invalid_flag": 0
            },
            {
                "api_no": 442,
                "api_category": 4,
                "api_type": 5,
                "api_label_type": 102,
                "api_state": 1,
                "api_title": "\u897f\u65b9\u9023\u7d61\u4f5c\u6226\u6e96\u5099\u3092\u5b9f\u65bd\u305b\u3088\uff01",
                "api_detail": "\u897f\u65b9\u9023\u7d61\u4f5c\u6226\u6e96\u5099\uff1a\u300c\u897f\u65b9\u6d77\u57df\u5075\u5bdf\u4f5c\u6226\u300d\u300c\u6f5c\u6c34\u8266\u6d3e\u9063\u6f14\u7fd2\u300d\u300c\u6f5c\u6c34\u8266\u6d3e\u9063\u4f5c\u6226\u300d<br>\u53ca\u3073\u300c\u6b27\u5dde\u65b9\u9762\u53cb\u8ecd\u3068\u306e\u63a5\u89e6\u300d\u5404\u9060\u5f81\u3092\u5b9f\u65bd\u3001\u3053\u308c\u3092\u6210\u529f\u3055\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    900,
                    500,
                    500
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 504,
                "api_category": 5,
                "api_type": 1,
                "api_label_type": 2,
                "api_state": 1,
                "api_title": "\u8266\u968a\u9152\u4fdd\u796d\u308a\uff01",
                "api_detail": "\u8266\u968a\u9152\u4fdd\u796d\u308a\uff01\u5404\u8266\u306b\u5ef6\u307915\u56de\u4ee5\u4e0a\u306e\u88dc\u7d66\u3092\u5b9f\u65bd\u3057\u3088\u3046\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    50,
                    50,
                    50,
                    50
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 621,
                "api_category": 6,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u9678\u6226\u7528\u88c5\u5099\u306e\u8266\u8f09\u904b\u7528\u7814\u7a76",
                "api_detail": "\u7b2c\u4e00\u8266\u968a\u65d7\u8266\u8efd\u5de1\u7d1a\u306e\u7b2c\u4e00\u88c5\u5099\u30b9\u30ed\u306b\u300c7.7mm\u6a5f\u9283\u300d\u88c5\u5099\u3002\u300c25mm\u5358\u88c5\u6a5f\u9283\u300dx2\u3001\u300c\u30c9\u30e9\u30e0\u7f36(\u8f38\u9001<br>\u7528)\u300dx2\u3001\u300c12cm30\u9023\u88c5\u5674\u9032\u7832\u300dx1\u3092\u5ec3\u68c4\u3002\u5f3e\u85acx1,700\u3001\u958b\u767a\u8cc7\u6750x30\u3001\u9ad8\u901f\u5efa\u9020\u6750x10\u3092\u6e96\u5099\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 636,
                "api_category": 6,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u4e0a\u9678\u6226\u7528\u65b0\u88c5\u5099\u306e\u8abf\u9054",
                "api_detail": "\u300c\u5de5\u5ee0\u300d\u3067\u300c7.7mm\u6a5f\u9283\u300d\u53ca\u3073\u300c12.7mm\u5358\u88c5\u6a5f\u9283\u300d\u3092\u4e8c\u3064\u305a\u3064\u5ec3\u68c4\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    50,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 637,
                "api_category": 6,
                "api_type": 5,
                "api_label_type": 7,
                "api_state": 1,
                "api_title": "\u300c\u719f\u7df4\u642d\u4e57\u54e1\u300d\u990a\u6210",
                "api_detail": "\u52f2\u7ae0x2\u6d88\u8cbb\uff1a\u300c\u9cf3\u7fd4\u300d\u79d8\u66f8\u8266\u306b\u7df4\u5ea6max\u53ca\u3073\u6539\u4feemax\u300c\u4e5d\u516d\u5f0f\u8266\u6226\u300d\u3092\u642d\u8f09\u3001\u719f\u7df4\u642d\u4e57\u54e1\u3092\u990a\u6210\u305b\u3088\uff01<br>(\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u90e8\u968a\u306f\u6d88\u6ec5\u3057\u307e\u3059)",
                "api_voice_id": 0,
                "api_lost_badges": 2,
                "api_get_material": [
                    0,
                    0,
                    0,
                    100
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 638,
                "api_category": 6,
                "api_type": 2,
                "api_label_type": 3,
                "api_state": 1,
                "api_title": "\u5bfe\u7a7a\u6a5f\u9283\u91cf\u7523",
                "api_detail": "\u300c\u6a5f\u9283\u300d\u7cfb\u88c5\u5099\u3092\u91cf\u7523\u3057\u3001\u5de5\u5ee0\u30676\u500b\u5ec3\u68c4\uff01 \u300c\u88c5\u5099\u6539\u4fee\u300d\u5f37\u5316\u3092\u30b5\u30dd\u30fc\u30c8\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    100,
                    0,
                    200
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 1,
                "api_invalid_flag": 0
            },
            {
                "api_no": 641,
                "api_category": 6,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u822a\u7a7a\u57fa\u5730\u8a2d\u55b6\u300d\u4e8b\u524d\u6e96\u5099",
                "api_detail": "\u300c\u822a\u7a7a\u57fa\u5730\u8a2d\u55b6\u300d\u306e\u4e8b\u524d\u6e96\u5099\u3092\u958b\u59cb\u3059\u308b\u3002\u300c\u30c9\u30e9\u30e0\u7f36(\u8f38\u9001\u7528)\u300d\u3092\u4e8c\u3064\u300c\u5de5\u5ee0\u300d\u3067\u5ec3\u68c4\u3057\u3001\u300c7.7mm\u6a5f<br>\u9283\u300d\u53ca\u3073\u300c\u4e5d\u516d\u5f0f\u8266\u6226\u300d\u3092\u5404\u4e8c\u3064\u305a\u3064\u7528\u610f\u305b\u3088\uff01(\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u7528\u610f\u3057\u305f\u5fc5\u8981\u88c5\u5099\u306f\u6d88\u6ec5\u3057\u307e\u3059)",
                "api_voice_id": 0,
                "api_get_material": [
                    200,
                    0,
                    0,
                    200
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 1,
                "api_invalid_flag": 0
            },
            {
                "api_no": 648,
                "api_category": 6,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u7279\u6ce8\u5bb6\u5177\u300d\u306e\u8abf\u9054",
                "api_detail": "\u300c12.7cm\u9023\u88c5\u9ad8\u89d2\u7832\u300d\u4e8c\u3064\u3092\u5ec3\u68c4\u3057\u3001\u5bb6\u5177\u30b3\u30a4\u30f35,000\u3068\u300c14cm\u5358\u88c5\u7832\u300d\u53ca\u3073\u300c15.2cm\u5358\u88c5\u7832\u300d\u3092\u5404<br>\u4e8c\u3064\u305a\u3064\u6e96\u5099\u305b\u3088\uff01\u3000\u203b\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u7528\u610f\u3057\u305f\u5bb6\u5177\u30b3\u30a4\u30f3\u53ca\u3073\u5fc5\u8981\u88c5\u5099(\u4f4e\u6539\u4fee\u3092\u512a\u5148)\u306f\u6d88\u8cbb\u3057\u307e\u3059\u3002",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    100,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 653,
                "api_category": 6,
                "api_type": 5,
                "api_label_type": 7,
                "api_state": 1,
                "api_title": "\u5de5\u5ee0\u7a3c\u50cd\uff01\u6b21\u671f\u4f5c\u6226\u6e96\u5099\uff01",
                "api_detail": "\u300c14cm\u5358\u88c5\u7832\u300dx6\u5ec3\u68c4\u3001\u5bb6\u5177\u30b3\u30a4\u30f36,000\u3068\u300c35.6cm\u9023\u88c5\u7832\u300d\u300c\u4e5d\u516d\u5f0f\u8266\u6226\u300d\u5404\u4e09\u3064\u3092<br>\u6e96\u5099\u305b\u3088\uff01\u3000\u203b\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u7528\u610f\u3057\u305f\u5bb6\u5177\u30b3\u30a4\u30f3\u53ca\u3073\u5fc5\u8981\u88c5\u5099(\u4f4e\u6539\u4fee\u5024\u306e\u3082\u306e\u512a\u5148)\u306f\u6d88\u8cbb\u3057\u307e\u3059\u3002",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    0,
                    600,
                    600
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 2,
                "api_invalid_flag": 0
            },
            {
                "api_no": 664,
                "api_category": 6,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u96fb\u63a2\u6280\u8853\u306e\u5c04\u6483\u88c5\u7f6e\u3078\u306e\u6d3b\u7528",
                "api_detail": "\u5de5\u5ee0\u4efb\u52d9\uff1a\u96fb\u63a2\u6280\u8853\u306e\u5c04\u6483\u88c5\u7f6e\u3078\u306e\u6d3b\u7528\u3092\u7814\u7a76\u3059\u308b\u3002\u300c\u96fb\u63a2\u300d\u7cfb\u88c5\u5099x10\u3092\u5ec3\u68c4\u3001\u5f3e\u85ac\u53ca\u3073\u9244\u92fc\u3092\u54048,000<br>\u6e96\u5099\u305b\u3088\uff01\u203b\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u6e96\u5099\u3057\u305f\u8cc7\u6e90\u306f\u6d88\u8cbb\u3057\u307e\u3059\u3002\u300c\u52f2\u7ae0\u300d\u3068\u300c\u5175\u88c5\u8cc7\u6750\u300d\u306e\u7372\u5f97\u9078\u629e\u304c\u53ef\u80fd\u3067\u3059\u3002",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    0,
                    0,
                    300
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 672,
                "api_category": 6,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u904a\u6483\u90e8\u968a\u300d\u8266\u968a\u53f8\u4ee4\u90e8\u306e\u5275\u8a2d",
                "api_detail": "\u904a\u6483\u90e8\u968a\u4efb\u52d9\uff1a\u300c\u904a\u6483\u90e8\u968a \u8266\u968a\u53f8\u4ee4\u90e8\u300d\u3092\u5275\u8a2d\u3059\u308b\u3002\u300c\u8266\u968a\u53f8\u4ee4\u90e8\u65bd\u8a2d\u300d\u3092\u79d8\u66f8\u8266\u4e00\u756a\u30b9\u30ed\u30c3\u30c8\u306b\u642d\u8f09\u3001 <br>\u96fb\u63a2\u7cfb\u88c5\u5099x3\u3092\u5ec3\u68c4\u3001\u958b\u767a\u8cc7\u6750x10\u3001\u92fc\u6750x2,000\u3001\u305d\u3057\u3066\u300c\u6226\u95d8\u8a73\u5831\u300dx2\u3092\u6e96\u5099\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    300,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 676,
                "api_category": 6,
                "api_type": 2,
                "api_label_type": 3,
                "api_state": 1,
                "api_title": "\u88c5\u5099\u958b\u767a\u529b\u306e\u96c6\u4e2d\u6574\u5099",
                "api_detail": "\u5de5\u5ee0\u74b0\u5883\u306e\u96c6\u4e2d\u6574\u5099\u3092\u5b9f\u65bd\u3059\u308b\uff01\u300c\u4e2d\u53e3\u5f84\u4e3b\u7832\u300d\u7cfb\u88c5\u5099x3\u3001\u300c\u526f\u7832\u300d\u7cfb\u88c5\u5099x3\u3001\u300c\u30c9\u30e9\u30e0\u7f36(\u8f38\u9001\u7528)\u300dx1<br>\u3092\u5ec3\u68c4\u3001\u92fc\u67502,400\u3092\u6e96\u5099\u305b\u3088\uff01\u3000\u203b\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u6e96\u5099\u3057\u305f\u8cc7\u6e90\u306f\u6d88\u8cbb\u3057\u307e\u3059\u3002",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    200,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 677,
                "api_category": 6,
                "api_type": 2,
                "api_label_type": 3,
                "api_state": 1,
                "api_title": "\u7d99\u6226\u652f\u63f4\u80fd\u529b\u306e\u6574\u5099",
                "api_detail": "\u8266\u5a18\u306e\u7d99\u6226\u652f\u63f4\u4f53\u5236\u306e\u6574\u5099\u5f37\u5316\u3092\u5b9f\u65bd\u3059\u308b\uff01\u300c\u5927\u53e3\u5f84\u4e3b\u7832\u300d\u7cfb\u88c5\u5099x4\u3001\u300c\u6c34\u4e0a\u5075\u5bdf\u6a5f\u300d\u7cfb\u88c5\u5099x2\u3001<br>\u300c\u9b5a\u96f7\u300d\u7cfb\u88c5\u5099x3\u3092\u5ec3\u68c4\u3001\u92fc\u67503,600\u3092\u6e96\u5099\u305b\u3088\uff01\u3000\u203b\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u6e96\u5099\u3057\u305f\u8cc7\u6e90\u306f\u6d88\u8cbb\u3057\u307e\u3059\u3002",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    500,
                    0,
                    150
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 678,
                "api_category": 6,
                "api_type": 5,
                "api_label_type": 7,
                "api_state": 1,
                "api_title": "\u4e3b\u529b\u8266\u4e0a\u6226\u95d8\u6a5f\u306e\u66f4\u65b0",
                "api_detail": "\u8266\u4e0a\u6226\u95d8\u6a5f\u300c\u4e5d\u516d\u5f0f\u8266\u6226\u300dx3\u3001\u300c\u96f6\u5f0f\u8266\u622621\u578b\u300dx5\u3092\u5ec3\u68c4\u3002\u79d8\u66f8\u8266\u306e\u4e00\u756a\u53ca\u3073\u4e8c\u756a\u88c5\u5099\u30b9\u30ed\u30c3\u30c8\u306b<br>\u300c\u96f6\u5f0f\u8266\u622652\u578b\u300d\u3092\u88c5\u5099\u3002\u30dc\u30fc\u30ad\u30b5\u30a4\u30c84,000\u3092\u6e96\u5099\u305b\u3088\u3002\u203b\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u6e96\u5099\u8cc7\u6e90\u306f\u6d88\u8cbb\u3057\u307e\u3059\u3002",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    100,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 685,
                "api_category": 6,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u99c6\u9010\u8266\u4e3b\u7832\u5175\u88c5\u306e\u6226\u6642\u6539\u4fee",
                "api_detail": "\u65d7\u8266\u7279\u578b\u99c6\u9010\u8266\u306e\u7b2c\u4e00\u30b9\u30ed\u306b\u300c12.7cm\u9023\u88c5\u7832A\u578b\u6539\u4e8c\u300d\u6539\u4feemax\u3092\u88c5\u5099\u3001 \u300c10cm\u9023\u88c5\u9ad8\u89d2\u7832\u300dx4<br> \u300c94\u5f0f\u9ad8\u5c04\u88c5\u7f6e\u300dx1\u3092\u5ec3\u68c4\u3001\u958b\u767a\u8cc7\u6750x30\u3001\u92fc\u6750900\u3001\u65b0\u578b\u7832\u7195\u5175\u88c5\u8cc7\u6750x1\u3092\u6e96\u5099\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    200,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 688,
                "api_category": 6,
                "api_type": 5,
                "api_label_type": 7,
                "api_state": 1,
                "api_title": "\u822a\u7a7a\u6226\u529b\u306e\u5f37\u5316",
                "api_detail": "\u822a\u7a7a\u6226\u529b\u5f37\u5316\u4efb\u52d9\uff1a\u300c\u8266\u6226\u300d\u300c\u8266\u7206\u300d\u300c\u8266\u653b\u300d\u300c\u6c34\u5075\u300d\u3092\u54043\u88c5\u5099\u305a\u3064\u5ec3\u68c4\u3001\u3055\u3089\u306b\u719f\u7df4\u642d\u4e57\u54e1x1\u3001\u53ca\u3073<br>\u30dc\u30fc\u30ad\u30b5\u30a4\u30c81,800\u3092\u6e96\u5099\u305b\u3088\uff01(\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u719f\u7df4\u642d\u4e57\u54e1x1\u53ca\u3073\u30dc\u30fc\u30ad\u30b5\u30a4\u30c81,800\u306f\u6d88\u6ec5\u3057\u307e\u3059)",
                "api_voice_id": 0,
                "api_get_material": [
                    100,
                    100,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 1,
                "api_invalid_flag": 0
            },
            {
                "api_no": 689,
                "api_category": 6,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u6226\u95d8\u6a5f\u968a\u6226\u529b\u306e\u62e1\u5145",
                "api_detail": "\u6226\u95d8\u6a5f\u62e1\u5145\u4efb\u52d9\uff1a\u300c\u8266\u6226\u300d\u300c\u6c34\u5075\u300d\u5404x4\u3001\u300c\u8266\u5075\u300dx2\u88c5\u5099\u3092\u5ec3\u68c4\u3001\u719f\u7df4\u642d\u4e57\u54e1x1\u3001\u65b0\u578b\u822a\u7a7a\u5175\u88c5\u8cc7\u6750x1<br>\u30dc\u30fc\u30ad\u30b5\u30a4\u30c83,000\u3092\u6e96\u5099\u305b\u3088\uff01(\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u6e96\u5099\u3057\u305f\u8cc7\u6e90\u30fb\u719f\u7df4\u642d\u4e57\u54e1\u30fb\u65b0\u578b\u822a\u7a7a\u5175\u88c5\u8cc7\u6750\u306f\u6d88\u8cbb)",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    100,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 1,
                "api_invalid_flag": 0
            },
            {
                "api_no": 693,
                "api_category": 6,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u56de\u8ee2\u7ffc\u6a5f\u306e\u958b\u767a",
                "api_detail": "\u56de\u8ee2\u7ffc\u6a5f\u88c5\u5099\u306e\u7814\u7a76\u958b\u767a\u3092\u5b9f\u65bd\u3059\u308b\u3002\u300c\u6c34\u5075\u300d\u7cfb\u88c5\u5099x4\u3001\u300c\u8266\u6226\u300d\u7cfb\u88c5\u5099x3\u3001\u300c\u8266\u653b\u300d\u7cfb\u88c5\u5099x2\u3092\u5ec3\u68c4\u3001<br>\u30dc\u30fc\u30ad\u30b5\u30a4\u30c83,000\u3001\u958b\u767a\u8cc7\u6750x20\u3092\u6e96\u5099\u305b\u3088\uff01\u3000\u203b\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u6e96\u5099\u3057\u305f\u8cc7\u6e90\u30fb\u8cc7\u6750\u306f\u6d88\u8cbb\u3057\u307e\u3059\u3002",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 2,
                "api_invalid_flag": 0
            },
            {
                "api_no": 703,
                "api_category": 7,
                "api_type": 2,
                "api_label_type": 3,
                "api_state": 1,
                "api_title": "\u300c\u8fd1\u4ee3\u5316\u6539\u4fee\u300d\u3092\u9032\u3081\u3001\u6226\u5099\u3092\u6574\u3048\u3088\uff01",
                "api_detail": "\u4e00\u9031\u9593\u306e\u9593\u306b\u3001\u8fd1\u4ee3\u5316\u6539\u4fee\u3092\uff115\u56de\u6210\u529f\u3055\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    200,
                    200,
                    300,
                    100
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 1,
                "api_invalid_flag": 0
            },
            {
                "api_no": 705,
                "api_category": 7,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u822a\u7a7a\u8264\u88c5\u306e\u8fd1\u4ee3\u5316\u6539\u4fee",
                "api_detail": "\u9244\u92fc5,500\u53ca\u3073\u30dc\u30fc\u30ad\u30b5\u30a4\u30c82,500\u3092\u6e96\u5099\u3057\u3066\u3001\u4efb\u610f\u306e\u6b63\u898f\u7a7a\u6bcd\u306e\u8fd1\u4ee3\u5316\u6539\u4fee\u3092<br>[\u822a\u7a7a\u6bcd\u8266]x5\u96bb\u540c\u6642\u4f7f\u7528\u306b\u3088\u308a2\u56de\u6210\u529f\u3055\u305b\u3088\uff01\u203b\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u6e96\u5099\u3057\u305f\u8cc7\u6e90\u306f\u6d88\u8cbb\u3057\u307e\u3059\u3002",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 716,
                "api_category": 7,
                "api_type": 5,
                "api_label_type": 102,
                "api_state": 1,
                "api_title": "\u300c\u8efd\u5de1\u300d\u7d1a\u306e\u6539\u4fee\u5de5\u4e8b\u3092\u5b9f\u65bd\u305b\u3088\uff01",
                "api_detail": "\u8efd\u5de1\u8fd1\u4ee3\u5316\u6539\u4fee\uff1a\u92fc\u6750800\u53ca\u3073\u30dc\u30fc\u30ad\u30b5\u30a4\u30c8400\u3092\u6e96\u5099\u3001\u4efb\u610f\u306e\u8efd\u5de1\u7d1a\u3092\u8fd1\u4ee3\u5316\u6539\u4fee\uff01<br>[\u8efd\u5de1\u7d1a]x3\u96bb\u540c\u6642\u4f7f\u7528\u306b\u3088\u308a2\u56de\u6210\u529f\u3055\u305b\u3088\uff01\u203b\u4efb\u52d9\u9054\u6210\u5f8c\u3001\u6e96\u5099\u8cc7\u6e90\u306f\u6d88\u8cbb\u3057\u307e\u3059\u3002",
                "api_voice_id": 0,
                "api_get_material": [
                    500,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 805,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u65d7\u8266\u300c\u971e\u300d\u5317\u65b9\u6d77\u57df\u3092\u54e8\u6212\u305b\u3088\uff01",
                "api_detail": "\u65d7\u8266\u300c\u971e\u6539\u4e8c\u300d\u3067\u99c6\u9010\u82664\u96bb\u3092\u542b\u3080\u8266\u968a\u3092\u5317\u65b9\u6d77\u57df\u306b\u6295\u5165\u3057\u3001\u30e2\u30fc\u30ec\u30a4\u6d77\u54e8\u6212\u3092\u5b9f\u65bd\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    300,
                    0,
                    300,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 807,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u7b2c\u4e09\u5341\u4e00\u6226\u968a\u300d\u51fa\u6483\u305b\u3088\uff01",
                "api_detail": "\u7b2c\u4e09\u5341\u4e00\u6226\u968a(\u7b2c\u4e00\u6b21)\u3092\u93ae\u5b88\u5e9c\u8fd1\u6d77\u822a\u8def\u306b\u51fa\u6483\u3055\u305b\u3001\u540c\u822a\u8def\u306e\u5b89\u5168\u78ba\u4fdd\u306b\u52aa\u3081\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    0,
                    600,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 810,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u88fd\u6cb9\u6240\u5730\u5e2f\u3092\u9632\u885b\u305b\u3088\uff01",
                "api_detail": "\u6c34\u96f7\u6226\u968a\u3092\u88fd\u6cb9\u6240\u5730\u5e2f\u6cbf\u5cb8\u306b\u5c55\u958b\uff01\u540c\u6d77\u57df\u306b\u51fa\u6ca1\u3059\u308b\u6575\u8266\u968a\u3092\u4e09\u56de\u4ee5\u4e0a\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    400,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 818,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u93ae\u5b88\u5e9c\u8fd1\u6d77\u822a\u8def\u306e\u5b89\u5168\u78ba\u4fdd\u3092\u5f37\u5316\u305b\u3088\uff01",
                "api_detail": "\u6c34\u96f7\u6226\u968a\u3092\u542b\u3080\u65b0\u7de8\u8266\u968a\u3092\u93ae\u5b88\u5e9c\u8fd1\u6d77\u822a\u8def\u306b\u51fa\u6483\u3055\u305b\u3001\u540c\u822a\u8def\u306e\u5b89\u5168\u78ba\u4fdd\u306b\u52aa\u3081\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    900,
                    900,
                    900
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 823,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u6c34\u96f7\u6226\u968a\u3001\u5357\u897f\u9632\u885b\u7dda\u306b\u53cd\u5fa9\u51fa\u6483\u305b\u3088\uff01",
                "api_detail": "\u8efd\u5de1\u7d1a\u65d7\u8266\u3068\u99c6\u9010\u82664\u96bb\u306e\u6c34\u96f7\u6226\u968a\u3092\u57fa\u5e79\u3068\u3057\u305f\u8266\u968a\u3092\u7de8\u6210\u3001<br>\u5357\u897f\u8af8\u5cf6\u9632\u885b\u7dda\u306b\u53cd\u5fa9\u51fa\u6483\u3057\u3001\u540c\u6d77\u57df\u306e\u5236\u6d77\u6a29\u78ba\u4fdd\u306b\u52aa\u3081\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    350,
                    0,
                    350
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 824,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u88fd\u6cb9\u6240\u5730\u5e2f\u6cbf\u5cb8\u306e\u54e8\u6212\u3092\u5b9f\u65bd\u305b\u3088\uff01",
                "api_detail": "\u8efd\u7a7a\u6bcd\u65d7\u8266\u3068\u99c6\u9010\u82663\u96bb\u3092\u57fa\u5e79\u3068\u3057\u305f\u8b77\u885b\u8266\u968a\u3092\u7de8\u6210\u3001<br>\u88fd\u6cb9\u6240\u5730\u5e2f\u6cbf\u5cb8\u306b\u5c55\u958b\u3057\u3001\u540c\u6d77\u57df\u306e\u54e8\u6212\u3092\u5b9f\u65bd\u3001\u540c\u6d77\u57df\u306e\u5b89\u5168\u3092\u78ba\u4fdd\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    600,
                    0,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 831,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u6625\u306e\u6d77\u4e0a\u8b66\u5099\u884c\u52d5\uff01\u8266\u968a\u3001\u629c\u9328\u305b\u3088\uff01",
                "api_detail": "\u6625\u5b63\u7279\u5225\u4efb\u52d9\uff1a\u65d7\u8266\u306b\u8efd\u5de1\u7d1a\u30fb\u8efd\u7a7a\u6bcd\u30fb\u6c34\u4e0a\u6a5f\u6bcd\u8266\u3092\u914d\u5099\u3001\u99c6\u9010\u8266\u30fb\u6d77\u9632\u8266\u8a084\u96bb\u4ee5\u4e0a\u3092\u542b\u3080\u8266\u968a\u3092\u7de8\u6210\u3001<br>\u93ae\u5b88\u5e9c\u6b63\u9762\u6d77\u57df\u3001\u5357\u897f\u8af8\u5cf6\u6c96\u3001\u88fd\u6cb9\u6240\u5730\u5e2f\u6cbf\u5cb8\u3001\u5357\u897f\u8af8\u5cf6\u9632\u885b\u7dda\u306e\u6d77\u4e0a\u8b66\u5099\u3092\u5b9f\u65bd\u3001\u6575\u3092\u767a\u898b\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    250,
                    250,
                    0,
                    250
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 832,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u6625\uff01\u300c\u4e09\u4e00\u99c6\u300d\u65d7\u8266\u300c\u9577\u6ce2\u300d\u3001\u51fa\u6483\u305b\u3088\uff01",
                "api_detail": "\u6625\u5b63\u7279\u5225\u4efb\u52d9\uff1a\u65d7\u8266\u306b\u300c\u9577\u6ce2\u300d\u3001\u4e09\u4e00\u99c6\u300c\u9ad8\u6ce2\u300d\u300c\u6c96\u6ce2\u300d\u300c\u5cb8\u6ce2\u300d\u300c\u671d\u971c\u300d\u304b\u30893\u96bb\u4ee5\u4e0a\u3092\u542b\u3080\u7b2c1\u8266\u968a\u3067<br>\u5357\u897f\u8af8\u5cf6\u8fd1\u6d77\u3001\u30d0\u30b7\u30fc\u6d77\u5ce1\u306e\u6575\u3092\u53cd\u5fa9\u6483\u6ec5\u3001\u5357\u65b9\u306e\u30b5\u30fc\u30e2\u30f3\u6d77\u57df\u306e\u6575\u8266\u968a\u3068\u4ea4\u6226\u3001\u3053\u308c\u3092\u6483\u7834\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    310,
                    310,
                    2019,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 834,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u5357\u897f\u8af8\u5cf6\u9632\u885b\u7dda\u3092\u5897\u5f37\u305b\u3088\uff01",
                "api_detail": "\u6c34\u4e0a\u6a5f\u6bcd\u8266\u307e\u305f\u306f\u822a\u7a7a\u5de1\u6d0b\u8266\u3092\u65d7\u8266\u3068\u3059\u308b\u6709\u529b\u306a\u8266\u968a\u3092\u5357\u897f\u8af8\u5cf6\u9632\u885b\u7dda\u306b\u6295\u5165\u3001<br>\u6c34\u4e0a\u6a5f\u6226\u529b\u306b\u3088\u3063\u3066\u540c\u9632\u885b\u7dda\u3092\u5f37\u5316\u3001\u540c\u65b9\u9762\u306e\u6575\u8266\u968a\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    300,
                    300,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 839,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u6226\u8266\u6226\u968a\u3001\u51fa\u6483\u305b\u3088\uff01",
                "api_detail": "\u6226\u82662\u96bb\u3092\u4e2d\u6838\u6226\u529b\u3068\u3059\u308b\u6226\u8266\u65d7\u8266\u306e\u8266\u968a\u3092\u5317\u65b9\u6d77\u57df\u30a2\u30eb\u30d5\u30a9\u30f3\u30b7\u30fc\u30ce\u65b9\u9762\u306b\u9032\u51fa\u3055\u305b\u3001<br>\u540c\u6d77\u57df\u306e\u6575\u8266\u968a\u3092\u6483\u6ec5\u3001\u5317\u65b9\u6d77\u57df\u306e\u5236\u6d77\u6a29\u78ba\u4fdd\u306b\u52aa\u3081\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    800,
                    0,
                    200
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 842,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u4e3b\u529b\u6226\u8266\u6226\u968a\u3001\u629c\u9328\u305b\u3088\uff01",
                "api_detail": "\u6226\u8266\u307e\u305f\u306f\u822a\u7a7a\u6226\u82662\u96bb\u4ee5\u4e0a\u304b\u3089\u306a\u308b\u5f37\u529b\u306a\u6226\u8266\u6226\u968a\u3092\u4e2d\u6838\u3068\u3057\u305f\u8266\u968a\u3092\u6c96\u30ce\u5cf6\u6d77\u57df\u524d\u9762\u306b\u5c55\u958b\u3001<br>\u4fb5\u653b\u3059\u308b\u6575\u8266\u968a\u3092\u6355\u6349\u3001\u3053\u308c\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    800,
                    400,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 851,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u6539\u88c5\u822a\u7a7a\u5de1\u6d0b\u8266\u3001\u51fa\u6483\uff01",
                "api_detail": "\u6539\u88c5\u822a\u7a7a\u5de1\u6d0b\u8266\u300c\u9234\u8c37\u6539\u4e8c\u300d\u3092\u65d7\u8266\u3068\u3057\u305f\u7cbe\u5f37\u306a\u8266\u968a\u3092\u7de8\u6210\u3001\u540c\u8266\u968a\u3092\u5357\u65b9\u6d77\u57df\u306b\u5c55\u958b\u3001<br>\u5357\u65b9\u6d77\u57df\u524d\u9762\u3001\u53ca\u3073\u30b5\u30d6\u5cf6\u6c96\u6d77\u57df\u306b\u904a\u5f0b\u3059\u308b\u6575\u8266\u968a\u7fa4\u3092\u6355\u6349\u3001\u3053\u308c\u3092\u6483\u7834\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    300,
                    300,
                    300,
                    700
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 855,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u6d77\u4e0a\u8b77\u885b\u4f53\u5236\u306e\u5f37\u5316\u306b\u52aa\u3081\u3088\uff01",
                "api_detail": "\u6d77\u4e0a\u8b77\u885b\u4f5c\u6226\uff1a\u99c6\u9010\u8266\u307e\u305f\u306f\u6d77\u9632\u82663\u96bb\u4ee5\u4e0a\u3092\u542b\u3080\u8b77\u885b\u8266\u968a\u3092\u7de8\u6210\u3057\u3001\u93ae\u5b88\u5e9c\u6d77\u57df\u306e\u88fd\u6cb9\u6240\u5730\u5e2f\u6cbf\u5cb8\u3001<br>\u5357\u897f\u8af8\u5cf6\u9632\u885b\u7dda\u3001\u93ae\u5b88\u5e9c\u8fd1\u6d77\u3001\u93ae\u5b88\u5e9c\u8fd1\u6d77\u822a\u8def\u306b\u305d\u308c\u305e\u308c\u5c55\u958b\u3001\u5404\u6d77\u57df\u306b\u304a\u3051\u308b\u4f5c\u6226\u3092\u6210\u529f\u3055\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    400,
                    0,
                    0,
                    400
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 2,
                "api_invalid_flag": 0
            },
            {
                "api_no": 859,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u7cbe\u92ed\u300c\u7b2c\u56db\u822a\u7a7a\u6226\u968a\u300d\u3001\u629c\u9328\u305b\u3088\uff01",
                "api_detail": "\u7cbe\u92ed\u300c\u7b2c\u56db\u822a\u7a7a\u6226\u968a\u300d\u51fa\u6483\u4efb\u52d9\uff1a\u7cbe\u92ed\u822a\u7a7a\u6226\u8266\u3092\u4e3b\u6226\u529b\u306b\u518d\u7de8\u3055\u308c\u305f\u300c\u7b2c\u56db\u822a\u7a7a\u6226\u968a\u300d\u3001\u629c\u9328\u305b\u3088\uff01<br>\u6c96\u30ce\u5cf6\u6c96\u6226\u95d8\u54e8\u6212\u53ca\u3073\u5317\u65b9AL\u6d77\u57df\u6226\u95d8\u54e8\u6212\u3092\u5b9f\u65bd\u3001\u540c\u65b9\u9762\u306e\u6575\u8266\u968a\u4e3b\u529b\u3092\u6355\u6349\u3001\u3053\u308c\u3092\u6483\u7834\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    500,
                    0,
                    500,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 861,
                "api_category": 8,
                "api_type": 5,
                "api_label_type": 7,
                "api_state": 1,
                "api_title": "\u5f37\u884c\u8f38\u9001\u8266\u968a\u3001\u629c\u9328\uff01",
                "api_detail": "\u822a\u8def\u8b77\u885b\u4efb\u52d9\uff1a\u822a\u7a7a\u6226\u8266(\u307e\u305f\u306f\u88dc\u7d66\u8266\u3067\u3082\u53ef)2\u96bb\u3092\u4e2d\u6838\u3068\u3057\u305f\u8266\u968a\u3067\u3001\u93ae\u5b88\u5e9c\u8fd1\u6d77\u822a\u8def\u306b\u304a\u3051\u308b<br>\u8f38\u9001\u8239\u56e3\u8b77\u885b\u4f5c\u6226\u3092\u5b9f\u65bd\u3002\u540c\u8f38\u9001\u8b77\u885b\u4f5c\u6226\u30922\u56de\u6210\u529f\u3055\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    1000,
                    400,
                    400,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 869,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u88dc\u7d66\u7dda\u306e\u5b89\u5168\u3092\u78ba\u4fdd\u305b\u3088\uff01",
                "api_detail": "\u8efd\u5de1\u30af\u30e9\u30b9\u306e\u8266\u968a\u65d7\u8266\u30682\u96bb\u4ee5\u4e0a\u306e\u99c6\u9010\u8266\u307e\u305f\u306f\u6d77\u9632\u8266\u3092\u4e2d\u6838\u3068\u3057\u305f\u8b66\u6212\u8266\u968a\u3092\u7de8\u6210\u3001\u540c\u8266\u968a\u3067<br>\u93ae\u5b88\u5e9c\u6d77\u57df(\u88fd\u6cb9\u6240\u5730\u5e2f\u6cbf\u5cb8\/\u5357\u897f\u8af8\u5cf6\u9632\u885b\u7dda\/\u93ae\u5b88\u5e9c\u8fd1\u6d77)\u306e\u8b66\u6212\u3068\u88dc\u7d66\u7dda\u5b89\u5168\u78ba\u4fdd\u306b\u3042\u305f\u308c\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    300,
                    300,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 2,
                "api_invalid_flag": 0
            },
            {
                "api_no": 870,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u7b2c\u516b\u99c6\u9010\u968a\u300d\u3001\u5357\u897f\u3078\uff01",
                "api_detail": "\u7b2c\u516b\u99c6\u9010\u968a\u4efb\u52d9\uff1a\u300c\u7b2c\u516b\u99c6\u9010\u968a\u300d\u3092\u542b\u3080\u8266\u968a\u3067\u3001\u93ae\u5b88\u5e9c\u6d77\u57df\u5357\u897f\u8af8\u5cf6\u6c96\u3001\u53ca\u3073\u5357\u897f\u8af8\u5cf6\u6d77\u57df\u30d0\u30b7\u30fc\u5cf6\u6c96\u306b<br>\u5c55\u958b\uff01\u540c\u6d77\u57df\u306b\u8df3\u6881\u3059\u308b\u6575\u8266\u968a\u6226\u529b\u3092\u6355\u6349\u3001\u3053\u308c\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    250,
                    250,
                    250
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 1,
                "api_invalid_flag": 0
            },
            {
                "api_no": 873,
                "api_category": 8,
                "api_type": 5,
                "api_label_type": 7,
                "api_state": 1,
                "api_title": "\u5317\u65b9\u6d77\u57df\u8b66\u5099\u3092\u5b9f\u65bd\u305b\u3088\uff01",
                "api_detail": "\u5317\u65b9\u6d77\u57df\u8b66\u5099\u4efb\u52d9\uff1a\u5317\u65b9\u6d77\u57df\u306e\u8b66\u5099\u3092\u5b9f\u65bd\u3059\u308b\u3002\u8efd\u5de1\u30921\u96bb\u4ee5\u4e0a\u542b\u3080\u8266\u968a\u3067\u3001\u5317\u65b9\u6d77\u57df\u30e2\u30fc\u30ec\u30a4\u6d77\u3001<br>\u30ad\u30b9\u5cf6\u6c96\u3001\u30a2\u30eb\u30d5\u30a9\u30f3\u30b7\u30fc\u30ce\u65b9\u9762\u306b\u8266\u968a\u3092\u5c55\u958b\u3001\u5317\u65b9\u6d77\u57df\u65b9\u9762\u306e\u8b66\u5099\u3068\u5236\u6d77\u6a29\u78ba\u4fdd\u306b\u52aa\u3081\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    500,
                    500,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 1,
                "api_invalid_flag": 0
            },
            {
                "api_no": 876,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u677e\u8f38\u9001\u4f5c\u6226\u3001\u958b\u59cb\u305b\u3088\uff01",
                "api_detail": "\u9632\u885b\u30e9\u30a4\u30f3\u306e\u5f37\u5316\u306e\u305f\u3081\u3001\u8266\u968a\u65d7\u8266\u300c\u9f8d\u7530\u6539\u4e8c\u300d\u307e\u305f\u306f\u300c\u9f8d\u7530\u6539\u300d\u30013\u96bb\u4ee5\u4e0a\u306e\u99c6\u9010\u8266\u307e\u305f\u306f\u6d77\u9632\u8266\u3092<br>\u542b\u3080\u8f38\u9001\u8b77\u885b\u8266\u968a\u3092\u7de8\u6210\u3001\u5357\u897f\u8af8\u5cf6\u9632\u885b\u7dda\u53ca\u3073\u93ae\u5b88\u5e9c\u8fd1\u6d77\u822a\u8def\u306b\u304a\u3051\u308b\u4f5c\u6226\u3092\u8907\u6570\u56de\u6210\u529f\u3055\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    200,
                    200,
                    200,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 879,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u65b0\u7de8\u300c\u56db\u822a\u6226\u300d\u3001\u5168\u529b\u51fa\u6483\uff01",
                "api_detail": "\u822a\u7a7a\u6226\u8266\u300c\u4f0a\u52e2\u6539\u300d\u300c\u65e5\u5411\u6539\u300d\u53ca\u3073\u8efd\u5de1\u300c\u5927\u6dc0\u6539\u300d\u30681\u96bb\u4ee5\u4e0a\u306e\u99c6\u9010\u8266\u3092\u542b\u3080\u65b0\u7de8\u7b2c\u56db\u822a\u7a7a\u6226\u968a\u3092\u7de8\u6210\u3001<br>\u93ae\u5b88\u5e9c\u8fd1\u6d77\u822a\u8def\u3001\u6c96\u30ce\u5cf6\u6c96\u53ca\u3073\u5317\u65b9AL\u6d77\u57df\u6226\u95d8\u54e8\u6212\u3001\u30ab\u30ec\u30fc\u6d0b\u30ea\u30e9\u30f3\u30ab\u5cf6\u6c96\u306e\u4f5c\u6226\u306b\u6295\u5165\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    400,
                    400,
                    400,
                    400
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 880,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u7cbe\u92ed\u99c6\u9010\u968a\u3001\u7345\u5b50\u596e\u8fc5\uff01",
                "api_detail": "\u5341\u5206\u306a\u88c5\u5099\u3068\u7df4\u5ea6\u3092\u8a87\u308b\u99c6\u9010\u82664\u96bb\u304b\u3089\u306a\u308b\u7cbe\u92ed\u99c6\u9010\u968a\u3092\u542b\u3080\u8266\u968a\u3092\u7de8\u6210\u3002\u93ae\u5b88\u5e9c\u8fd1\u6d77\u822a\u8def\u3001<br>\u6771\u90e8\u30aa\u30ea\u30e7\u30fc\u30eb\u6d77\u3001\u5317\u65b9\u30ad\u30b9\u5cf6\u6c96\u3001\u897f\u65b9\u30ab\u30ec\u30fc\u6d0b\u306b\u6295\u5165\u3001\u5404\u6226\u7dda\u306e\u4f5c\u6226\u5c55\u958b\u3092\u6210\u529f\u3055\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    480,
                    480,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 890,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u7cbe\u92ed\u300c\u56db\u6226\u968a\u300d\u7b2c\u4e8c\u5c0f\u968a\u3001\u629c\u9328\u305b\u3088\uff01",
                "api_detail": "\u300c\u6469\u8036\u6539\u4e8c\u300d\u53ca\u3073\u300c\u9ce5\u6d77\u6539\u4e8c\u300d\u304b\u3089\u6210\u308b\u7cbe\u92ed\u300c\u7b2c\u56db\u6226\u968a\u300d\u7b2c\u4e8c\u5c0f\u968a\u3092\u542b\u3080\u6709\u529b\u306a\u8266\u968a\u3092\u7de8\u6210\u3001\u5357\u897f<br>\u8af8\u5cf6\u9632\u885b\u7dda\u3001\u6771\u90e8\u30aa\u30ea\u30e7\u30fc\u30eb\u6d77\u3001\u30a2\u30eb\u30d5\u30a9\u30f3\u30b7\u30fc\u30ce\u65b9\u9762\u3001\u30ab\u30ec\u30fc\u6d0b\u30ea\u30e9\u30f3\u30ab\u5cf6\u6c96\u306b\u51fa\u6483\u3001\u6575\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    400,
                    400,
                    0,
                    400
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 893,
                "api_category": 8,
                "api_type": 5,
                "api_label_type": 7,
                "api_state": 1,
                "api_title": "\u6cca\u5730\u5468\u8fba\u6d77\u57df\u306e\u5b89\u5168\u78ba\u4fdd\u3092\u5fb9\u5e95\u305b\u3088\uff01",
                "api_detail": "\u6cca\u5730\u8fd1\u6d77\u8b66\u6212\u6226\u679c\u62e1\u5f35\uff1a\u6709\u529b\u306a\u6cca\u5730\u54e8\u6212\u90e8\u968a\u3092\u7de8\u6210\u3001\u93ae\u5b88\u5e9c\u8fd1\u6d77\u3001\u30d6\u30eb\u30cd\u30a4\u6cca\u5730\u6c96\u3001\u30bf\u30a6\u30a4\u30bf\u30a6\u30a4\u6cca\u5730\u6c96<br>\u306b\u53cd\u5fa9\u51fa\u6483\uff01\u5404\u5468\u8fba\u6d77\u57df\u306b\u51fa\u6ca1\u3059\u308b\u6575\u6f5c\u3092\u5236\u5727\u3001\u3055\u3089\u306b\u6cca\u5730\u5468\u8fba\u306e\u8105\u5a01\u3068\u306a\u308b\u6575\u6226\u529b\u3092\u6355\u6349\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    2000,
                    500,
                    0,
                    500
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 894,
                "api_category": 8,
                "api_type": 5,
                "api_label_type": 7,
                "api_state": 1,
                "api_title": "\u7a7a\u6bcd\u6226\u529b\u306e\u6295\u5165\u306b\u3088\u308b\u5175\u7ad9\u7dda\u6226\u95d8\u54e8\u6212",
                "api_detail": "\u7a7a\u6bcd\u3092\u542b\u3080\u6709\u529b\u306a\u54e8\u6212\u8266\u968a\u3092\u7de8\u6210\u3001\u88fd\u6cb9\u6240\u5730\u5e2f\u6cbf\u5cb8\u3001\u5357\u897f\u8af8\u5cf6\u9632\u885b\u7dda\u3001\u5357\u897f\u8af8\u5cf6\u8fd1\u6d77\u3001\u30d0\u30b7\u30fc\u6d77\u5ce1<br>\u53ca\u3073\u6771\u90e8\u30aa\u30ea\u30e7\u30fc\u30eb\u6d77\u3092\u6226\u95d8\u54e8\u6212\u3001\u5404\u6d77\u57df\u306e\u6575\u8266\u968a\u3092\u6355\u6349\u6483\u6ec5\u3001\u5404\u6d77\u57df\u5175\u7ad9\u7dda\u306e\u5b89\u5168\u3092\u78ba\u4fdd\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    600,
                    0,
                    600,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 2,
                "api_invalid_flag": 0
            },
            {
                "api_no": 896,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u822a\u7a7a\u6226\u8266\u6226\u968a\u3001\u6226\u95d8\u54e8\u6212\uff01",
                "api_detail": "\u822a\u7a7a\u6226\u8266\u4e8c\u96bb\u3092\u4e2d\u6838\u3068\u3059\u308b\u8266\u968a\u3092\u7de8\u6210\u3001\u540c\u8266\u968a\u3067\u5357\u897f\u8af8\u5cf6\u9632\u885b\u7dda\u3001\u93ae\u5b88\u5e9c\u8fd1\u6d77\u53ca\u3073\u6771\u90e8\u30aa\u30ea\u30e7\u30fc\u30eb\u6d77\u3001<br>\u30bf\u30a6\u30a4\u30bf\u30a6\u30a4\u6cca\u5730\u6c96\u306b\u5c55\u958b\u3002\u540c\u6d77\u57df\u306e\u8105\u5a01\u3068\u306a\u308b\u6575\u8266\u968a\u4e3b\u529b\u3092\u6355\u6349\u3001\u3053\u308c\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    600,
                    600,
                    0,
                    600
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 898,
                "api_category": 8,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u5317\u306e\u6d77\u304b\u3089\u611b\u3092\u3053\u3081\u3066",
                "api_detail": "\u4efb\u610f\u306e\u8266\u968a\u3067\u3001\u5317\u65b9\u6d77\u57df\u30e2\u30fc\u30ec\u30a4\u6d77\u3001\u30ad\u30b9\u5cf6\u6c96\u3001\u30a2\u30eb\u30d5\u30a9\u30f3\u30b7\u30fc\u30ce\u65b9\u9762\u3001\u5317\u65b9\u6d77\u57df\u5168\u57df\u3001<br>\u5317\u65b9AL\u6d77\u57df\u306b\u304a\u3044\u3066\u6575\u8266\u968a\u3068\u4ea4\u6226\u3001\u3053\u308c\u3089\u3092\u6483\u7834\u3001\u5317\u65b9\u306e\u6d77\u306e\u5236\u6d77\u6a29\u3092\u78ba\u4fdd\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    1200,
                    0,
                    1200
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 901,
                "api_category": 9,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u300c\u5915\u5f35\u6539\u4e8c\u300d\u8a66\u3057\u3066\u307f\u3066\u3082\u3044\u3044\u304b\u3057\u3089\uff1f",
                "api_detail": "\u6539\u88c5\u5175\u88c5\u5b9f\u9a13\u8efd\u5de1\u300c\u5915\u5f35\u6539\u4e8c\u300d\u578b\u3092\u65d7\u8266\u306b\u3057\u305f\u8266\u968a\u3067\u3001\u5357\u897f\u8af8\u5cf6\u6c96\u30ce\u5cf6\u6c96\u3001\u5317\u65b9\u30a2\u30eb\u30d5\u30a9\u30f3\u30b7\u30fc\u30ce\u65b9\u9762\u3001<br>\u5357\u65b9\u30b5\u30d6\u5cf6\u6c96\u6d77\u57df\u3001\u4e2d\u90e8\u30b0\u30a2\u30ce\u74b0\u7901\u6c96\u6d77\u57df\u306b\u5c55\u958b\uff01\u540c\u6226\u57df\u306e\u6575\u8266\u968a\u4e3b\u529b\u3092\u635c\u7d22\u3001\u3053\u308c\u3092\u6355\u6349\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    3000,
                    0,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 905,
                "api_category": 9,
                "api_type": 5,
                "api_label_type": 102,
                "api_state": 1,
                "api_title": "\u300c\u6d77\u9632\u8266\u300d\u3001\u6d77\u3092\u8b77\u308b\uff01",
                "api_detail": "\u6d77\u9632\u82663\u96bb\u3092\u542b\u30805\u96bb\u4ee5\u4e0b\u306e\u6d77\u4e0a\u8b77\u885b\u968a\u3092\u3001\u93ae\u5b88\u5e9c\u6d77\u57df\u306b\u5c55\u958b\u3002\u93ae\u5b88\u5e9c\u6b63\u9762\u6d77\u57df\u3001\u5357\u897f\u8af8\u5cf6\u6c96\u6d77\u57df\u3001\u88fd\u6cb9\u6240<br>\u5730\u5e2f\u6cbf\u5cb8\u3001\u93ae\u5b88\u5e9c\u8fd1\u6d77\u3001\u93ae\u5b88\u5e9c\u8fd1\u6d77\u822a\u8def\u306e\u5404\u6d77\u57df\u306e\u5b89\u5168\u78ba\u4fdd\u3068\u5bfe\u6f5c\u6383\u8569\u3092\u56f3\u308c\uff01\u6d77\u9632\u8266\u6226\u968a\u3001\u629c\u9328\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    1200,
                    600,
                    600,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 912,
                "api_category": 9,
                "api_type": 5,
                "api_label_type": 103,
                "api_state": 1,
                "api_title": "\u5de5\u4f5c\u8266\u300c\u660e\u77f3\u300d\u8b77\u885b\u4efb\u52d9",
                "api_detail": "\u5de5\u4f5c\u8266\u8b77\u885b\u4efb\u52d9\uff1a\u65d7\u8266\u306b\u5de5\u4f5c\u8266\u300c\u660e\u77f3\u300d\u3001\u8b77\u885b\u306e\u99c6\u9010\u82663\u96bb\u4ee5\u4e0a\u3067\u88fd\u6cb9\u6240\u5730\u5e2f\u6cbf\u5cb8\u3001\u93ae\u5b88\u5e9c\u8fd1\u6d77\u822a\u8def\u3001<br>\u5357\u897f\u8af8\u5cf6\u8fd1\u6d77\u3001\u30d0\u30b7\u30fc\u6d77\u5ce1\u3001\u6771\u90e8\u30aa\u30ea\u30e7\u30fc\u30eb\u6d77\u306b\u5c55\u958b\u3002\u300c\u660e\u77f3\u300d\u3092\u8b77\u885b\u3001\u540c\u6d77\u57df\u3067\u306e\u4f5c\u6226\u3092\u6210\u529f\u3055\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    600,
                    0,
                    600,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 919,
                "api_category": 9,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u5357\u897f\u8af8\u5cf6\u6d77\u57df\u5408\u540c\u54e8\u6212",
                "api_detail": "\u7c73\u51fa\u8eab(USS)\u8266\u5a18\u30922\u96bb\u4ee5\u4e0a\u542b\u3080\u8266\u968a\u3067\u3001\u5357\u897f\u8af8\u5cf6\u6d77\u57df\u306e\u30d0\u30b7\u30fc\u6d77\u5ce1\u3001\u6771\u90e8\u30aa\u30ea\u30e7\u30fc\u30eb\u6d77\u3001<br>\u6c96\u30ce\u5cf6\u6d77\u57df\u306e\u54e8\u6212\u3092\u5b9f\u65bd\u3002\u5404\u4f5c\u6226\u6d77\u57df\u306b\u304a\u3051\u308b\u6575\u8266\u968a\u3092\u635c\u7d22\u3001\u3053\u308c\u3092\u6355\u6349\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    400,
                    400,
                    0,
                    400
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 924,
                "api_category": 9,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u3010\u822a\u7a7a\u6bcd\u8266\u7279\u5225\u4efb\u52d9\u3011\u822a\u7a7a\u6226\u968a\u3001\u7cbe\u92ed\u7121\u6bd4\uff01",
                "api_detail": "\u822a\u7a7a\u6bcd\u8266\u7279\u5225\u4efb\u52d9\uff1a\u7cbe\u5f37\u306a\u6b63\u898f\u7a7a\u6bcd2\u96bb\u4ee5\u4e0a\u3092\u64c1\u3059\u308b\u822a\u7a7a\u6226\u968a\u3092\u4e2d\u6838\u3068\u3057\u305f\u6a5f\u52d5\u90e8\u968a\u306e\u7cbe\u92ed\u3067\u3001<br>\u5357\u897f\u8af8\u5cf6\u6d77\u57df\u6c96\u30ce\u5cf6\u6d77\u57df\u3001\u540c\u6c96\u30ce\u5cf6\u6c96\u3001\u897f\u65b9\u6d77\u57df\u30ea\u30e9\u30f3\u30ab\u5cf6\u306b\u51fa\u6483\uff01\u5404\u65b9\u9762\u306e\u6575\u6226\u529b\u3092\u6483\u6ec5\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    0,
                    880,
                    880
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 927,
                "api_category": 9,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u91cd\u5de1\u300c\u7fbd\u9ed2\u300d\u3001\u51fa\u6483\uff01\u30da\u30ca\u30f3\u6c96\u6d77\u6226",
                "api_detail": "\u91cd\u5de1\u300c\u7fbd\u9ed2\u300d\u3092\u65d7\u8266\u3068\u3057\u305f5\u96bb\u4ee5\u4e0b\u306e\u8266\u968a\u3067\u3001\u5357\u897f\u6d77\u57df\u30de\u30e9\u30c3\u30ab\u6d77\u5ce1\u306b\u9032\u51fa\uff01\u30da\u30ca\u30f3\u5cf6\u6c96\u306b\u304a\u3044\u3066\u3001<br>\u6575\u99c6\u9010\u968a\u3092\u6355\u6349\u3001\u3053\u308c\u306b\u8907\u6570\u56de\u75db\u6253\u3092\u4e0e\u3048\u3088\uff01\u7cbe\u5f37\u305f\u308b\u6211\u304c\u91cd\u5de1\u300c\u7fbd\u9ed2\u300d\u3001\u51fa\u6483\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    0,
                    2020,
                    1945,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            },
            {
                "api_no": 929,
                "api_category": 9,
                "api_type": 4,
                "api_label_type": 1,
                "api_state": 1,
                "api_title": "\u9759\u304b\u306a\u6d77\u3092\u8b77\u308b\u300c\u9be8\u300d\u3001\u52d5\u304d\u51fa\u3059\uff01",
                "api_detail": "\u6f5c\u6c34\u6bcd\u8266\u300c\u5927\u9be8\u300d\u307e\u305f\u306f\u300c\u8fc5\u9be8\u300d\u578b\u3092\u65d7\u8266\u3068\u3057\u3066\u3001\u6f5c\u6c34\u8266\/\u6f5c\u6c34\u7a7a\u6bcd2\u96bb\u4ee5\u4e0a\u306e\u7b2c\u4e00\u8266\u968a\u3092\u7de8\u6210\uff01\u540c\u8266\u968a\u3067<br>\u5357\u897f\u8af8\u5cf6\u6c96\u3001\u88fd\u6cb9\u6240\u5730\u5e2f\u6cbf\u5cb8\u3001\u5357\u897f\u8af8\u5cf6\u8fd1\u6d77\u3001\u6771\u90e8\u30aa\u30ea\u30e7\u30fc\u30eb\u6d77\u3092\u54e8\u6212\uff01\u5404\u6d77\u57df\u306e\u5236\u6d77\u6a29\u3092\u4fdd\u6301\u305b\u3088\uff01",
                "api_voice_id": 0,
                "api_get_material": [
                    513,
                    513,
                    513,
                    0
                ],
                "api_bonus_flag": 1,
                "api_progress_flag": 0,
                "api_invalid_flag": 0
            }
        ],
        "api_exec_count": 1,
        "api_exec_type": 2400322
    }
}