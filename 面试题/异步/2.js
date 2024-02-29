let count = 0;

const foo = () =>{
    console.log(count);
}

const bar = (callback) =>{
    setTimeout(()=>{
        count = 1
        callback();
    },1000)
}


bar(foo);