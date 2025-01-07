const myPromiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        let result = [];
        let count = 0;
        for (let i = 0; i < promises.length; i++) {
            promises[i].then((res) => {
                result[i] = res;
                count++;
                if (count === promises.length) {
                    resolve(result);
                }
            }, (err) => {
                reject(err)
            })
        }
    })
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 2000)
})

const p3 = Promise.reject(3)

myPromiseAll([p1, p2, p3]).then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})
