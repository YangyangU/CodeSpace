1. JSX 转换为 JavaScript：JSX 通过 Babel 转为 React.createElement 调用。
2. 创建虚拟 DOM（包含元素的类型、属性、子节点）：React.createElement 生成描述 UI 结构的虚拟 DOM 对象。
3. 构建虚拟 DOM 树：React 递归地创建组件的虚拟 DOM 树。
4. 映射到真实 DOM（调和）：虚拟 DOM 树通过 Reconciler 映射为真实 DOM。
5. Diff 算法：更新时 React 使用 diff 算法找出变化并高效更新 DOM。