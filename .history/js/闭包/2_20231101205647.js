function foo(){
    var myName = '阳阳'
    let test1 =1
    let test2 =2
    var innerBar ={
        getName: function(){
            console.log(test1);
            return myName;
        },
        setName:function(){
            myName = newName;
        }
    }
    return innerBar
}

var bar = foo();
bar.setName('欣欣');
console.log(bar.getName());