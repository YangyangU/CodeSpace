const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: {
            val: 4,
            next: null
          }
        }
      }
    }   
  }
}

const deleteSameNode = (pHead) => {
  if (!pHead || !pHead.next) return pHead;
    let map = new Map();
    let current = pHead;
    while (current) {
        if (map.has(current.val)) {
            map.set(current.val, map.get(current.val) + 1);
        } else {
            map.set(current.val, 1);
        }
        current = current.next;
    }
    let dummy = {};
    dummy.next = pHead;
    let pre = dummy;
    current = pHead;
    while (current) {
        if (map.get(current.val) > 1) {
            pre.next = current.next;
        } else {
            pre = current;
        }
        current = current.next;
    }
    return dummy.next;
}

console.log(deleteSameNode(list));