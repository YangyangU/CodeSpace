const myPromiseAllSettled = (arr) => {
    let result = []
    let len = 0
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].then(
                (val) => {
                    result[i] = { status: 'fulfilled', val }
                },
                (res) => {
                    result[i] = { status: 'rejected', res }
                }
            ).finally(() => {
                len++
                if (len === arr.length) {
                    reject(result)
                }
            })
        }
    })
}


let p1 = Promise.resolve(1)
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1)
})
let p3 = Promise.reject(3)

console.log(myPromiseAllSettled([p1, p2, p3]).then((val) => console.log(val), (res) => console.log(res)));
