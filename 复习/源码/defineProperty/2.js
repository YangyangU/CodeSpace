let obj = {
    name : '阳阳羊',
    age : 18,
};

// Object.keys(obj).forEach(key => {
//     Object.defineProperty(obj, key, {
//         get() {
//             console.log('访问了');
//             return obj[key];
//         },
//         set(newValue) {
//             console.log('修改了');
//             obj[key] = newValue;
//         }
//     });
// });


// console.log(obj.name); //访问了 阳阳羊
// obj.name = '喜羊羊'; //修改了
// console.log(obj.name); //访问了 修改后的阳阳羊

let data = {};

Object.keys(obj).forEach(key => {
    data[key] = obj[key];
    Object.defineProperty(obj, key, {
        get() {
            console.log('访问了');
            return data[key];
        },
        set(newValue) {
            console.log('修改了');
            data[key] = newValue;
        }
    });
});

console.log(obj.name); // 访问了 阳阳羊
obj.name = '喜羊羊'; // 修改了
console.log(obj.name); // 访问了 喜羊羊