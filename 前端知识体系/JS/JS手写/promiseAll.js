myPromiseAll = (arr) => {
    let res = []
    let len = 0
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].then(
                (val) => {
                    len++
                    res[i] = val
                    if (len < arr.length) {
                        resolve(val)
                    }
                },
                (res) => {
                    reject(res)
                }
            )
        }
    })
}

console.log(myPromiseAll([a, b, c]))

