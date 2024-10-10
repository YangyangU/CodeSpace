function once(fn){
    let flag = true
    return function(...args){
        if(flag){
            fn(...args)
            flag = false
        }else{
            console.log('已经执行过一次了');
        }
    }
}

function count(i){
    console.log(i);
}

let fn = once(count)

fn(1)
fn(1)
fn(1)

