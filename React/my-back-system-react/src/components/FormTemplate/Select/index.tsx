import React, { useCallback } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

type DropdownProps = {
    valuename: string;
    value: string | undefined;
    onChange: (val: string | undefined, key: string) => void;
    label: string;
    options: SelectProps['options'];
};

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
    const handleChange = useCallback(
        (value: string | undefined) => {
            const { onChange, valuename } = props;
            onChange && onChange(value, valuename);
        },
        [props],
    );

    return (
        <Select
            {...props}
            mode="multiple"
            value={props.value}
            onChange={handleChange}
            options={props.options}
            optionRender={(item) => <span>{item.data.value}</span>}
        ></Select>
    );
};

export default Dropdown;
