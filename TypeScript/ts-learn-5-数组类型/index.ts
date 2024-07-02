//普通数组类型
let arr:number[] = [1,2,3]

let arr1:boolean[] = [false]

let arr2:Array<boolean> = [false]

//定义对象数组使用 interface
interface X{
    name:string
}

let arr3:X[] = [{name:'1'},{name:'2'}]

//定义二维数组
let arr4:number[][] = [[1,2],[3,4]]

//套娃
let arr5:Array<Array<number>> = [[1,2],[3,4]]

//大杂烩数组
//元组
let arr6:[string,number] = ['1',1]

let arr7:any[] = [1,'2',true]

//函数参数
function sum(...args:number[]){
    console.log(args);
}

function sum1(...args:number[]){
    let a:IArguments = arguments
}

interface A{
    callee:Function
    length:number
    [index:number]:any
}