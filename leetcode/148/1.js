var sortList = function(head) {
    const arr = [];
    let cur = head;
    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    arr.sort((a, b) => a - b);
    let dummy = new ListNode(0);
    let curNode = dummy;
    for (const val of arr) {
        curNode.next = new ListNode(val);
        curNode = curNode.next;
    }
    return dummy.next;
 };
