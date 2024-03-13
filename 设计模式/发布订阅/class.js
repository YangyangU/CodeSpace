// function Point(x,y){
//     this.x = x;
//     this.y = y;
// }

// Point.prototype.toString = function(){
//     return `(${this.x} ${this.y})`
// }

// Point.foo = function(){
//     return 'foo'
// }

// let p1 = new Point(1,2)


// //类实现

// class Point {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     //原型的方法
//     toString(){
//         return `(${this.x} ${this.y})`
//     }

//     static foo() {
//         return 'foo'
//     }
// }

// let p = new Point(1,2)


//get set 

class Point {
    _count = 0;

    get value(){
        return this._count
    }

    set value(val){
        console.log(val);
        this._count = val
    }
}

let p = new Point()
console.log(p.value);//这个触发get
p.value = 1 //这个触发set，=