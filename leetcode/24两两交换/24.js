
var swapPairs = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    let cur = dummy.next
    let i = dummy.next
    while (i && i.next){
        cur = cur.next.next
        cur.next = cur
        i = i.next.next
    }
    return dummy.next
};