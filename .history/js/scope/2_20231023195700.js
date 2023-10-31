var a = 1;
function foo(){
    var a=2;
    function bar(){
    console.log(a);
    }
    bar();
}

foo();


//bar();