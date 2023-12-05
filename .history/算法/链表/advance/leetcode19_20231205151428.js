function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode()//如果删除的是头结点 自己定义一个前驱节点
    dummy.next = head

    let cur = dummy
    let len = 0

    // 正数length - n + 1 代表倒数第n个
    while(cur.next){//遍历找链表长度
        len++
        cur = cur.next
    }

    //找到前面那个节点
    let pre = dummy
    for(let i = 0; i <= len-n; i++){
        pre = pre.next
    }

    // 前面那个节点指向后面那个节点
    pre.next = pre.next.next

    return dummy.next

};

console.log(removeNthFromEnd(head,n));