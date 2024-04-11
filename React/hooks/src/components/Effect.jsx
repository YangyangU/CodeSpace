import { useEffect, useState} from 'react';

const Effect = () => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState('Tom');

    //副作用
    useEffect(() => {//代码重新加载，导致很多定时器被重复创建
        // console.log(`当前点击了${count}次`);
        const timer = setInterval(() => {
            setCount(count + 1);
        },1000)

        return () => {//return 函数清除副作用
            console.log('组件卸载了');
            clearInterval(timer);
        }
    },[count])//依赖项

    useEffect(() => {
        console.log(`name变成了${name}`);
    },[name])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <button onClick={() => setName('Mike')}>{name}</button>
        </div>
    );
};

export default Effect;