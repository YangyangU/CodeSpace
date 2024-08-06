import React from 'react';
import {
    Form,
    Input,
    Select,
    DatePicker,
    Radio,
    Cascader,
    InputNumber,
} from 'antd';
import { FormItemType } from '@/pages/User/data';
import type { CascaderProps, GetProp } from 'antd';
import PinyinMatch from 'pinyin-match';

type DefaultOptionType = GetProp<CascaderProps, 'options'>[number];

const View: React.FC<{ item: FormItemType }> = ({ item }) => {
    const renderFormItem = () => {
        const filter = (inputValue: string, path: DefaultOptionType[]) =>
            path.some(
                (option) =>
                    (option.label as string)
                        .toLowerCase()
                        .indexOf(inputValue.toLowerCase()) > -1 ||
                    PinyinMatch.match(option.label as string, inputValue),
            );
        switch (item.type) {
            case 'input':
                return <Input placeholder={item.placeholder} />;
            case 'number':
                return (
                    <InputNumber
                        style={{ width: 354 }}
                        placeholder={item.placeholder}
                    />
                );
            case 'select':
                return (
                    <Select placeholder={item.placeholder}>
                        {item.options?.map((option) => (
                            <Select.Option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </Select.Option>
                        ))}
                    </Select>
                );
            case 'radio':
                return (
                    <Radio.Group>
                        {item.options?.map((option) => (
                            <Radio key={option.value} value={option.value}>
                                {option.label}
                            </Radio>
                        ))}
                    </Radio.Group>
                );
            case 'date':
                return (
                    <DatePicker
                        style={{ width: 354 }}
                        placeholder={item.placeholder}
                        format={item.format}
                    />
                );
            case 'cascader':
                return (
                    <Cascader
                        options={item.options}
                        placeholder={item.placeholder}
                        showSearch={{ filter }}
                    />
                );
            default:
                return null;
        }
    };
    return (
        <>
            <Form.Item label={item.label} name={item.name} rules={item.rules}>
                {renderFormItem()}
            </Form.Item>
        </>
    );
};

export default View;
