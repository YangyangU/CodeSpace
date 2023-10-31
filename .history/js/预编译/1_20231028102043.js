var a = 1
function foo(a){
    var a=2;
    function a(){}
    var b = a;
    console.log(a);
}
foo(3)