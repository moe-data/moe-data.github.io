function func() { }
const wx = {
    clearStorage: function () {
        localStorage.clear()
        z(localStorage.getItem('history'))
    },
    getStorageSync: function (key) {
        let value = localStorage.getItem(key)
        try {
            return JSON.parse(value)
        } catch (error) {
            x(error)
            return value
        }
    },
    setStorageSync: function (key, value) {
        // $.cookie(key,JSON.stringify(value), { expires: 999, path: '/' })
        localStorage.setItem(key, JSON.stringify(value))
        // z(value)
        // z(JSON.stringify(value))
        // z(localStorage.getItem(key))
    }
}

const width = Width() - 60 + "px;"// container.scrollWidth*1.34;
const height = document.documentElement.clientHeight - 5
let containerstyle = "height: " + height + "px;max-width:" + width
// $('#container').css('width',width*2)
$('#container').attr("style", containerstyle)
$('.rewa_dl').css("max-height", height - 180 + "px")
$('.batl_dl').css("max-height", height - 230 + "px")
var chart = echarts.init(document.getElementById('container'));
var tickmarks = ""
for (let i = 0; i < 51; i++) {
    tickmarks += '<option value="' + i + '" label="' + i + '"></option>'
}
$('#tickmarks').html(tickmarks)

const UI1 = "https://imgs.aixifan.com/FvLfnDzonSGgGOa4jGRTLr2S6CO2"
const UI2 = "https://imgs.aixifan.com/Fqqs-w0UfARqZCcd0uVsrIDL1TWb"
const UI3 = "https://imgs.aixifan.com/FsqKbFRZZTqeQQoifufgyRY0LkW9"
$('.UI1').attr("src", UI1)
$('.UI2').attr("src", UI2)
$('.UI3').attr("src", UI3)
$('.topbar').css("background", "url(" + UI3 + ")")
homepos(853, 447)
function homepos(x, y) {
    $('.home').css("left", 124 - x + "px")
    $('.home').css("top", 124 - y + "px")
    $('.home').css("transform-origin", x + "px " + y + "px")
    $('.home').css("transform-origin", x + "px " + y + "px")
    $('.home').css("clip-path", "circle(98px at " + x + "px " + y + "px)")
}


$(function(){
    //读取cookie
    var res=app.get('guide');
    z(res)
    //如果没有cookie,执行以下动作
    if(res!="guide"){
    $('#mask,#searchTip,#searchTip div:eq(0)').show();
    $('#searchTip div a').click(function(){
        var current=$(this).parent();
        current.hide();
        current.next().show();
    })

    $('#searchTip div span,#searchTip div a:last').click(function(){
        $('#mask,#searchTip').hide();
    })

    //添加cookie
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+30);
    app.set('guide','guide')
    }
})
