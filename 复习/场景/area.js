let options = {
    height: 12,
}

// function fn (options){
//     let width = options.width  || 1
//     let height = options.height || 1
//     return width * height
// }
// console.log(fn(options));

// function fn(options){
//     let {width = 1, height = 1} = options
//     return width * height

// }
// console.log(fn(options));


function fn(options){
    let {width, height} = options
    return width&&height? width * height : 1
}
console.log(fn(options));