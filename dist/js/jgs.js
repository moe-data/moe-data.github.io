function replaceBy(selector, c, old, replace) {
  var dropdown
  if (selector == "class") {
    dropdown = document.getElementsByClassName(c)
  } else {
    if (selector == "tag") {
      dropdown = document.getElementsByTagName(c)
    }
  }
  for (let i = 0, l = dropdown.length; i < l; i++) {
    dropdown[i].innerHTML = dropdown[i].innerHTML.replace(old, replace)
  }
}
const w = console.warn
const x = console.error
const z = console.info
const inNode = typeof window === 'undefined' || typeof document === 'undefined'
if (!inNode && typeof jQuery == "undefined") {
  w("JQuery load failed")
  document.write(unescape("%3Cscript src='./dist/js/cdn/jquery.min.js' type='text/javascript'%3E%3C/script%3E"))
}
function isvalid(e) {
  return e ? (isNaN(e) ? !!e.length : true) : false
}
function ifnull(notnul, ifnul) {
  if (typeof notnul === "undefined") {
    return ifnul
  } else {
    return notnul
  }
}
function insert_spacing(str) {
  var p1 = /([A-Za-z_])([\u4e00-\u9fa5]+)/gi
  var p2 = /([\u4e00-\u9fa5]+)([A-Za-z_])/gi
  return str.replace(p1, "$1 $2").replace(p2, "$1 $2")
}
function insertbr(str) {
  var p1 = new RegExp(/([\u4e00-\u9fa5])([\u4e00-\u9fa5])/gi)
  var p2 = /([\u4e00-\u9fa5]+)([A-Za-z_])/gi
  var p3 = /([A-Za-z_]+) ([A-Za-z_])/gi
  return str.replace(p1, "$1<br>$2").replace(p2, "$1<br>$2").replace(p3, "$1<br>$2")
}
var selectAlli = 0
// 全选 handlers (only install when in browser and jQuery is available)
if (!inNode && typeof $ !== 'undefined') {
  $("#selectAll").on("click", function () {
    if (selectAlli == 0) {
      //把所有复选框选中
      $(".show span :checkbox").prop("checked", true)
      selectAlli = 1
    } else {
      $(".show span :checkbox").prop("checked", false)
      selectAlli = 0
    }
  })
  $("#ReverseSelect").on("click", function () {
    //反选
    $("#show span :checkbox").each(function () {
      //遍历所有复选框，然后取值进行 !非操作
      $(this).prop("checked", !$(this).prop("checked"))
    })
  })
}
function js(url) {
  var script = document.createElement("script")
  script.type = "text/javascript"
  script.src = url
  // document.body.appendChild(script)
  var jsbody = document.getElementById("js") || document.body || document.documentElement
  if (jsbody && jsbody.appendChild) {
    jsbody.appendChild(script)
  }
}

function GetRequest(a, b) {
  char = ""
  var url = location.search //获取url中"?"符后的字串
  var theRequest = new Object()
  if (url.indexOf("?") != -1) {
    var str = url.substr(1)
    strs = str.split("&")
    for (var i = 0; i < strs.length; i++) {
      // theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      if (a == strs[i].split("=")[0]) {
        char = unescape(strs[i].split("=")[1])
      }
    }
  }
  if (b == 1) {
    char = char.split(",")
    arrsplice(char, "")
  } else {
    if (!isNaN(char)) {
      char = Number(char)
    }
  }
  return char
}

function if1eq() {
  return "if *(w*[?'?[0-9a-zA-Z_]*'?]?=[^=]"
}
function arrsplice(arr, b) {
  var index = arr.indexOf(b)
  if (index >= 0) {
    arr.splice(index, 1)
  }
  return arr
}
function find(arr, key) {
  const l = key.length
  const idxMap = new Map()
  // 具体小细节边界判断都忽略，实现功能为主
  for (let i = 0; i < arr.length; i++) {
    v = arr.substr(i, l)
    idxMap.set(v, i)
  }
  return idxMap.has(key) ? idxMap.get(key) : -1
}

function jsonstr(a) {
  return JSON.stringify(a).replace("[", "").replace("]", "").replace(/"/g, "")
}
function sortNumber(a, b) {
  return a - b
}

/**
 * 半角特殊字符替换为全角字符
 * @param {string} str - 待处理的原始字符串
 * @returns {string} 替换后的全角字符串
 */
function convertHalfToFullWidth(str) {
  // 先判断传入的是否是字符串，避免非字符串参数报错
  if (typeof str !== "string") {
    console.warn("传入参数不是字符串类型，请传入有效字符串")
    return str || ""
  }

  // 方案1：分步替换（清晰易懂，适合新手，便于单独调整某个字符）
  let result = str
    .replace(/&/g, "＆") // 半角& 替换为 全角＆
    .replace(/\?/g, "？") // 半角? 替换为 全角？
    .replace(/!/g, "！") // 半角! 替换为 全角！
    .replace(/#/g, "＃") // 半角# 替换为 全角＃
    .replace(/\$/g, "＄") // 半角$ 替换为 全角＄
    .replace(/%/g, "％") // 半角% 替换为 全角％
  return result
}

// --- Shared helpers (canonical implementations) ---
function isResource(e) {
  return ['i', 'fuel', 'ammo', 'steel', 'bauxite', '資材', 'secretary', 'denominator'].indexOf(e) > -1
}

function group2By(array, i, s) {
  var groups = {}
  array.forEach(function (o) {
    var group = JSON.stringify(o[i] + o[s])
    groups[group] = groups[group] || []
    groups[group].push(o)
  })
  var arr = []
  for (var key in groups) {
    arr.push(groups[key])
  }
  return arr
}

function filt(groups, output) {
  var array = []
  groups.forEach(function (element) {
    var f = true
    for (var k = 0; k < output.length; k++) {
      var oe = output[k]
      var ff = false
      for (var j = 0; j < element.length; j++) {
        if (element[j]['o'] == oe) {
          ff = true
          break
        }
      }
      if (!ff) {
        f = false
        break
      }
    }
    if (f && element[0]['s'] != 0) {
      array.push(element)
    }
  })
  return array
}

// formatshipId: in Node we provide a simple identity implementation for tests/builds.
// In the browser we must NOT define `formatshipId` so that `dist/js/share.js`
// can provide the proper ship-name lookup using `csjson`.
var formatshipId
if (inNode) {
  // Attempt to load ship/item parsed data when running in Node so name lookups work
  try {
    const fs = require('fs')
    const path = require('path')
    if (typeof slotitem === 'undefined' || !slotitem) {
      try {
        slotitem = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'parsed', 'api_mst_slotitem.json'), 'utf8'))
      } catch (e) {
        // ignore
      }
    }
    if (typeof csjson === 'undefined' || !csjson) {
      try {
        csjson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'parsed', 'ship.json'), 'utf8'))
      } catch (e) {
        // ignore
      }
    }
  } catch (e) {
    // ignore
  }

  formatshipId = function () {
    const val = arguments[0]
    try {
      if (typeof csjson !== 'undefined' && csjson && csjson.length) {
        for (let i = 0; i < csjson.length; i++) {
          if (csjson[i]['id'] == val || csjson[i]['api_id'] == val || csjson[i]['apiId'] == val) {
            return csjson[i]['name'] || csjson[i]['api_name'] || String(val)
          }
        }
      }
    } catch (e) {
      // ignore
    }
    if (arguments.length === 1) return val
    return val
  }
}

function formatOnlyname(value) {
  var str = value
  try {
    if (value == -1) return typeof fail !== 'undefined' ? fail : 'fail'
    // Prefer in-memory `slotitem` if available, otherwise (Node) try to load parsed JSON
    var items = null
    if (typeof slotitem !== 'undefined' && slotitem && slotitem.length) {
      items = slotitem
    } else if (inNode) {
      try {
        const fs = require('fs')
        const path = require('path')
        items = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'parsed', 'api_mst_slotitem.json'), 'utf8'))
      } catch (e) {
        items = null
      }
    }
    if (items && items.length) {
      const idKeys = [(typeof api_ !== 'undefined' ? api_ : '') + 'id', 'api_id', 'id']
      const nameKeys = [(typeof api_ !== 'undefined' ? api_ : '') + 'name', 'api_name', 'name']
      for (var nitem = 0; nitem < items.length; nitem++) {
        for (var ik = 0; ik < idKeys.length; ik++) {
          var idKey = idKeys[ik]
          if (items[nitem][idKey] == value) {
            for (var nk = 0; nk < nameKeys.length; nk++) {
              var nameKey = nameKeys[nk]
              if (items[nitem][nameKey]) {
                str = items[nitem][nameKey]
                if (typeof bra === 'function') return bra(str, 1)
                return str
              }
            }
          }
        }
      }
    }
  } catch (e) {
    // ignore
  }
  if (typeof bra === 'function') return bra(str, 1)
  return str
}

function egnrl(item) {
  if (item == 0) {
    if (typeof x === 'function') x('dev res 0')
    return
  }
  if (typeof resourceTitle === 'undefined') resourceTitle = {}
  resourceTitle['n' + item] = 0
  try {
    resourceTitle[formatOnlyname(item)] = 0
  } catch (e) {
    resourceTitle['' + item] = 0
  }
  if (typeof minlv !== 'undefined' && minlv) {
    resourceTitle['l' + item] = 0
  }
}

// Export helpers for Node (module) usage if available
if (typeof module !== 'undefined' && module.exports) {
  module.exports = module.exports || {}
  module.exports.jsonstr = jsonstr
  module.exports.isResource = isResource
  module.exports.group2By = group2By
  module.exports.filt = filt
  module.exports.egnrl = egnrl
  module.exports.formatOnlyname = formatOnlyname
  module.exports.formatshipId = formatshipId
}
