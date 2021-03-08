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
$('.list_dl').css("height", height - 180 + "px")
var chart = echarts.init(document.getElementById('container'));
const requiredic = {
    simple: "简单任务",
    fleet: "编成",
    sortie: "出击",
    sink: "击沉",
    excercise: "演习",
    expedition: "远征",
    modelconversion: "机种转换",
    scrapequipment: "废弃某种装备",
    equipexchange: "装备准备",
    modernization: "近代化改修/舰装合成",
    "a-gou": "あ号作戦"
}
const range = document.getElementById('range');
function changeV(a) {
    console.log(a, range.value);
}