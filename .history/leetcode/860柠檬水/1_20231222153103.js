bills = [5,5,5,10,20]

var lemonadeChange = function(bills) {
    let arr = [];
    let count = 0;
    let len5 = 0    
    let len10 = 0
    for (let i = 0; i < bills.length; i++) {
        if(bills[i] === 5) {
            arr.push(5);
        }
        else if(bills[i] === 10) {
            if(arr.includes(5)){
                arr.splice(arr.indexOf(5),1)
                arr.push(10)
            }
            else return false
        }else if(bills[i] === 20) {
            if(arr.includes(5)){
                for (let i = 0; i < arr.length; i++) {
                    count ++
                }
                len10 = arr.length - count
                if(count >= 3 || (len10>1 && count>1)){
                    return true
                }
            }
            return false
        }
    }
    return true
};

console.log(lemonadeChange(bills));