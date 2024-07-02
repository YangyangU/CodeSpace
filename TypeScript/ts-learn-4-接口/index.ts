interface Axxsxs{
    name:string,
    age:number,
    readonly id:number,//只读属性
}
interface Axxsxs{
    sex?:string,//可选
    [propName:string]:any // 表示任意属性
}

interface Child extends Axxsxs{//继承
    childName:string,
    childAge:number
}

let a:Axxsxs = {
    name:'阳阳',
    age:18,
    id:123,
    sex:'男',
    a:1,
    b:3
}

let b:Child = {
    name:'阳阳',
    age:18,
    id:123,
    sex:'男',
    childName:'小阳',
    childAge:1
}


//定义函数类型
interface Func{
    (name:string):number[]
}

const fn:Func = (name:string)=>{
    return [123]
}