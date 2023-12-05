//反转链表
var reverseList = function(head) {
    const dummy = new ListNode();
    dummy.next = head

    let cur = dummy
    while (cur.next){
        cur = cur.next
    }
};