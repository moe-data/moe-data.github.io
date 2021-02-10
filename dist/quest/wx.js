function func(){}
const wx={
    clearStorage: func,
    getStorageSync:function(key){
        if($.cookie(key)!=undefined)
       return JSON.parse($.cookie(key))
    },
    setStorageSync:function(key,value){
        $.cookie(key,JSON.stringify(value), { expires: 999, path: '/' })
    }
}