function func(){}
const wx={
    clearStorage: func,
    getStorageSync:function(key){
       return JSON.parse($.cookie(key))
    },
    setStorageSync:function(key,value){
        $.cookie(key,JSON.stringify(value), { expires: 999, path: '/' })
    }
}