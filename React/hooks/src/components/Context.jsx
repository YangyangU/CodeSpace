import ContextChild from './ContextChild';
import { useContext } from 'react';
import Con from '../_context';
const Context = () => {
    const msg = useContext(Con);
    return (
        <div>
            <h2>Context --- {msg}</h2>
            <ContextChild></ContextChild>
        </div>
    );
};

export default Context;