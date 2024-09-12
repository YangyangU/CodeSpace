const myPromiseRace = (arr) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].then(
                (val) => {
                    resolve(val)
                },
                (res) => {
                    reject(res)
                }
            )
        }
    })
}

let p1 = Promise.reject(1)
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1)
})
let p3 = Promise.resolve(3)

console.log(myPromiseRace([p1, p2, p3]).then((val) => console.log(val), (res) => console.log(res)));
