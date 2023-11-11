Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400

function Car(owner, color){
    this.owner = owner
    this.color = color
}

var car1 = new Car('掘友','pink')
var car2 = new Car('掘金管理','green')

car1.color = 'black'   //私有属性只能改自己

// car.name = '红旗'    //共有属性改不了原型，只能改自己的属性
// Car.prototype.name = '红旗'

//delete Car.prototype.name
// delete car.name

console.log(car1);
console.log(car2);