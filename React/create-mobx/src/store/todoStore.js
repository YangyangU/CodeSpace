import { makeAutoObservable } from "mobx";

class TodoStore {
    list=[
        {id:1,name:'学习react',isDone:true},
        {id:2,name:'学习mobx',isDone:false},
    ]
    constructor(){
        makeAutoObservable(this)
    }

    addTodo(msg){
        this.list.push({id:+new Date(),name:msg,isDone:false})
    }
    deleteTodo(id){
        this.list = this.list.filter(item=>item.id!==id)
    }
    toggleAll(){
        this.list.forEach(item=>item.isDone = true)
    }
    toggleTodo(id){
        this.list.forEach(item=>{
            if(item.id===id){
                item.isDone = !item.isDone
            }
        })
    }
}

const todoStore = new TodoStore()

export default todoStore;