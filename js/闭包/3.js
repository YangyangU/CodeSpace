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