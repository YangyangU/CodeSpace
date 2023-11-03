function Bus(){

}
Car.prototype = {
    constructor: Bus
}
function Car(){

}


var car = new Car();
console.log(car.constructor);//[Function: Car]//标记方法是谁创建的