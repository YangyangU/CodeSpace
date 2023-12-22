bills = [5,5,5,10,20]

var lemonadeChange = function(bills) {
    let arr = [];
    for (let i = 0; i < bills.length; i++) {
        if(bills[i] === 5) {
            arr.push(bills[i]);
            break
        }
        else if(bills[i] === 10) {

        }
    }
};

console.log(lemonadeChange(bills));