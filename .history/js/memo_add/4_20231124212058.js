//动态规划
function fibonacci(n){
        let array = []
        array[0] = 1
        array[1] = 1
        for (let i = 2; i < array.length; i++) {
            array[i] = array[i-1]+array[i-2]
        }
        return array[n-1]
    }
console.log(fibonacci(4));