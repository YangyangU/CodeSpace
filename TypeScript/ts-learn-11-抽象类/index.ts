//基类 抽象类
abstract class Vue {
    name:string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
    abstract init(name:string):void
}

class React extends Vue{
    init(name:string):void{
        console.log('react init')
    }
}