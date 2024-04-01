
const request = new Promise((resolve, reject) => {//模拟请求
    setTimeout(() => {
        resolve('请求成功')
    }, 1000)//请求花费一秒钟
})

const fn = (req, delay) => {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('请求超时')
        }, delay)
    })
    return Promise.race([req, timeout]).then((res) => { console.log(res) }, (err) => { console.log(err) })
}
//实现
fn(request,2000)

function fn2(req, delay) {
    return new Promise((resolve, reject) => {
        let flag = false

        req.then((res) => {
            if (!flag) {
                clearTimeout(timeout)
                resolve(res)
                flag = true
            }
        })

        let timeout = setTimeout(() => {
            if (!flag) {
                reject('timeout')
                flag = true
            }
        }, delay);
    })
}

fn2(request,2000)
.then((res) => console.log(res))
.catch((err) => console.log(err))
