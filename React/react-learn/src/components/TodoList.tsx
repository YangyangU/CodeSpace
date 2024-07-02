import React from 'react';
import TodoItem from './TodoItem';
import { useState } from 'react';

const TodoList = () => {
    const [list,setList] = useState([
        { id: 1, text: 'eat' },
        { id: 2, text: 'sleep' },
        { id: 3, text: 'code' },
    ])
    let [msg, setMsg] = useState('');
    const handleAdd=(value: any)=>{
        setList([...list,{id:list.length+1,text:value}])
        setMsg('')
    }
    const handleDelete=(id: number)=>{
        setList(list.filter((item)=>item.id!==id))
    }
    return (
        <div>
            <input type="text" value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
            <button onClick={()=>{handleAdd(msg)}}>添加</button>
            <br />
            <TodoItem list={list} handleDelete={handleDelete}/>
        </div>
    );
};

export default TodoList;