class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// 观察者接口
class Observer {
    update(data) {
        throw new Error("未实现");
    }
}

// 具体观察者
class ConcreteObserverA extends Observer {
    update(data) {
        console.log(`ConcreteObserverA: 对${data}做出响应`);
    }
}

class ConcreteObserverB extends Observer {
    update(data) {
        console.log(`ConcreteObserverB: 对${data}做出响应`);
    }
}

const subject = new Subject();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

subject.addObserver(observerA);
subject.addObserver(observerB);

subject.notifyObservers('事件1'); // ConcreteObserverA: 对事件1做出响应
                                  // ConcreteObserverB: 对事件1做出响应
subject.removeObserver(observerA);
subject.notifyObservers('事件2'); // 输出: ConcreteObserverB: 对事件2做出响应