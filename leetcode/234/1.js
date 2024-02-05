var isPalindrome = function(head) {
    let a = '',b = ''
    while(head){
        a = a + head.val
        b = head.val + b
        head = head.next
    }
    return a === b
};