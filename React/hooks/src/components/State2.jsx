/* eslint-disable react/prop-types */
import {useState} from 'react';

const State2 = (props) => {
    let [n] = useState(2)
    let [count,setCount] = useState(()=>{//默认值需要被计算
        return props.num * n
    });
    return (
        <div>
            <button onClick={() => setCount(count+1)}>{count}</button>
        </div>
    );
};

export default State2;