var insertGreatestCommonDivisors = function(head) {
    for (let cur = head; cur.next; cur = cur.next.next) {
        cur.next = new ListNode(f(cur.val, cur.next.val), cur.next);
    }
    return head;
    function f(m , n){
        return m % n == 0 ? (n) : (f( n , m % n )) ;
    }
};



let gcd = (a, b) => b == 0 ? a : gcd(b, a % b)

var insertGreatestCommonDivisors = function(head) {
    let node = head
    while (node.next != null) {
        node.next = new ListNode(gcd(node.val, node.next.val), node.next);
        node = node.next.next;
    }
    return head;
};