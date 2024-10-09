在 React 类组件中，父类是 React.Component，其构造函数依赖 props 来初始化 this.props。

- 如果你使用 super()，则 this.props 不会被初始化，尝试访问 this.props 会返回 undefined。
- 如果你使用 super(props)，则 this.props 会被正确初始化，你可以在构造函数中安全地使用 this.props