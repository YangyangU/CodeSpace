// import List from "./components/List";
// import Page from "./components/Page";
// import Life from "./components/Life";

import TodoList from "./todoList/TodoList";


const App = () => {
  // const colors = [
  //   {id:1,name:'Red'},
  //   {id:2,name:'Green'},
  //   {id:3,name:'Blue'}
  // ]
  return (
    <div>
      <h2>Hello react</h2>
      {/* <List colors={colors} fn={()=>{}} obj={{name:'tom'}}></List> */}
      {/* <Page page={100}></Page> */}
      {/* <Life></Life> */}
      <TodoList></TodoList>
    </div>
  );
};

export default App;