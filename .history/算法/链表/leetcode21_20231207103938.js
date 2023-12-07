//转成另外一种数据结构


var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    cur = dummy
    while(list1 && list2) {
        if(list1.cur >= list2.cur) {
            cur.next = list1
            list1 = list1.next
        }else if(list1.cur < list2.cur) {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
        cur.next = list1 ? list1.next : list2.next
    }
}