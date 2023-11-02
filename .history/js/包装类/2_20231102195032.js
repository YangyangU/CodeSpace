let obj ={
    name: '丁真',
    age: 18,
}
// console.log(obj.name);
// console.log(obj['name']);

// obj.girlFriend ='锐刻'
let girl = 'girlFriend';
// obj.girl = '锐刻'
obj[girl] = '锐刻'

delete obj.girlFriend//删除obj的某个属性

console.log(obj);