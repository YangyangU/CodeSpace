var deleteDuplicates = function(head) {
    if(!head || !head.next){
        return head
    }
    let dummy = new ListNode()
    dummy.next = head
    
    let cur = dummy
    while(cur.next && cur.next.next){
        if(cur.next.val === cur.next.next.val){
            let value = cur.next.val
            while(value === cur.next.val && cur.next){
                //删除
                cur.next = cur.next.next
            }
        }else{
            cur = cur.next
        }
    }
    return dummy.next
};