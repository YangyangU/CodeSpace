
var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;

    while (cur.next && cur.next.next) {
        let firstNode = cur.next;
        let secondNode = cur.next.next;

        firstNode.next = secondNode.next;
        cur.next = secondNode;
        cur.next.next = firstNode;

        cur = cur.next.next;
    }

    return dummy.next;
};