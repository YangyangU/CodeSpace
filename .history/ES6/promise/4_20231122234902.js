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

// function a() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log('第一道菜来了');
//             resolve();
//         }, 1000);
//     });
// }

// function b() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log('第二道菜来了');
//             resolve();
//         }, 1000);
//     });
// }
// function c() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log('第三道菜来了');
//             resolve();
//         }, 1000);
//     });
// }
// a()
//   .then(b)
//   .then(c)
//   .then(()=>{
//     console.log('菜上齐了');
//   })
//   .catch(function(error) {
//       console.error(error);
//   });

function a() {
    setTimeout(function() {
        console.log('第一道菜来了');
    }, 1000);
}

function b() {
    setTimeout(function() {
        console.log('第二道菜来了');
    }, 1000);
}

function c() {
    setTimeout(function() {
        console.log('第三道菜来了');
    }, 1000);
}

a(function() {
    b(function() {
        c(function() {
            console.log('全部菜都上齐了');
        });
    });
});