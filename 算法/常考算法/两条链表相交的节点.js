var getIntersectionNode = function(headA, headB) {
    const arr = []
    let currentNode = headA;
    while (currentNode !== null) {  
        arr.push(currentNode);
        currentNode = currentNode.next;  
    }  
    currentNode = headB;  
    while (currentNode !== null) {  
        if (arr.includes(currentNode)) {  
            return currentNode;  
        }  
        currentNode = currentNode.next;  
    }  
    return null; 
};