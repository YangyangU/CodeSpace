import {useState} from "react";

const State = () => {

    const [count,setCount] = useState(10) //[value,setValue]

    const [title,setTitle] = useState("hello")

    // let num = 1  //块级作用域，不能用
    // if(num){
    //     const [flag,setFlag] = useState(true)
    // }

    const add = ()=>{
        setCount(count + 1) //count = count + 1
        setTitle(title + count) //字符串拼接

    }

    return (
        <div>
            <h4>title:{title}</h4>
            <button onClick={()=>add()}>{count}</button>
        </div>
    );
};

export default State;