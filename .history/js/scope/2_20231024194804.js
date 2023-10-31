var a = 1;
function foo(){
    var a=2;
    function bar(){
    console.log(a);
    }
    bar();//运行成功
}

foo();


//bar();//报错找不到bar