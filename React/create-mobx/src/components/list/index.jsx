import React from 'react';
import counterStore from '../../store/counterStore';
import { observer } from 'mobx-react-lite'

const List = () => {
    return (
        <div>
            {JSON.stringify(counterStore.list)}
        </div>
    );
};

export default observer(List);