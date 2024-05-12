// 发布订阅模式
class EventEmitter {
  constructor() {
    this.listeners = {};//创建一个空对象，用于存储订阅的事件和对应的监听器数组
  }

  // 订阅事件
  on(event, callback) {
    // 如果事件还没有被订阅过，先创建一个空数组
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    // 将回调函数添加到事件对应的监听器数组中
    this.listeners[event].push(callback);
  }

  // 发布事件
  emit(event, ...args) {
    // 如果事件有监听器，遍历监听器数组，并将事件参数传递给每个回调函数
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => callback(...args));
    }
  }
}

// 使用示例
const button = new EventEmitter();

// 订阅事件
button.on("click", () => {
  console.log("Button clicked");
});

// 发布事件
button.emit("click");