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
var tickmarks=""
for(let i=0;i<51;i++){
    tickmarks+='<option value="'+i+'" label="'+i+'"></option>'
}
$('#tickmarks').html(tickmarks)

const UI3="https://imgs.aixifan.com/FsqKbFRZZTqeQQoifufgyRY0LkW9"
$('.UI3').attr("src", UI3)
$('.topbar').css("background", "url("+UI3+")")