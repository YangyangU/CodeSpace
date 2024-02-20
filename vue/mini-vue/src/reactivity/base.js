let obj = {
    name:'tom',
    // age:(){
    //     return 18
    // },
    get age(){//直接得到18
        return 18
    }
}


console.log(obj.age); //js中的对象有getter，setter的能力

// 自动执行get、set方法