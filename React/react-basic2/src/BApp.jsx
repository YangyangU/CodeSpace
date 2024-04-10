import BrotherA from "./components/BrotherA";
import BrotherB from "./components/BrotherB";
import React from "react";

// const BApp = () => {
//     let message = '111'

//     const fn = (newMsg)=>{
//         console.log("父组件收到消息",newMsg);
//         message = newMsg;
//     }
//     return (
//         <div>
//             <h2>父组件</h2>
//             <BrotherA cb={fn}></BrotherA>
//             <BrotherB msg={message}></BrotherB>
//         </div>
//     );
// };

// const { Provider, Consumer } = React.createContext()//创建一个上下文对象

import { Provider } from "../src/provider";

class BApp extends React.Component {
    state = {
        message: 'awdawdw'
    }
    fn = (newMsg) => {
        console.log("父组件收到消息", newMsg);
        this.setState({
            message: newMsg
        })
    }
    render() {
        return (
            <Provider value={this.state.message}>
                <div>
                    <h2>父组件</h2>
                    {/* <BrotherA cb={this.fn}></BrotherA> */}
                    {/* <BrotherB msg={this.state.message}></BrotherB> */}
                    <BrotherB></BrotherB>
                </div>
            </Provider>
        )
    }
}

export default BApp;