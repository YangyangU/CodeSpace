salary = [4000,3000,1000,2000]

var average = function(salary) {
    let max = salary[0]
    for (var i = 0; i <salary.length; i++) {
        max = Math.max(max,salary[1]);
    }
    return max;
};


console.log(average(salary));