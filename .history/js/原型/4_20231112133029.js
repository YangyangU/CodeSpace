function Bus(){

}
Car.prototype = {
    constructor: Bus
}
function Car(){

}

console.log(car.prototype)
var car = new Car();
console.log(car.constructor);//[Function: Car]//记录对象是由谁创建的，可修改