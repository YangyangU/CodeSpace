//数字枚举
enum Color{
    red = 1, //字符串没办法递增
    green,
    blue
}

console.log(Color.red,Color.green,Color.blue);


// 字符串枚举


// 异构枚举
enum Color1{
    red = 1,
    green = 'green',
    blue = 2
}

//接口枚举

interface A{
    red:Color.red
}
let obj:A = {
    red:Color.red
}
