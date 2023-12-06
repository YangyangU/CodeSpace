

var addTwoNumbers = function(l1, l2) {
    let addOne = 0
    let sum = new ListNode('0')
    let head = sum
    while (addOne || l1 || l2) {
        let val1 = l1 !== null ? l1.val : 0
        let val2 = l2 !== null ? l2.val : 0
        let r1 = val1 + val2 + addOne
        addOne = r1 >= 10 ? 1 : 0
        sum.next = new ListNode(r1 % 10)
        sum = sum.next 
        if (l1) l1 = l1.next 
        if (l2) l2 = l2.next 
    }
    return head.next
};

作者：A丰休
链接：https://leetcode.cn/problems/add-two-numbers/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。