

var addTwoNumbers = function(l1, l2) {
    let a = new ListNode()
    a.next = l1

    let count = 0
    let sum = 0
    while(l1.next){
        count ++
    }
    while(l1.next){
        sum += l1.val*(10^count)
        count ++
    }
};