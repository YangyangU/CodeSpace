function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let result = [];
        let count = 0
        promises.forEach(promise => {
            promise.then(
                val => {
                    result.push(val)
                    count++
                    if (count === promises.length) {
                        resolve(result)
                    }
                },
                res => {
                    reject(res)
                }
            )
        })
    })
}