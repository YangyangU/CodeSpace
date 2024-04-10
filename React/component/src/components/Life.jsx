import { Component, createRef } from 'react'

export default class Life extends Component {
  constructor() {
    super()
    console.log('Life constructor组件开始加载', this.ref);
    this.state = {
      count: 1
    }
    this.ref = createRef()
  }

  handlerClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    // this.state.count++
    // this.forceUpdate()
  }

  componentDidUpdate() {
    console.log('Life componentDidUpdate组件更新完成', this.ref);
  }

  componentDidMount() {
    console.log('Life componentDidMount组件挂载完成', this.ref);//只有挂载完成才能拿到DOM结构
  }

  componentWillUnmount() {
    console.log('Life componentWillUnmount组件卸载完成', this.ref);
  }

  shouldComponentUpdate() {
    console.log('Life shouldComponentUpdate组件是否需要更新', this.ref);
    return false//不更新
  }
  render() {
    console.log('Life render组件开始编译', this.ref);
    return (
      <div>
        <h4 ref={this.ref} onClick={() => this.handlerClick()}>{this.state.count}</h4>
      </div>
    )
  }
}
