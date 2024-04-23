import { makeAutoObservable } from "mobx";

class TodoStore {
    list=[
        {id:1,name:'学习react',isDone:true},
        {id:2,name:'学习mobx',isDone:false},
    ]
    constructor(){
        makeAutoObservable(this)
    }

    checkItem(id){

    }
}

const todoStore = new TodoStore()

export default todoStore;