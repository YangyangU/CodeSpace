//构造函数
function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    // let this ={//new干的事
    //     name: name,
    //     age: age,
    //     sex: sex
    // }
    // return this;
}
let p = new Person('阳阳',18,'male')

console.log(p);

function Person(name, age, sex){
    var that = {}
    that.name = name;
    that.age = age;
    that.sex = sex;
    return that;
}

let p1 = Person('1',18,'male')
console.log(p1);