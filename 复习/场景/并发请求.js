const urls = [
    'https://www.baidu.com',
    'https://www.google.com',
    'https://www.bing.com',
]

const limit = 2

function request(urls, limit) {
    const results = []
    let count = 0

    return new Promise((resolve) => {
        function run() {
            if (count >= limit || !urls.length) return
            count++
            fetch(urls.shift())
                // .then((res) => res.json())
                .then((res) => {
                    results.push(res)
                    count--
                    if (urls.length > 0) {
                        run();
                    }
                    if (urls.length === 0 && count === 0) {
                        resolve(results);
                    }
                })
            run()
        }
        while (count < limit) {
            run()
        }
    })
}

request(urls, limit).then((res) => {
    console.log(res)
})
