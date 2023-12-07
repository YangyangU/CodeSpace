var deleteDuplicates = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    
    let cur = dummy
    while(cur.next && cur.next.next){
        if(cur.next.val === cur.next.next.val){
            let value = cur.next.val
            while(value === cur.next.val){
                //删除
                cur.next = cur.next.next
            }
        }else{
            cur = cur.next
        }
    }
};