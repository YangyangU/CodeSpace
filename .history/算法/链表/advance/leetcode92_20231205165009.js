

var reverseBetween = function(head, left, right) {
    //把链表left,right截取
    let lNode = head
    let rNode = head
    for(let i = 0; i < left - 1; i++) {
        lNode = lNode.next

    }
    for(let i = 0; i < right + 1; i++) {
        rNode = rNode.next
    }

    // reverseList
};