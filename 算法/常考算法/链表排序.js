const sort = (head) => {
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    arr.sort((a, b) => a - b)
    let res = new ListNode(arr[0])
    let cur = res
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }
    return res
}