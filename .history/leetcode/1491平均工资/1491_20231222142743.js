salary = [4000,3000,1000,2000]

var average = function(salary) {
    let max = salary[0]
    let min = salary[0]
    for (var i = 1; i <salary.length; i++) {
        max = Math.max(max,salary[i]);
        min = Math.min(min,salary[i]);
    }
    salary.splice(salary.indexOf(max),1)
    salary.splice(salary.indexOf(min),1)
    var ans =salary.forEach(item => {
        item += item
    })/salary.length;
    return ans
};


console.log(average(salary));