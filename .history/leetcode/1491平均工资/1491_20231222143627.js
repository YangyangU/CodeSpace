salary = [4000,3000,1000,2000]


//为什么要把数组中的元素删掉，直接算不行吗？
// var average = function(salary) {
//     let max = salary[0]
//     let min = salary[0]
//     for (var i = 1; i <salary.length; i++) {
//         max = Math.max(max,salary[i]);
//         min = Math.min(min,salary[i]);
//     }
//     let ans = 0
//     salary.splice(salary.indexOf(max),1)
//     salary.splice(salary.indexOf(min),1)
//     for(var i = 0; i <salary.length; i++) {
//         ans += salary[i]
//     }
//     return ans/salary.length
// };

var average = function(salary) {
    let max = salary[0]
    let min = salary[0]
    let sum = 0
    for (var i = 1; i <salary.length; i++) {
        max = Math.max(max,salary[i]);
        min = Math.min(min,salary[i]);
        sum += salary[i]
    }
    return (sum-min-max) /(salary.length-2)
};

console.log(average(salary));