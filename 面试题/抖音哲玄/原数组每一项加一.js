const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map 新数组
arr.map((item) => item + 1);
console.log(arr);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach 可以吗
arr2.forEach((item, index) => {
    arr2[index] = item + 1;
})
console.log(arr2);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for 循环可以 
for (let i = 0; i < arr3.length; i++) {
    arr3[i] = arr3[i] + 1;
}
console.log(arr3);