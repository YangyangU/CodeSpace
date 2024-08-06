import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Card, Table, Popconfirm, Modal } from 'antd';
import type { TableColumnsType } from 'antd';
import './index.css';
import { getUser, createUser, updateUser, deleteUser } from '@/api';
import { formItems } from './data';
import FormItem from '@/components/FormItem';
import dayjs from 'dayjs';

const User: React.FC = () => {
    const [form] = Form.useForm();
    const [userList, setUserList] = useState<userType[]>([]);
    const [modalType, setModalType] = useState<modalType>('add');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState<string>('');

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleClick = (type: string, rowData?: userType) => () => {
        switch (type) {
            case 'add':
                showModal();
                setModalType('add');
                break;
            case 'edit':
                showModal();
                setModalType('edit');
                form.setFieldsValue(transform(rowData as userType));
                break;
            case 'delete':
                deleteUser(rowData as userType).then(() => {
                    getTableData();
                });
                break;
            default:
                break;
        }
    };
    const handleFinish = (e: { keyword: string }) => {
        getTableData(e.keyword);
    };

    const transform = (data: userType) => {
        const cloneData = JSON.parse(JSON.stringify(data));
        cloneData.birth = dayjs(cloneData.birth);
        cloneData.addr = (cloneData.addr as string).split(' ');
        return cloneData;
    };

    useEffect(() => {
        getTableData();
    }, []);

    const getTableData = (param?: string) => {
        getUser(param).then(({ list }) => {
            setUserList(list);
        });
    };

    const handleOk = () => {
        //表单校验
        form.validateFields()
            .then((values) => {
                handleCancel();
                if (modalType === 'add') {
                    values.birth = dayjs(values.birth).format('YYYY-MM-DD');
                    values.addr = values.addr.join(' ');
                    createUser(values).then(() => {
                        getTableData();
                    });
                } else {
                    values.birth = dayjs(values.birth).format('YYYY-MM-DD');
                    values.addr = values.addr.join(' ');
                    updateUser(values).then(() => {
                        getTableData();
                    });
                }
            })
            .catch(() => {
                console.log('校验失败');
            });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const columns: TableColumnsType = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            render: (val) => {
                return val == 1 ? '男' : '女';
            },
            key: 'sex',
        },
        {
            title: '出生日期',
            dataIndex: 'birth',
            key: 'birth',
        },
        {
            title: '地址',
            dataIndex: 'addr',
            key: 'addr',
        },
        {
            title: '操作',
            render: (rowData) => {
                return (
                    <div>
                        <Button
                            style={{ marginRight: '5px' }}
                            onClick={handleClick('edit', rowData)}
                        >
                            编辑
                        </Button>
                        <Popconfirm
                            title="提示"
                            description="确定删除吗？"
                            onConfirm={handleClick('delete', rowData)}
                            okText="确定"
                            cancelText="取消"
                        >
                            <Button type="primary" danger>
                                删除
                            </Button>
                        </Popconfirm>
                    </div>
                );
            },
            key: 'action',
        },
    ];

    return (
        <div className="user">
            <div className="flex-box">
                <Button type="primary" onClick={handleClick('add')}>
                    +新增
                </Button>
                <Form
                    layout="inline"
                    onValuesChange={handleFinish}
                    onFinish={handleFinish}
                >
                    <Form.Item name="keyword">
                        <Input
                            placeholder="请输入用户名"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary">
                            搜索
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Modal
                title={modalType === 'add' ? '新增用户' : '编辑用户'}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="确定"
                cancelText="取消"
            >
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    labelAlign="left"
                    form={form}
                >
                    <Form.Item name="id" hidden></Form.Item>
                    {formItems.map((item) => (
                        <FormItem key={item.name} item={item} />
                    ))}
                </Form>
            </Modal>
            <Card>
                <Table dataSource={userList} columns={columns}></Table>
            </Card>
        </div>
    );
};

export default User;
