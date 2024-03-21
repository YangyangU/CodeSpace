//facebook  JS way
//React 哲学 能用JS表达的就不要用API Way 不用学那么多API
//函数就是组件
//hooks 驱动
import * as React from "react";

import Hello from './hello'
import NameEditComponent from "./nameEdit";
function App() {
  //reactive Hooks函数 
  const [name, setName] = React.useState("initialName")
  const obj = {a:1} //model
  //JS中写HTML
  //JSX 是React表示模版的创新写法，在JS里面写HTML
  const setUsernameState = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value);
  }
  return (
    //view
    <>
      <div>
        App
        {obj.a}
        <Hello userName={name}></Hello>
        <NameEditComponent userName={name} onChange={setUsernameState}></NameEditComponent>
      </div>
    </>
  )
}

export default App
