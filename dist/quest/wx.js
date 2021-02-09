function func(){}
const wx={
    clearStorage: func,
    getStorageSync:function(key){
        $.cookie(key)
    },
    setStorageSync:function(key,value){
        $.cookie(key,value, { expires: 999, path: '/' })
    }
}