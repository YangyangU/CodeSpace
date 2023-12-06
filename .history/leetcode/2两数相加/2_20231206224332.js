

var addTwoNumbers = function(l1, l2) {
    let a = new ListNode()
    a.next = l1

    let sum1 = 0
    let sum2 = 0
    let len1 = 0
    let len2 = 0
    while(l1.next){
        len1 ++
    }
    while(l1.next){
        let count = 1
        sum1 += l1.val*(10^(len1-count))
        count ++
    }
    while(l2.next){
        len2 ++
    }
    while(l2.next){
        let count = 1
        sum1 += l1.val*(10^(len2-count))
        count ++
    }
    return sum1 + sum2
};