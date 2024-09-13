function isCycle (head){
    if(!head || !head.next){
        return false
    }
    let fast = head.next
    let slow = head
    while(fast&&fast.next){
        if(slow.value == fast.value){
            return true
        }
        fast = fast.next
        slow = slow.next.next
    }
    return false
}