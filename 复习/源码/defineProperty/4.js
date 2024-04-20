let arr = [1, 2, 3]
let obj = {}
Object.defineProperty(obj, 'arr', {
    get() {
        console.log('访问了')
        return arr
    },
    set(newVal) {
        console.log('修改了')
        arr = newVal
    }
})
console.log(obj.arr) //访问了  [ 1, 2, 3 ]
obj.arr = [1, 2, 3, 4] //修改了
obj.arr.push(3) //访问了
obj.arr.unshift(0) //访问了

