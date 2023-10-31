function foo(str,a){
    eval(str);//等同于var b = 3
    console.log(a,b);
}
//var b =2;
foo('var b = 3',1)