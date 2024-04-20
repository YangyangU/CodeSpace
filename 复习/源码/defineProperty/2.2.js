let obj = {
    name: '阳阳羊',
    age: 0
}
// 实现一个响应式函数
function defineProperty(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            console.log('访问了')
            return val
        },
        set(newVal) {
            console.log('修改了')
            val = newVal
        }
    })
}
// 实现一个遍历函数Observer
function Observer(obj) {
    Object.keys(obj).forEach((key) => {
        defineProperty(obj, key, obj[key])
    })
}
Observer(obj)
console.log(obj.name); // 访问了 阳阳羊
obj.name = '喜羊羊'; // 修改了
console.log(obj.name); // 访问了 喜羊羊
