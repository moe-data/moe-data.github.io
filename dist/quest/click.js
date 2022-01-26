that.setData({
  current: app.get('current')
})
let jsindex = 0
let bar = 0
let ranget = ['slotitem', 'useitem', 'furniture', 'cstype', 'mapinfo']
var mapinfo
for (let i = 0; i < ranget.length; i++) {
  $.getJSON("./parsed/" + (i == 3 ? "" : "api_mst_") + ranget[i] + ".json").done(function (result) {
    eval(ranget[i] + " = result")
    jsonover();
  });
}
function jsonover() {
  jsindex++;
  progress(1 / (ranget.length) * 100);
  if (jsindex >= ranget.length) {
    slotitem.forEach(function (e) {
      if (developable.indexOf(e.api_id) > -1) {
        devable.push(e.api_name)
      } else {
        undevable.push(e.api_name)
      }
      cated.push(e.api_name)
    })
    useitem.forEach(function (e) {
      use.push(e.api_name)
      cated.push(e.api_name)
    })
    cstype.forEach(function (e) {
      ship.push(e.name)
      cated.push(e.name)
    })
    furniture.forEach(function (e) {
      fntr.push(e.api_title)
      cated.push(e.api_title)
    })
    initChart()
    loadlist()
  }
}

function progress(p) {
  bar += p;
  $('.progress-bar').css("width", bar + '%');
};
function graystyle() {
  z(switches.fs)
  for (i = 0; i < 4; i++) {
    eval("$('.fs" + i + "')." + (switches.fs[i] ? "remove" : "add") + "Class('gray')")
  }
}
function showinput() {
  $('#input').css('display', 'flex')
}
function loadquest() {
  result = ($('#input').val())
  var start = find(result, 'svdata=') + 7;
  let api_list = JSON.parse(result.substring(start)).api_data.api_list
  z(api_list.length)
  let newload = app.newload
  api_list.forEach(function (e) {
    let id = e.api_no.toString()
    if (app.wkid[id] == null) {
      let groups = []
      ship.forEach(function (sh) {
        if (e.api_detail.indexOf(sh) > -1) {
          groups.push(sh)
        }
      });
      let maps = []
      mapinfo.forEach(function (map) {
        if (e.api_detail.indexOf(map.api_name) > -1 || e.api_detail.indexOf(map.api_opetext) > -1) {
          maps.push(map.api_maparea_id + '-' + map.api_no)
        }
      });
      let requirements = {
        category: "simple",
      }
      if (maps.length) {
        requirements = {
          category: "sortie",
          times: 1,
          map: maps,
          groups: [{
            ship: groups
          }]
        }
      }
      z(e.api_detail, groups, maps)
      newload[id] = {
        newflag: 1,
        game_id: id,
        wiki_id: id,
        category: e.api_category,
        type: e.api_type,
        name: e.api_title,
        detail: e.api_detail,
        reward_fuel: e.api_get_material[0],
        reward_ammo: e.api_get_material[1],
        reward_steel: e.api_get_material[2],
        reward_bauxite: e.api_get_material[3],
        reward_other: e.api_bonus_flag,
        prerequisite: [],
        requirements: requirements
      }
    } else { }
    app.setstat(app.wkid[id] || id, e.api_state)

  });
  app.set('newload', newload)
}


$('#rewaguess').change(function () {
  rewa.tapguess($('#rewaguess').val())
});

$('#battguess').change(function () {
  batt.tapguess($('#battguess').val())
});