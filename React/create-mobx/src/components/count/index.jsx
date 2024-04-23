import React from 'react';
import counterStore from '../../store/counterStore';
import { observer } from 'mobx-react-lite'

const Count = () => {
    return (
        <div>
            <button onClick={()=>counterStore.addCount()}>{counterStore.count}</button>
            <ul>
                {/* {
                    counterStore.newList.map(item=>{
                        return <li key={item}>{item}</li>
                    })
                } */}
                {JSON.stringify(counterStore.list)}
                <br />
                {JSON.stringify(counterStore.newList)}
            </ul>
            <button onClick={()=>counterStore.pushList()}>push</button>
        </div>
    );
};

export default observer(Count); //实时监听Count组件