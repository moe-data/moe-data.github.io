function func(){}
const wx={
    clearStorage: function(){
        localStorage.clear()
        z(localStorage.getItem('history'))
    },
    getStorageSync:function(key){
        let value=localStorage.getItem(key)
        try {
       return JSON.parse(value)
        } catch (error) {
            x(error)
            return value
        }
    },
    setStorageSync:function(key,value){
        // $.cookie(key,JSON.stringify(value), { expires: 999, path: '/' })
        localStorage.setItem(key,JSON.stringify(value))
        // z(value)
        // z(JSON.stringify(value))
        // z(localStorage.getItem(key))
    }
}

const width = Width() - 60+"px;"// container.scrollWidth*1.34;
const height = document.documentElement.clientHeight-80
let containerstyle="height: "+height+"px;max-width:"+width
// $('#container').css('width',width*2)
$('#container').attr("style",containerstyle)
$('.list_dl').css("height",height-150+"px")
var chart = echarts.init(document.getElementById('container'));