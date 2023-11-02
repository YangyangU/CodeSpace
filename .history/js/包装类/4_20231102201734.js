//构造函数
function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;

    return this;
}
let p = new Person('阳阳',18,'male')

console.log(p);