function isEmpty(obj) {
    return Reflect.ownKeys(obj).length === 0;
    // for...in
    // return Object.keys(obj).length === 0;
    // return JSON.stringify(obj) === '{}';
}
console.log(isEmpty({ [Symbol('a')]: 1 })); // false
console.log(isEmpty({})); // true
console.log(isEmpty({ name: '123' })); // false