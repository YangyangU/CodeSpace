

var reverseBetween = function(head, left, right) {
    //把链表left,right截取
    let lNode = head
    let rNode = head
    for(let i = 0; i < left - 1; i++) {
        lNode = lNode.next // 左侧截取前的节点

    }
    for(let i = 0; i < right; i++) {
        rNode = rNode.next //右侧截取前的节点
        const res = reverseList(lNode.next)
        lNode.next = res
    }

    // reverseList
};