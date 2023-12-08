/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(); // 用哨兵节点简化代码逻辑
    let cur = dummy; // cur 指向新链表的末尾
    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1; // 把 list1 加到新链表中
            list1 = list1.next;
        } else { // 注：相等的情况加哪个节点都是可以的
            cur.next = list2; // 把 list2 加到新链表中
            list2 = list2.next;
        }
        cur = cur.next;
    }
    cur.next = list1 ? list1 : list2; // 拼接剩余链表
    return dummy.next;
};

var mergeKLists = function (lists) {
    // 合并从 lists[i] 到 lists[j-1] 的链表
    function dfs(i, j) {
        const m = j - i;
        if (m === 0) return null; // 注意输入的 lists 可能是空的
        if (m === 1) return lists[i]; // 无需合并，直接返回
        const left = dfs(i, i + (m >> 1)); // 合并左半部分
        const right = dfs(i + (m >> 1), j); // 合并右半部分
        return mergeTwoLists(left, right); // 最后把左半和右半合并
    }
    return dfs(0, lists.length);
};
 