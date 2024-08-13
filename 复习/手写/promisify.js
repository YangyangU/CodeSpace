function promisify(fn) {
    // 返回一个新的函数
    return function (...args) {
      // 返回一个 Promise
      return new Promise((resolve, reject) => {
        // 将回调函数推到参数列表的末尾
        fn(...args, (err, result) => {
          if (err) {
            // 如果有错误，拒绝 Promise
            reject(err);
          } else {
            // 如果没有错误，解析 Promise
            resolve(result);
          }
        });
      });
    };
  }