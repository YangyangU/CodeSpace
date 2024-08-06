import { InputNumber } from 'antd';
import React, { useCallback } from 'react';

type NumberProps = {
    valuename: string;
    value: number;
    onChange: (val: number | string | null, key: string) => void;
    label: string;
};

const View: React.FC<NumberProps> = (props: NumberProps) => {
    const handleChange = useCallback(
        (value: number | null) => {
            const { onChange, valuename } = props;
            onChange && onChange(value, valuename);
        },
        [props],
    );
    return <InputNumber {...props} onChange={handleChange} width="100%" />;
};

export default View;
