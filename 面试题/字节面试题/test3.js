function timeout(time,num){
    setTimeout(()=>{
        console.log(num + '号任务已完成');
    },time);
}

timeout(10000,1)
timeout(5000,2)
timeout(3000,3)