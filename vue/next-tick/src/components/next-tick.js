export function myNextTick(fn){
    let app = document.getElementById('app');
    var observerOptions = {
        childList: true, // 观察目标子节点的变化，是否有添加或者删除
        attributes: true, // 观察属性变动
        subtree: true, // 观察后代节点，默认为 false
      };
    //让fn()在dom更新完成后执行
    //创建一个DOM监听器
    let observer = new MutationObserver((el)=>{
        // console.log(123);//DOM结构变化函数执行

        //当被监听的DOM结构变化后，执行回调函数
        console.log(el);
        fn()
    })
    observer.observe(app,observerOptions)//监听上某一个dom节点及子节点
}