//约束普通函数
function add(a:number,b:number):number{
    return a+b
}

console.log(add(1,2));

//箭头函数
const add2 = (a:number = 10,b:number = 20):number => a+b

console.log(add2());


//接口约束函数
interface User {
    name:string,
    age:number
}

function add3(user:User):User {
    return user
}

console.log(add3({name:'张三',age:20}));


//定义this的类型
interface Obj {
    user:number[],
    add:(this:Obj,num:number)=>void
}

let obj:Obj = {
    user:[],
    add(this:Obj,num:number){
        this.user.push(num)
    }
}

obj.add(1)

console.log(obj);


//函数重载
let user:number[] = [1,2,3]

function findNum(id:number):number[]
function findNum(id:number[]):number[]
function findNum():number[]
function findNum(id?:number|number[]):number[]{
    if(typeof id === 'number'){
        return user.filter(item => item === id)
    }else if(Array.isArray(id)){
        user.push(...id)
        return user
    }else{
        return user
    }
}

console.log(findNum());
