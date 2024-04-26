# 1.类型推断
let a = 123


# 2.类型注解

:string

# 3.类型断言

as number

# 4.基础类型和联合类型

let a: string | number = 123
let b: 1 | 2 | 3 = 1


# 5.数组、元组、枚举

- let arr: number[] = [1, 2, 3]
let arr1: Array<string> = ['a', 'b', 'c']

- let tuple: [string, number?] = ['a', 1]  // 可选元素

- enum MyEnum {
  A,
  B,
  C
}
console.log(MyEnum.A) //0
console.log(MyEnum[0]) //A

var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["A"] = 0] = "A";
    MyEnum[MyEnum["B"] = 1] = "B";
    MyEnum[MyEnum["C"] = 2] = "C";
})(MyEnum || (MyEnum = {}));
console.log(MyEnum.A);
console.log(MyEnum[0]);

# 函数

- void

function MyFn(a:number,b:string):void{

}

function MyFn(a:number,b:string):number{
  return 1
}

function MyFn(a =10,b:string,c?:boolean ,...rest:number[]):number{
  return 1
}

const f = MyFn(20,'abc',true,1,2,3)


# 接口

interface Person {
  name: string
  age: number
}

const person: Person = {
  name: 'John',
  age: 30
}


# 类型别名

type MyUserName = string | number

let a: MyUserName = 'abc'


# 9.泛型

function myFn(a:number,b:number):number[]{
  return [a,b]
}

function myFn<T>(a:T,b:T):T[]{
  return [a,b]
}

myFn<number>(1,2)
