//多种类型
function numFn (a:number,b:number):Array<number>{
    return [a,b]
}

function strFn (a:string,b:string):Array<string>{
    return [a,b]
}

function Fn<T> (a:T,b:T):Array<T>{
    return [a,b]
}

Fn(1,2)
Fn('123','456')


//type
type A<T> = string | number | boolean | T

let a:A<string> = 1

// interface 
interface B<T>{
    name:T
}

let person:B<string> = {
    name:'阳阳'
}

//多个泛型
function add<T,K> (a:T,b:K):Array<T|K>{
    return [a,b]
}

add(false,123)


//keyof
function add2<T extends number>(a:T,b:T){
    return a+b
}

add2(1,2)