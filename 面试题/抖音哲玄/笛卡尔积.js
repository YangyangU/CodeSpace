// 求两个数组的笛卡尔积
function cartesianProduct(A, B) {
    let result = [];
    for (let a of A) {
        for (let b of B) {
            result.push([a, b]);
        }
    }
    return result;
}

// 示例数据
const A = [1, 2];
const B = ['x', 'y'];

console.log(cartesianProduct(A, B));
function cartesianProductMultiple(...arrays) {
    return arrays.reduce((acc, curr) => {
        let result = [];
        for (let a of acc) {
            for (let b of curr) {
                result.push([...a, b]);
            }
        }
        return result;
    }, [[]]);
}

// 示例数据
const C = [1, 2];
const D = ['x', 'y'];
const E = ['a', 'b'];

console.log(cartesianProductMultiple(C, D, E));