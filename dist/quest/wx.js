function func(){}
const wx={
    clearStorage: func,
    getStorageSync:function(key){
       return $.cookie(key)
    },
    setStorageSync:function(key,value){
        $.cookie(key,value, { expires: 999, path: '/' })
    }
}