var arr= []

for(var i=0; i<10;i++){//i为全局
    arr[i]= function(){//函数未执行，i++
        console.log(i);
    }
}

for(var j=0; j<arr.length;j++){
    arr[j]();
}


//怎么输出0-9

(function() {
    console.log(123);
})()