function myPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(
                val => {
                    resolve(val)
                },
                res => {
                    reject(res)
                }
            )
        })
    })
}