// 定义一个抽象类
class Animal {
    speak() {
      throw new Error('方法必须被实现');
    }
  }
  
  // 实现具体的类
  class Dog extends Animal {
    speak() {
      return '汪汪!';
    }
  }
  
  class Cat extends Animal {
    speak() {
      return '喵喵!';
    }
  }
  
  // 实现工厂方法
  class AnimalFactory {
    createAnimal() {
        return new Error("未实现")
    }
  }
  
  class ConcreteFactoryDog extends AnimalFactory {
     createAnimal(){
         return new Dog();
     }
  }
  
  class ConcreteFactoryCat extends AnimalFactory {
     createAnimal(){
         return new Cat();
     }
  }
  
  const dog = new ConcreteFactoryDog()
  console.log(dog.createAnimal().speak()); // 汪汪!
  const cat = new ConcreteFactoryCat()
  console.log(cat.createAnimal().speak()); // 喵喵!