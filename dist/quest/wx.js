function func(){}
const wx={
    clearStorage: func,
    getStorageSync:function(key){
        let value=$.cookie(key)
        try {
       return JSON.parse(value)
        } catch (error) {
            return value
        }
    },
    setStorageSync:function(key,value){
        $.cookie(key,JSON.stringify(value), { expires: 999, path: '/' })
    }
}