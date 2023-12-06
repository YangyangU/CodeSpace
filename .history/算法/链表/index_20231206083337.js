let arr =[1,2,3,4,5,6,7,8]

let res ={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:null
        }
    }
}


function ListNode(){
    this.val=val;
    this.next=null;
}

const node1 =new ListNode(1)
node1.next =new ListNode(2)

//插入节点3
const node3 = new ListNode(3)
node3.next = node1.next;
node1.next = node3