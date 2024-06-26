## 标记清除（Mark-and-Sweep）
工作原理：
标记阶段：从根对象（如全局对象）出发，递归地标记所有可达的对象。
清除阶段：遍历堆中的所有对象，删除未标记的对象，将它们的内存释放。

性能：
时间复杂度：标记阶段和清除阶段的时间复杂度都是 O(n)，其中 n 是堆中的对象数量。
优点：
- 不会因为循环引用而导致内存泄漏。
- 能够处理复杂的对象关系。
缺点：
- 整个过程需要暂停程序的执行（stop-the-world），尤其在堆内存很大时可能导致明显的卡顿。
- 清除阶段可能会造成堆内存的碎片化，影响后续的内存分配效率。

## 引用计数（Reference Counting）
工作原理：
- 每个对象维护一个引用计数器，记录有多少个其他对象引用了它。
- 当一个对象的引用计数变为零时，它的内存可以立即被回收。
性能：
- 时间复杂度：引用计数的更新是一个常数时间操作 O(1)。
优点：
- 具有即时回收的特性，当对象的引用计数变为零时，内存会立刻被释放，不需要等待整个垃圾回收周期。
- 不会导致程序长时间的暂停。
缺点：
- 无法处理循环引用，即两个对象相互引用但不再被其他对象引用时，计数器不会变为零，导致内存泄漏。
- 维护引用计数器会增加一定的开销，特别是在频繁创建和销毁对象的情况下。

## 性能对比
时间开销：
标记清除：较高的时间开销，因为需要遍历和标记整个对象图。
引用计数：低时间开销，因为每次引用改变时只需更新计数器。

暂停时间：
标记清除：可能导致较长的暂停时间，尤其在堆内存很大时。
引用计数：没有明显的暂停时间，垃圾回收是分散进行的。

内存管理：
标记清除：可能会造成内存碎片化。
引用计数：即时回收，通常不会造成内存碎片。

## 总结
标记清除适用于需要处理复杂对象关系的场景，虽然会导致暂停时间较长，但能够有效避免循环引用问题。
引用计数适用于对实时性要求较高的场景，能够即时回收内存，但需要额外处理循环引用问题。