let obj = {
    age : 18
};

Object.defineProperty(obj, 'age', {
    get() {
        console.log('访问了');
        return obj.age
    },
    set(newVal) {
        console.log('修改了');
        age = newVal
    }
});

console.log(obj.age);

