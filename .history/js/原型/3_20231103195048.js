Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400

function Car(owner, color){
    this.owner = owner
    this.color = color
}

var car = new Car('掘金审核','red')
var car2 = new Car('掘金管理','black')

//car.color = 'pink' 私有属性
car.name = '红旗'    //共有属性改不了原型，只能改自己的属性
// Car.prototype.name = '红旗'

delete Car.prototype.name

delete car.name


console.log(car);
console.log(car2.name);