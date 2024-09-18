// function foo(){
//     console.log('foo');
//     foo()
// }
// foo()

// function foo1(){
//     setTimeout(()=>{
//         console.log('foo1');
//         foo1()
//     },0)
// }
// foo1()

function foo2(){
    Promise.resolve().then(()=>{
        console.log('foo2');
        foo2()
    })
}
foo2()