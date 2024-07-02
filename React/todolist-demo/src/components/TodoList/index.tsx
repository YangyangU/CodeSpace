import React, { useState } from 'react';

const TodoList = ({ addTodo }:{ addTodo: (content: string) => void}) => {
    const [content, setContent] = useState('');
    const handleClick =()=>{
        if(!content) return;
        addTodo(content);
        setContent('');
    }
    return (
        <div>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={handleClick}>添加</button>
        </div>
    );
};

export default TodoList;