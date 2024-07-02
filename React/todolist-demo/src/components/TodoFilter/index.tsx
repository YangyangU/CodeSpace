import React from 'react';

const TodoFilter = ({setFilter}:{setFilter:(status:string)=>void}) => {
    return (
        <div>
            <button onClick={()=>setFilter('all')}>全部</button>
            <button onClick={()=>setFilter('active')}>待做</button>
            <button onClick={()=>setFilter('completed')}>完成</button>
        </div>
    );
};

export default TodoFilter;