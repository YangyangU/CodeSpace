//转成另外一种数据结构


var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    cur = dummy
    while(list1 && list2) {
        if(list1 >= list2) {
            cur.next = list1
            list1 = list1.next
        }
    }
}