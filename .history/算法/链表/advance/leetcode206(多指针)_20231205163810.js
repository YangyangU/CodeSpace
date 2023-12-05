//反转链表
var reverseList = function(head) {
    let pre = null
    let cur = head
    while(){
        //防止访问不到，将下一下节点存下
        let nextNode = cur.next
        cur.next = pre
        pre = cur
        cur = nextNode
    }
};