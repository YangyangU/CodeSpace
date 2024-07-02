// import React,{Component} from "react";

// class App extends Component{
//   constructor(){
//     super();
//     console.log("组件创建");
//     this.state={
//       name:"张三"
//     }
    
//   }
//   handleClick(){
//     this.setState({
//       name:"李四"
//     })
//   }
  
//   componentDidMount(){
//     console.log("组件加载完成");
//   }
//   componentWillUnmount(){
//     console.log("组件卸载");
//   }
//   componentDidUpdate(){
//     console.log("组件更新");
//   }
//   render(){
//     console.log("组件渲染");
//     return(
//       <div>
//         <h1 onClick={()=>this.handleClick()}>{this.state.name}</h1>
//       </div>
//     )
//   }
// }
// export default App;


// import { useState, useEffect } from 'react';
// import { Provider, Consumer} from "./provider";

// const ComponentB = () => {
//   return (
//     <Consumer>
//       {
//         value => (
//           <div>
//             <h1>底层组件--{value}</h1>
//           </div>
//         )
//       }
//     </Consumer>
//   );
// }

// const App = () => {
//   const value = "顶层组件的数据"
//   return (
//     <Provider value={value}>
//       <h1>顶层组件</h1>
//       <ComponentB/>
//     </Provider>
//   );
// };

import { useState } from "react";

function useToggle (){
  const [value,setValue] = useState(true);
  const toggle = () => {
    setValue(!value);
  }
  return [value,toggle];
}

const App = () => {
  const [value,toggle] = useToggle();
  return (
    <div>
      <h1>{value?"开":"关"}</h1>
      <button onClick={toggle}>按钮</button>
    </div>
  )
}
export default App;