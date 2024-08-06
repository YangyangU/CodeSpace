import { Input } from 'antd';
import React, { ChangeEvent, useCallback } from 'react';

type TextAreaProps = {
    valuename: string;
    value: string | number;
    onChange: (val: string | number, key: string) => void;
    label: string;
};

const View: React.FC<TextAreaProps> = (props: TextAreaProps) => {
    const handleSelect = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { value } = e.target;
            const { onChange, valuename } = props;
            onChange && onChange(value, valuename);
        },
        [props],
    );
    return <Input.TextArea {...props} onChange={handleSelect} />;
};

export default View;
