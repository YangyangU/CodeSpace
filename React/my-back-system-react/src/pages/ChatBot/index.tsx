import React, { useState, useEffect } from 'react';
import './index.css';
import { getMessage } from '@/api';
import { Input, Button, ConfigProvider, Form } from 'antd';
import {
    ArrowUpOutlined,
    PaperClipOutlined,
    LoadingOutlined,
} from '@ant-design/icons';

interface ChatMessage {
    sender: 'user' | 'ai';
    content: string;
}

const View: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        return savedMessages
            ? JSON.parse(savedMessages)
            : [{ sender: 'ai', content: '你好！我是聊天助手。' }];
    });
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    const handleSubmit = async () => {
        if (inputValue.trim() === '') return;
        const userMessage: ChatMessage = {
            sender: 'user',
            content: inputValue,
        };
        setMessages([...messages, userMessage]);
        setInputValue('');
        setLoading(true);
        try {
            const data = await getMessage(inputValue);
            const aiMessage: ChatMessage = {
                sender: 'ai',
                content: data.res,
            };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);
        } catch (error) {
            const errorMessage: ChatMessage = {
                sender: 'ai',
                content: '对不起，无法访问服务器',
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ai-container">
            <div className="chat-container">
                {messages.map((message, index) => (
                    <div key={index} style={{ display: 'flex' }}>
                        <div
                            className={
                                message.sender === 'user'
                                    ? 'user-avatar'
                                    : 'ai-avatar'
                            }
                        ></div>
                        <div
                            className={`chat-message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
                        >
                            <p>{message.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="userOption">
                <ConfigProvider
                    theme={{
                        components: {
                            Input: {
                                activeBorderColor: '#ffffff',
                                hoverBorderColor: '#ffffff',
                            },
                        },
                    }}
                >
                    <div className="search">
                        <PaperClipOutlined />
                        <Form onFinish={handleSubmit}>
                            <Input
                                variant="borderless"
                                style={{ width: '300px', marginRight: '10px' }}
                                placeholder="给 Chat Bot 发送消息"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                disabled={loading}
                            />
                            <Button
                                shape="circle"
                                htmlType="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <LoadingOutlined />
                                ) : (
                                    <ArrowUpOutlined />
                                )}
                            </Button>
                        </Form>
                    </div>
                </ConfigProvider>
            </div>
        </div>
    );
};

export default View;
