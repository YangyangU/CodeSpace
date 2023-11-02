function a(){
    function b(){
        var bbb=234;
        console.log(aaa);
    }
    aaa=123;
    return b;
}
var c =a()
c()

//a内的函数被返回到a外面调用，这个函数里面用到了a的变量