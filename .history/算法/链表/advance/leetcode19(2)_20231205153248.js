function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    // len  m=len-n-1  pre=m-1
    //遍历两趟 1拿到总长度 2遍历到m-1执行删除
};

console.log(removeNthFromEnd(head,n));