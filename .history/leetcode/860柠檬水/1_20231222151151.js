bills = [5,5,5,10,20]

var lemonadeChange = function(bills) {
    let arr = [];
    for (let i = 0; i < bills.length; i++) {
        if(bills[i] === 5) {
            arr.push(5);
            return true
        }
        else if(bills[i] === 10) {
            if(arr.includes(5)){
                arr.splice(arr.indexOf(5),1)
                arr.push(10)
                return true
            }
            return false
        }else if(bills[i] === 20) {
            if(arr.includes(5)){
                let len5 = arr.forEach(item =>{
                    
                })
                if()
            }
            return false
        }
    }
};

console.log(lemonadeChange(bills));