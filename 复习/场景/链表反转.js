function reverseList(head) {
    let prev = null;
    let current = head;
    while (current != null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
}

// 测试



// 创建一个链表：1 -> 2 -> 3 -> 4 -> 5
const head = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                }
            }
        }
    }
}

console.log("原始链表：");
console.log(head);

console.log("反转后的链表：");
console.log(reverseList(head));

