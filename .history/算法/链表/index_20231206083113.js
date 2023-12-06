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