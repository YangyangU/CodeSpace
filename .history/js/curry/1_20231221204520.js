function add(a,b,c){
    return a + b + c;
}

//有时候不会一次性给到，前端的交互
// js curry 柯里化
// 每次接受一个参数
add(a)(b)(c)