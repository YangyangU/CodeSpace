//联合类型
let phone:number | string = 123456789;

let fn = function(type:number | boolean):boolean{
    return !!type
}

console.log(fn(1));
//--------------------------

//交叉类型
interface People{
    name:string,
    age:number
}

interface Man{
    sex:string
}

const people = (man:Man & People):void =>{
    console.log(man);
}

people({name:'zs',age:20,sex:'男'})
//--------------------------

//类型断言
let fn1 = function(num:number | string):void{
    console.log((num as string).length);
}

fn1(12345);//undefined

//--

interface A{
    run:string
}

interface B{
    build:string
}

let fn2 = (type:A | B):void =>{
    console.log((<A>type).run);
}

fn2({run:'12345'}); //undefined