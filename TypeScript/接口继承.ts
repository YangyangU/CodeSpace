interface Parent{
    name:string;
    age:number;
}

interface Child extends Parent{
    sex:string;
}

const myObj:Child = {
    name:'张三',
    age:18,
    sex:'男'
}