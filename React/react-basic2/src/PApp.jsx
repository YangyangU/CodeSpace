import React, { Component } from 'react'
import PChild from './components/P-Child'

export default class PApp extends Component {
  callback = (newMsg)=>{
    console.log('父组件收到消息：', newMsg);
  }
  render() {
    return (
      <div>
        <h2>父组件</h2>
        <PChild cb={this.callback}></PChild>
      </div>
    )
  }
}
