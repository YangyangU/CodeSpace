import React, { Component } from 'react'

export default class PChild extends Component {
state = {
    msg:'子组件的数据'
}
handler = ()=>{
    // console.log(this.props.cb);
    this.props.cb(this.state.msg)
}

  render() {
    return (
      <div>
        <h4>子组件</h4>
        <button onClick={this.handler}>传递</button>
      </div>
    )
  }
}
