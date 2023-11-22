// function a() {
//     return new Promise((resolve, reject)=>{//resolve是执行顺利，reject是执行翻车
//         setTimeout(() =>{
//             console.log('a');
//             resolve()
//         },1000)
//     })
// }

// function c() {
//     console.log('c');
// }

function a() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('第一道菜来了');
            resolve();
        }, 1000);
    });
}

function b() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('第二道菜来了');
            resolve();
        }, 1000);
    });
}
function c() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('第3道菜来了');
            resolve();
        }, 1000);
    });
}
// ...

a()
  .then(b)
//   .then(c)
//   .then(d)
//   .then(e)
  .catch(function(error) {
      console.error(error);
  });