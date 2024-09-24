class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.data = {}; // 可存储的共享数据
    }
    getData() {
        return this.data;
    }
    setData(key, value) {
        this.data[key] = value;
    }
}

const instance1 = new Singleton();
instance1.setData('name', 'Singleton Pattern');

const instance2 = new Singleton();
console.log(instance2.getData()); // 输出: { name: 'Singleton Pattern' }
console.log(instance1 === instance2); // 输出: true，表明两者是同一个实例