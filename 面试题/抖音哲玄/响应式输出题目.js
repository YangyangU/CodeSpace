const state = reactive({
    a: 1, b: 2, c: 3
})

watch(() => {
    console.log(state.a, state.b); //关联条件是 1.读到了(套了层函数也无妨)，state.c = 5 赋值不算读到了 2.是响应式数据 3.对象的成员（属性）
    return state.a + state.b
}, (newVal) => {
    console.log(newVal * 2)
})

setTimeout(() => {
    state.a++
    state.b--
}, 1000)

// 输出: 3 3
// 解释: watch接受两个函数，第一个函数关联的数据变化（此时函数一关联state.a和state.b），函数一重新执行；函数一返回值变化，函数二重新执行