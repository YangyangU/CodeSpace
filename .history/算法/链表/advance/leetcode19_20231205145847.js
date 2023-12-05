function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode()//如果删除的是头结点 自己定义一个前驱节点
    dummy.next = head

    const cur = dummy
    // length - n + 1 代表倒数第n个
    while(cur.next)//遍历找链表长度
};

console.log(removeNthFromEnd(head,n));