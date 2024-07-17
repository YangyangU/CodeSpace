import React from 'react';

interface InputProps {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({placeholder,value,onChange}) => {
    return (
        <div>
            <h1>Input</h1>
            <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;