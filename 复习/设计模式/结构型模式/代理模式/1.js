// 抽象组件类
class Component {
    operation() {
      throw new Error("未实现");
    }
  }
  
  // 具体组件类
  class ConcreteComponent extends Component {
    operation() {
      return 'ConcreteComponent：具体操作'
    }
  }
  
  // 抽象装饰器类
  class Decorator extends Component {
    constructor(component) {
      super();
      this.component = component;
    }
  
    operation() {
      this.component.operation();
    }
  }
  
  // 具体装饰器类
  class ConcreteDecoratorA extends Decorator {
    operation() { 
      super.operation();
      return 'ConcreteDecoratorA：添加操作'
    }
  }
  
  class ConcreteDecoratorB extends Decorator {
    operation() { 
      super.operation();
      return 'ConcreteDecoratorB：添加操作'
    }
  }
  
  // 使用装饰器组合对象
  const component = new ConcreteComponent();
  console.log(component.operation()); // ConcreteComponent：具体操作
  const decoratorA = new ConcreteDecoratorA(component);
  console.log(decoratorA.operation()); // ConcreteDecoratorA：添加操作
  const decoratorB = new ConcreteDecoratorB(decoratorA);
  console.log(decoratorB.operation()); // 'ConcreteDecoratorB：添加操作'