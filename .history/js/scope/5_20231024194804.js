let a =1;//暂时性死区


function foo() {
    console.log(a);
    let a = 2;
}

foo();