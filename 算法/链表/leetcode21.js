//转成另外一种数据结构


var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    cur = dummy
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            cur.next = list1
            list1 = list1.next
        }else{
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }
    cur.next = list1 ? list1 : list2
    return dummy.next
}