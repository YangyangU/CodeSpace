let arr = []

for (var i = 0; i < 5; i++) {
    (function a(j){
        arr[i] = function(){
            console.log(j)
        }
    })(i)
}

for (var j = 0; j < 5; j++) {
    arr[j]()
}

// for (var i = 0; i < 5; i++) {
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }

for (var i = 0; i < 5; i++) {
    (function(index) {
        setTimeout(() => {
            console.log(index);
        },0);
    })(i);
}