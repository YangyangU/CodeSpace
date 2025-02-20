# React

- MVVM
- 组件化
- VDOM diff
- 响应式

看两三天就能上手

# 性能优化
## 减少不必要的渲染
  1. 状态修改导致重新渲染
  2. 父组件重新渲染导致子组件重新渲染
   - state
   - props
   - context
   - hooks
## hooks优化渲染
  1. 减少重复渲染的次数，避免不必要的重新渲染（React.memo、useCallback）
  2. 对于复杂的计算，尽可能缓存计算的结果（useMemo）
    - React.memo —— 它会使用 Object.is 对前后两个 props 做浅比较
    - useMemo —— 只有当依赖项改变时才会重新计算
    - useCallback —— 只有当依赖项改变时才会重新创建函数
        ```js
        const Parent = () => {
        const handleClick = useCallback(() => {
            console.log('Button clicked');
        }, []); // 缓存函数引用
        return <Child onClick={handleClick} />;
        };
        ```