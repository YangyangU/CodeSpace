function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode() // 用哨兵节点简化代码逻辑
    let cur = dummy //指向新链表的末尾
    while(list1 && list2){
        if(list1.val < list2.val){
            cur.next = list1 
            list1 = list1.next
        }else{
            
        }
    }
};