import React from 'react';

const BrotherA = (props) => {
    const msg = 'A组件的数据'
    
    const handler = ()=>{
        props.cb(msg)
    }
    return (
        <div>
            <h4>子组件A</h4>
            <button onClick={handler}>发送</button>
        </div>
    );
};

export default BrotherA;