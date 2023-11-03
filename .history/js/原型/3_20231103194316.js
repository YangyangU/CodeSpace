Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400

function Car(owner, color){
    this.owner = owner
    this.color = color
}

var car = new Car('掘金审核','red')
var car2 = new Car('掘金管理','black')

car.color = 'pink'


console.log(car.color);
console.log(car2);