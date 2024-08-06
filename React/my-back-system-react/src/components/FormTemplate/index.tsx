import { Button, Col, Form, Row } from 'antd';
import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
} from 'react';
import CheckBox from './Checkbox';
import Input from './Input';
import InputNumber from './Number';
import Radio from './Radio';
import TextArea from './TextArea';
import Upload from './Upload';
import Select from './Select';
import './index.css';
// import { createState } from '../utils';

export type FormPropsOption = {
    label: string;
    type:
        | 'number'
        | 'checkbox'
        | 'radio'
        | 'input'
        | 'upload'
        | 'textarea'
        | 'select';
    valuename: string;
    hidden?: [];
    options?: unknown[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    widget?: any;
};
type FromProps = {
    options: FormPropsOption[];
    valueObject?: { [key: string]: unknown };
    items?: number;
    onSubmit?: (params: { [key: string]: unknown }) => void;
    onCancel?: () => void;
};
export type FormTemplateRef = {
    handleSubmit: () => void;
    reset: () => void;
};

const layout = {
    labelCol: { span: 5, offset: 0 },
    wrapperCol: { span: 18 },
    colon: true,
};

const View = forwardRef(function Component(props: FromProps, ref) {
    const [form] = Form.useForm();

    useImperativeHandle(ref, () => ({
        handleSubmit,
        reset,
    }));

    useEffect(() => {
        if (props.valueObject) {
            form.setFieldsValue(props.valueObject);
        } else {
            // const v = createState(props.options);
            // form.setFieldsValue(v);
        }
        return () => {
            form.setFieldsValue({});
        };
    }, [form, props.options, props.valueObject]);
    /**
     * @description: 当组件进行操作的回调函数，负责将value和key传回
     * @param {unknown} value 对象的value
     * @param {string} key 对象的key
     * @return {*}
     */
    const handleChange = useCallback(
        (value: unknown, key: string) => {
            if (!key) return;
            form.setFieldValue(key, value);
        },
        [form],
    );

    /**
     * @description: FromItem 是否需要展示label
     * @param {string} label 字符串label
     * @return {string} FormItem样式
     */
    const needLabel = useCallback((label: string) => {
        if (label && label.replace(' ', '')) {
            return '';
        }
        return 'no-label';
    }, []);

    /**
     * @description: 根据type选择组件，并构造组件需要的props属性传给组件
     * @param {FormPropsOption} option 组件的配置参数
     * @param {number} index 组件的key值，保持树的唯一性
     * @return {Component} 返回合适的组件
     */
    const switchComponentByType = useCallback(
        (option: FormPropsOption, index: number) => {
            const { type, label, valuename, widget } = option;
            const value = form.getFieldValue(valuename);
            const componentProps = {
                ...widget,
                valuename,
                value,
                onChange: handleChange,
            };
            let com = null;
            switch (type) {
                case 'number': {
                    com = <InputNumber {...componentProps} />;
                    break;
                }
                case 'checkbox': {
                    com = (
                        <CheckBox
                            {...componentProps}
                            options={option.options}
                        />
                    );
                    break;
                }
                case 'radio': {
                    com = (
                        <Radio {...componentProps} options={option.options} />
                    );
                    break;
                }
                case 'input': {
                    com = <Input {...componentProps} />;
                    break;
                }
                case 'upload': {
                    com = <Upload {...componentProps} />;
                    break;
                }
                case 'textarea': {
                    com = <TextArea {...componentProps} />;
                    break;
                }
                case 'select': {
                    com = (
                        <Select {...componentProps} options={option.options} />
                    );
                    break;
                }
                default:
                    return null;
            }
            return (
                <Form.Item
                    label={label || ' '}
                    className={needLabel(label)}
                    key={index}
                    name={valuename}
                    rules={widget.rules}
                >
                    {com}
                </Form.Item>
            );
        },
        [form, handleChange, needLabel],
    );

    /**
     * @description: 提交表单
     * @return {*}
     */
    const handleSubmit = useCallback(() => {
        const { onSubmit, options } = props;
        const params: { [key: string]: unknown } = {};
        options?.forEach(({ hidden, valuename }) => {
            if (hidden) {
                const isHidden = hidden?.some(
                    ([k, v]: [string, unknown]) => form.getFieldValue(k) === v,
                );
                if (isHidden) return;
            }
            params[valuename] = form.getFieldValue(valuename);
        });
        onSubmit && onSubmit(params);
    }, [form, props]);
    /**
     * @description: 提交按钮
     * @return {Component} 提交按钮组件
     */

    const reset = useCallback(() => {
        // const v = createState(props.options);
        // form.setFieldsValue(v);
    }, [form, props.options]);

    const submit = useMemo(() => {
        return (
            <Form.Item
                wrapperCol={{
                    xs: { span: 18, offset: 10 },
                    sm: { span: 18, offset: 10 },
                }}
            >
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
                <Button style={{ marginLeft: 24 }} onClick={props?.onCancel}>
                    取消
                </Button>
            </Form.Item>
        );
    }, []);

    const renderItmes = useMemo(() => {
        const { options, items = 1 } = props;

        const coms = [];
        let length = 0;
        while (length <= options.length) {
            const [start, end] = [length, length + items];
            const currentArray = options.slice(start, end);
            const currentCom = (
                <Row>
                    {currentArray.map((item, index) => (
                        <Col key={index} span={24} lg={24 / items}>
                            {switchComponentByType(item, index)}
                        </Col>
                    ))}
                </Row>
            );
            length = end;
            coms.push(currentCom);
        }
        return coms.map((item) => item);
    }, [props, switchComponentByType]);

    return (
        <Form {...layout} form={form} onFinish={handleSubmit}>
            {renderItmes}
            {submit}
        </Form>
    );
});

export default View;
