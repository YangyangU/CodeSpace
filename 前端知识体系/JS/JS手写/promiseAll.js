const myPromiseAll = (arr) => {
    let result = []
    let len = 0
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].then(
                (val) => {
                    len++
                    result[i] = val
                    if (len === arr.length) {
                        resolve(result)
                    }
                },
                (res) => {
                    reject(res)
                }
            )
        }
    })
}

let p1 = Promise.resolve(1)
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1)
})
let p3 = Promise.resolve(3)

console.log(myPromiseAll([p1, p2, p3]).then((val) => console.log(val), (res) => console.log(res)));


