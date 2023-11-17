

var MyQueue = function() {
    this.stack1 = []//构造函数的this与构造函数原型上的this指向一致都是实例对象
    this.stack2 = []
};


MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};


MyQueue.prototype.pop = function() {

};


MyQueue.prototype.peek = function() {

};


MyQueue.prototype.empty = function() {

};