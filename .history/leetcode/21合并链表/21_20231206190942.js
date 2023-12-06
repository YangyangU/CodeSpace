function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode() // 用哨兵节点简化代码逻辑
    let cur = dummy.next
};