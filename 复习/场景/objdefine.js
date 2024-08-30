let value = 1;

Object.defineProperty(globalThis, 'a', {
  get() {
    return value++;
  },
  configurable: true
});

console.log(a === 1 && a === 2 && a === 3); // true