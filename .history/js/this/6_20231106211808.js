//function foo() {}

//var foo = function(){}


//箭头函数
var baz = () => {//箭头函数不承认this
    console.log(this.a);
}
baz();


var obj = {
    name: 'foo',
    show: function(){
        console.log(this);
    },
}
obj.show();