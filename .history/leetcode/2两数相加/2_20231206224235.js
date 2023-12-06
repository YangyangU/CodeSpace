

var addTwoNumbers = function(l1, l2) {
    let a = new ListNode()
    a.next = l1

    let count = 1
    let sum1 = 0
    let sum2 = 0
    let len = 0
    while(l1.next){
        len ++
    }
    while(l1.next){
        sum1 += l1.val*(10^(len-count))
        count ++
    }
    while(l2.next){
        len ++
    }
    while(l2.next){
        sum1 += l1.val*(10^(len-count))
        count ++
    }
};