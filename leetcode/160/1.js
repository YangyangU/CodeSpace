var getIntersectionNode = function(headA, headB) {
    let pA = headA, pB = headB;
    let lenA = 0, lenB = 0;
    while (pA) {
        lenA++;
        pA = pA.next;
    }
    while (pB) {
        lenB++;
        pB = pB.next;
    }
    pA = headA;
    pB = headB;
    let diff = Math.abs(lenA - lenB);
    if (lenA > lenB) {
        while (diff--) {
            pA = pA.next;
        }
    } else {
        while (diff--) {
            pB = pB.next;
        }
    }
    while (pA && pB) {
        if (pA === pB) {
            return pA;
        }
        pA = pA.next;
        pB = pB.next;
    }
    return null;
 };

 
 var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA;
    while (pA) {
        let pB = headB;

        while (pB) {
            if (pA === pB) return pA;
            pB = pB.next;
        }

        pA = pA.next;
    }
};
