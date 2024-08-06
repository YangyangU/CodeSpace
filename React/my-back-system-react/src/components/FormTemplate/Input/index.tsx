import { Input } from 'antd';
import React, { ChangeEvent, useCallback } from 'react';
// import './index.scss'

type InputProps = {
    valuename: string;
    value: string | ReadonlyArray<string> | number | undefined;
    onChange: (
        val: string | ReadonlyArray<string> | number | undefined,
        key: string,
    ) => void;
    label: string;
};

const View: React.FC<InputProps> = (props: InputProps) => {
    const handleSelect = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { value } = e.target;
            const { onChange, valuename } = props;
            onChange && onChange(value, valuename);
        },
        [props],
    );
    return <Input {...props} onChange={handleSelect} />;
};

export default View;
