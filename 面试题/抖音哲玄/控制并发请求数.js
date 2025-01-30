async function limitConcurrency(requests, maxConcurrency) {
    const results = []; // 用来保存所有请求的结果
    const executing = []; // 用来保存正在执行的请求

    // 遍历所有请求
    for (const request of requests) {
        const p = request().then(result => {
            results.push(result); // 请求完成，保存结果
            executing.splice(executing.indexOf(p), 1); // 移除正在执行的请求
        });
        executing.push(p); // 将当前请求加入执行队列

        // 如果并发数达到最大值，等待其中一个完成
        if (executing.length >= maxConcurrency) {
            await Promise.race(executing); // 等待最早完成的一个请求
        }
    }

    // 等待所有请求完成
    await Promise.all(executing);

    return results;
}