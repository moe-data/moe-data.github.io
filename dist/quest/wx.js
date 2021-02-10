function func(){}
const wx={
    clearStorage: func,
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

var chart = echarts.init(document.getElementById('container'));
