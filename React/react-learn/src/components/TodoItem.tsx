import React from 'react';

interface TodoItem {
    id: number;
    text: string;
}

const TodoItem = (props:{list:TodoItem[], handleDelete: (id: number) => void}) => {
    return (
        <div>
            <ul>
                {
                    props.list.map((item: TodoItem) => {
                        return (
                            <li key={item.id}>
                                {item.text}&nbsp;
                                <button onClick={()=>{props.handleDelete(item.id)}}>x</button>
                            </li>
                        );
                    })
                }
            </ul>

        </div>
    );
};


export default TodoItem;