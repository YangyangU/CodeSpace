import React from 'react';
import { todo } from '../../type/todo';

const TodoItem = ({ todos,delTodo,toggleTodo }: { todos: todo[], delTodo: (id: number) => void, toggleTodo: (id: number) => void}) =>{
    return (
        <ul>
            {
                todos.map(todo => (
                    <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}} key={todo.id}>{todo.content}<button onClick={()=>toggleTodo(todo.id)}>已完成</button><button onClick={()=>delTodo(todo.id)}>x</button></li>
                ))
            }
        </ul>
    );
};

export default TodoItem;