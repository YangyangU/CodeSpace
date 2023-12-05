//反转链表
var reverseList = function(head) {
    let cur = head
    const dummy = new ListNode();
    
    let nextNode = null
    while (cur){
        dummy.next = cur
        cur.next = nextNode
        cur = cur.next
    }
};