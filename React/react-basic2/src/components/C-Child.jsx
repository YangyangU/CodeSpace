import React, { Component } from 'react'

//类编程
// export default class CChild extends Component {
//   render() {
//     return (
//       <div>
//         <h4>子组件</h4>
//         <p>{this.props.msg}</p>
//       </div>
//     )
//   }
// }

//函数式编程
function CChild(props){
    console.log(props);
    // props.msg = '修改父组件的值';//不能修改props

    props.cb()

    return (
        <div>
            <h4>子组件</h4>
            <p>{props.msg}</p>
        </div>
    )
}

export default CChild