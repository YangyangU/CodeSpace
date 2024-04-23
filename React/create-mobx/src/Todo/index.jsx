import React from 'react';
import './index.css'
import { observer, useStore } from '../store';
import { useState } from 'react';

const Todo = () => {
  const { todoStore } = useStore();
  const [ msg, setMsg ] = useState('');

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setMsg(e.target.value);
  };
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
          value={msg}
          onChange={(e)=>handleInputChange(e)}
          onKeyDown={(e)=>{
            if(e.key === 'Enter'&& msg!==''){
              todoStore.addTodo(msg);
              setMsg('');
            }
          }}
        />
      </header>

      <section className="main">
        {/* 全选 */}
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onClick={()=>todoStore.toggleAll()}
        />
        <label htmlFor="toggle-all"></label>

        <ul className="todo-list">
          {
            todoStore.list.map(item => {
              return (
                <li className={`todo ${item.isDone ? "completed" : ""}`} key={item.id}>
                  <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked={item.isDone} onClick={()=>todoStore.toggleTodo(item.id)}/>
                    <label >{item.name}</label>
                    <button className="destroy" onClick={() => todoStore.deleteTodo(item.id)}></button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </section>
    </section>
  );
};

export default observer(Todo);