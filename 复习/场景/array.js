let obj = {
    'a': 1,
    'b': 2
}


function change(obj) {
    // let res = []
    // for (let key in obj) {
    //     res.push([key, obj[key]])
    // }
    // // console.log(Object.entries(obj));
    // return res
    return Object.entries(obj)
}
console.log(change(obj));


function back(arr){
    let obj = {}
    for(let item of arr){
        obj[item[0]+''] = item[1]
    }
    return obj
}

// function change(obj) {
//     let res = []
//     for (let key of Object.keys(obj)) {
//         res.push([key, obj[key]])
//     }
//     // console.log(Object.entries(obj));
//     return res
// }
// console.log(change(obj));

// function back(arr) {
//     let obj = {}
//     for (let item of arr) {
//         obj[item[0] + ''] = item[1]
//     }
//     // arr.forEach(function(item) {
//     //     obj[item[0]] = item[1];
//     //   });
//     // console.log(Object.entries(arr));
//     return obj
// }

console.log(back([ [ 'a', 1 ], [ 'b', 2 ] ]));
