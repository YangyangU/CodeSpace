let arr:[number,string] = [1,'1']

arr.push('2')

const arr2: readonly[x:number,y?:string] = [1,'1']
const arr3: readonly[ number, string?] = [1]

const excel:[string,string,number][] = [
    ['name','age',18],
    ['name','age',18],
    ['name','age',18],
]//渲染到页面上

type first  = typeof arr2[0] //
type length = typeof arr2['length']