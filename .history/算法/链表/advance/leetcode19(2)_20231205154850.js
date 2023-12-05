function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    //快慢指针
    // len  m=len-n-1  pre=m-1
    //遍历两趟 1拿到总长度 2遍历到m-1执行删除
    //删除倒数几位快指针就先走几步，快指针是循环的标志，快指针走完，慢指针指向的就是要删除的前一项
    const dummy = new ListNode();
    dummy.next = head;

    let fast = dummy
    let slow = dummy

    while (n != 0){//快指针先走n步
        fast = fast.next
        n --
    }
    while(fast.next){//快指针存在
        slow = slow.next
        fast = fast.next
    }
};

console.log(removeNthFromEnd(head,n));