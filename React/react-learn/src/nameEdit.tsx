import * as React from 'react';

interface Props{
    userName:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
const NameEditComponent:React.FC<Props> = (props)=>{
    return (
        <div>
            <label>Updata name:</label>
            <input value={props.userName} onChange={props.onChange} />
        </div>
    )
}

export default NameEditComponent