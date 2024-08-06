import areaData from '@/assets/json/area.json';
import { transformData } from '@/utils/json';
import { Rule } from 'antd/lib/form';

export type FormItemType = {
    label: string;
    name: string;
    placeholder?: string;
    type: string;
    rules: Array<Rule>;
    options?: Array<OptionType>;
    format?: string;
};
interface OptionType {
    label: string;
    value: string | number;
    children?: OptionType[];
}

export const formItems: FormItemType[] = [
    {
        label: '姓名',
        name: 'name',
        type: 'input',
        placeholder: '请输入姓名',
        rules: [{ required: true, message: '请输入用户名' }],
    },
    {
        label: '年龄',
        name: 'age',
        type: 'number',
        placeholder: '请输入年龄',
        rules: [
            { required: true, message: '请输入年龄' },
            {
                type: 'number',
                min: 1,
                max: 100,
                message: '请输入1-100岁之间的数字',
            },
        ],
    },
    {
        label: '性别',
        name: 'sex',
        type: 'radio',
        placeholder: '请选择性别',
        rules: [{ required: true, message: '请选择性别' }],
        options: [
            { label: '男', value: 1 },
            { label: '女', value: 0 },
        ],
    },
    {
        label: '出生日期',
        name: 'birth',
        type: 'date',
        placeholder: '请选择生日',
        rules: [{ required: true, message: '请选择生日' }],
        format: 'YYYY-MM-DD',
    },
    {
        label: '地址',
        name: 'addr',
        type: 'cascader',
        placeholder: '请选择地址',
        rules: [{ required: true, message: '请输入地址' }],
        options: transformData([areaData]),
    },
];
