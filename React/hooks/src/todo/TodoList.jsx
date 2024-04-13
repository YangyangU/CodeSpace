import TodoItem from './TodoItem'
import { Input, Button } from 'antd';
import { useState } from 'react';

// 父组件
const TodoList = () => {
  let [data,setData] = useState([
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ])
  let [item, setItem] = useState('');

  const handleAdd = () => {
    setData([...data,item])
    setItem('')
  }

  const handleDelete = (index) => {
    setData(data.filter((item,i) => i!==index))
  }
  return (
    <div style={{width: '400px'}}>
      <header style={{display: 'flex'}}>
        <Input placeholder="今天要干什么呢？" value={item} onChange={(e) => setItem(e.target.value)}/>
        <Button onClick={()=>handleAdd()}>添加</Button>
      </header>
      <section>
        <TodoItem data={data} handleDelete={handleDelete}></TodoItem>
      </section>
    </div>
  );
};

export default TodoList;