

initChart()
loadlist()
// graystyle()
// $("#nav").load("nav.html");
// $("#foot").load("../foot.html");
that.setData({
  current:app.get('current')
})
function graystyle(){
  z(switches.fs)
  for(i=0;i<4;i++){
    eval("$('.fs"+i+"')."+ (switches.fs[i]?"remove":"add")+"Class('gray')")
  }
}
function showinput() {
  $('#input').css('display', 'flex')
}
function loadquest() {
  result=($('#input').val())
  var start = find(result,'svdata=')+7;
  let api_list=JSON.parse(result.substring(start)).api_data.api_list
  z(api_list.length)
  let newload=app.newload
  api_list.forEach(function(e) {
    if(app.wkid[e.api_no.toString()]==null){
      newload.push({
        game_id: e.api_no,
        wiki_id: e.api_no,
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
        requirements: {
          category: "fleet",
          groups: [{
            ship: "艦",
            amount: 2
          }]
        }
      })
    }else{}
      app.setstat(app.wkid[e.api_no.toString()]||e.api_no.toString(),e.api_state)
    
  });
  app.set('newload',newload)
}


$('#rewaguess').change(function(){
  z($('#rewaguess').val())});