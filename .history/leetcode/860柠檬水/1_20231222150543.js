bills = [5,5,5,10,20]

var lemonadeChange = function(bills) {
    let arr = [];
    for (let i = 0; i < bills.length; i++) {
        if(bills[i] === 5) {
            arr.push(5);
        }
        else if(bills[i] === 10) {
            if(arr.includes(5)){
                arr.splice(arr.indexOf(5),1)
                arr.push(10)
            }
        }
    }
};

console.log(lemonadeChange(bills));