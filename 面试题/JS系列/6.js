let obj = {}

function foo(){
    let a = 1
    let b = 2
    let c = 3

    // return function(){
    //     console.log(a,b);
    // }
    // window.bar = function(){
    //     console.log(a,b);
    // }

    //node环境
    // global.bar = function(){
    //     console.log(a,b);
    // }

    obj.bar = function(){
        console.log(a,b);
    }
}


obj.bar()