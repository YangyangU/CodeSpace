// 原型接口
class Prototype {
    clone() {
        throw new Error("This method should be overridden.");
    }
}

// 具体原型
class ConcretePrototype extends Prototype {
    constructor(value) {
        super();
        this.value = value;
    }

    clone() {
        return new ConcretePrototype(this.value);
    }
}

// 使用示例
const original = new ConcretePrototype('Original Value');
const clone = original.clone();

console.log(original.value); // 输出: Original Value
console.log(clone.value); // 输出: Original Value

// 修改克隆对象的值
clone.value = 'Cloned Value';

console.log(original.value); // 输出: Original Value
console.log(clone.value); // 输出: Cloned Value
