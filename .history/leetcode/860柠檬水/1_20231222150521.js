bills = [5,5,5,10,20]

var lemonadeChange = function(bills) {
    let arr = [];
    for (let i = 0; i < bills.length; i++) {
        if(bills[i] === 5) {
            arr.push(bills[i]);
        }
        else if(bills[i] === 10) {
            if(arr.includes(5)){
                arr.splice(arr.indexOf(5),1)
            }
        }
    }
};

console.log(lemonadeChange(bills));