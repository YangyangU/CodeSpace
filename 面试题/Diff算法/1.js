const oldChildren = n1.children;
const newChildren = n2.children;

let lastIndex = 0

for (let i = 0; i < newChildren.length; i++) {
    const newVNode = newChildren[i];
    let j = 0
    let find = false
    for (let j = 0; j < oldChildren.length; j++) {
        if (newVNode.key === oldVNode.key) {
            find = true
            patch(oldVNode, newVNode, container)
            if (j < lastIndex) {
                const ancestor = prevVNode.el.nextSibing
                insert(newVNode.val, container, anchor)
            }
        }else {
            lastIndex = j
        }
        break;
    }
}