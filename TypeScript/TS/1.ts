// const num: number = 123;
// const str: string = "123";
// const flag: boolean = true;
// const bigint: bigint = 123n;
// const symbol: symbol = Symbol("123");
// const un: undefined = undefined;
// const nu: null = null;
// const arr: number[] = [1, 2, 3];
// const arr2: Array<number> = [1, 2, 3];
// const obj: object = { name: "阳阳羊" };
// const obj2: { name: string } = { name: "阳阳羊" };
// const fn: (str: string) => number = (str: string) => {
//     return 123
// }

// const x:"hello" = "hello";





// const x = {
//     flag: true,
// };

// let y:| "hello" | "1";



// let z: number&string;

// type Age = number;

// const b= {
//     name: "阳阳羊",
//     age: 21
// }
// console.log(typeof b)
// type TypeB = typeof b


// {
//  type T = number;
//  var v: T = 123;
//  console.log(v)
// }
// {
//   type T = string;
//   var v: T = "阳阳羊";
//   console.log(v)
// }


// const arr = []
// arr.push(123)
// arr.push('阳阳羊')


// arr


// const tuple: [string?, number, boolean] = ["阳阳羊", 123, true];


// const tuple = ["阳阳羊", 123, true]

// const tuple: [string, ...number[]] = ["阳阳羊", 123, 456];

// function fn(a: number, b: number): number {
//     return a + b
// }

// const fn1 = function(a: number, b: number): number{
//     return a + b
// }

// const fn2:(a: number, b: number)=>number =function(a, b){
//     return a + b
// }

function reverse(str: string): string;
function reverse(arr: any[]): any[];
function reverse(stringOrArray: string | any[]): string | any[] {
  if (typeof stringOrArray === "string")
    return stringOrArray.split("").reverse().join("");
  else {
    return stringOrArray.slice().reverse();
  }
}

console.log(reverse(["🐂","🐑","🐎", "🐒"]))
console.log(reverse("牛羊马猴"))



interface Animal {
    name: string;
    age: number;
  }
  
interface Dog extends Animal {
  color: string;
  age: bigint;
}