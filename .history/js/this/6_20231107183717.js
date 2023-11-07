//function foo() {}

//var foo = function(){}


//箭头函数
// var baz = () => {//箭头函数不承认this
//     console.log(this.a);
// }
// baz();


// var obj = {
//     name: 'Tom',
//     show: function(){
//         // console.log(this);

//         var bar = function(){
//             console.log(this.name);
//         }
//         bar()//独立调用，默认绑定
//     },
// }
// obj.show();

// =>

var obj = {
    name: 'Tom',
    show: function(){
        var bar = () => {//箭头不看this，往外看，被show引用，所以隐式绑定
            console.log(this.name);
        }
        bar()
    },
}
obj.show();