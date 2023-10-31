var a = 1;//声明变量并赋值

function foo(){
    var c =ture;
    console.log(a);//由内而外找a
}
console.log(c);

//foo()