//构造函数
// function Person(name, age, sex){
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
    // let this ={//new干的事
    //     name: name,
    //     age: age,
    //     sex: sex
    // }
    // return this;
}
// let p = new Person('阳阳',18,'male')

// console.log(p);


//模拟new
function Person(name, age, sex){
    var that = {}
    that.name = name;
    that.age = age;
    that.sex = sex;
    return that;
}

let p1 = Person('阳阳',18,'girl')
let p2 = Person('羊羊',20,'boy')
console.log(p1);
console.log(p2);