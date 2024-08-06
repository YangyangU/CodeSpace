import { Checkbox, CheckboxProps as PropsType, CheckboxOptionType } from 'antd';
import React, { useCallback } from 'react';
// import './index.scss'

type CheckboxProps = {
    valuename: string;
    value: PropsType['value'];
    onChange: (e: unknown, key: string) => void;
    options: Array<CheckboxOptionType | string | number>;
    label: string;
};

const View: React.FC<CheckboxProps> = (props: CheckboxProps) => {
    const handleSelect = useCallback(
        (vals: PropsType['value']) => {
            const { onChange, valuename } = props;
            onChange && onChange(vals, valuename);
        },
        [props],
    );
    return (
        <Checkbox.Group
            onChange={handleSelect}
            value={props.value}
            options={props.options}
        />
    );
};

export default View;
