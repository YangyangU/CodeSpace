import React from "react";
import ExitComponent from "./components/ExitComponent";
import ClassComponent from "./components/ClassComponent";

function HelloReact(){//组件名一定要大写
    const handler = (e)=>{
        console.log('click',e);
    }
    return <div>
        <p>这是一个函数组件</p>
        <button onClick={handler}>click me</button>
    </div>
}


class HelloVue extends React.Component{
    render(){
        return <div>这是一个类组件</div>
    }
}

function App(){
    return (
        <div className="app">
            {/* {
                HelloReact()
            } */}
            <HelloReact></HelloReact>
            <HelloVue></HelloVue>
            <hr />
            <ExitComponent></ExitComponent>
            <ClassComponent></ClassComponent>
        </div>
    )
}

export default App;