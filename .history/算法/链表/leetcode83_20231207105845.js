var deleteDuplicates = function(head) {
    let cur = head
    //遍历链表
    while(cur){
        if(cur.val === cur.next.val) {
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
};