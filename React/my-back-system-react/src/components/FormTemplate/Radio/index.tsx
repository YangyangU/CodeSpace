import { CheckboxOptionType, Radio, RadioChangeEvent } from 'antd';
import React, { useCallback } from 'react';
// import './index.scss'

type RadioProps = {
    valuename: string;
    value: string | number | boolean;
    onChange: (val: unknown, key: string) => void;
    options: Array<CheckboxOptionType | string | number>;
    label: string;
};

const View: React.FC<RadioProps> = (props: RadioProps) => {
    const handleSelect = useCallback(
        (e: RadioChangeEvent) => {
            const { value } = e.target;
            const { onChange, valuename } = props;
            onChange && onChange(value, valuename);
        },
        [props],
    );
    return (
        <Radio.Group
            onChange={handleSelect}
            value={props.value}
            options={props.options}
        />
    );
};

export default View;
