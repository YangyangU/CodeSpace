
//自执行函数
// (function() {
//     console.log(123);
// })()



var arr= []

for(var i=0; i<10;i++){//i为全局

    (function a(j){
    arr[i]= function(){//函数未执行，i++
        console.log(j);
        }
    })(i)
}

for(var j=0; j<arr.length;j++){
    arr[j]();
}


//怎么输出0-9

