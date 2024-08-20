import React, { useState } from 'react';
import './index.css';
import { getMessage } from '@/api/chat';

interface ChatMessage {
    sender: 'user' | 'ai';
    content: string;
}

const View: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { sender: 'ai', content: '你好！我是聊天助手。' },
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async () => {
        if (inputValue.trim() === '') return;

        const userMessage: ChatMessage = {
            sender: 'user',
            content: inputValue,
        };
        setMessages([...messages, userMessage]);

        setInputValue('');

        try {
            const data = await getMessage(inputValue);
            const aiMessage: ChatMessage = {
                sender: 'ai',
                content: data.value,
            };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);
        } catch (error) {
            const errorMessage: ChatMessage = {
                sender: 'ai',
                content: '对不起，无法访问服务器',
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
    };

    return (
        <div className="container">
            <div className="chat-container">
                {messages.map((message, index) => (
                    <div key={index}>
                        <div
                            className={`chat-message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
                        >
                            <p>{message.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="userOption">
                <input
                    type="text"
                    className="styled-input"
                    placeholder="输入内容..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="styled-button" onClick={handleSubmit}>
                    提交
                </button>
            </div>
        </div>
    );
};

export default View;
