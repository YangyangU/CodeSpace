import { makeAutoObservable } from 'mobx';

class CounterStore {
    count = 0  //数据源
    list = [1,2,3,4,5]
    constructor(){
        makeAutoObservable(this) //当类中的属性值变更，就会触发组件更新
    }

    addCount =()=>{
        this.count++
    }

    get newList(){
        return this.list.map(item=>item*10)
    }

    pushList=()=>{
        this.list.push(7,8)
    }
}
const counterStore = new CounterStore()

export default counterStore