import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tag, Space } from 'antd';
import './index.css';
import type { RootState, AppDispatch } from '@/store';
import { useSelector, useDispatch } from 'react-redux';
import { closeTab, setCurrentTab } from '@/store/reducers/tabs';

const View: React.FC = () => {
    const navigate = useNavigate();
    const tagList = useSelector((state: RootState) => state.tab.tagList);
    const currentTab = useSelector((state: RootState) => state.tab.currentTab);
    const dispatch: AppDispatch = useDispatch();
    const handleClose = (e: React.MouseEvent, item: TagType, index: number) => {
        if (tagList.length === 1) e.preventDefault();
        dispatch(closeTab(item));
        dispatch(setCurrentTab(tagList[index - 1]));
        navigate(tagList[index - 1].path);
    };
    const handleChange = (item: TagType) => {
        dispatch(
            setCurrentTab({
                path: item.path,
                label: item.label,
                name: item.name,
            }),
        );
        navigate(item.path);
    };
    const tagRender = (flag: boolean, item: TagType, index: number) => {
        return flag ? (
            <Tag
                style={{ cursor: 'pointer' }}
                color="#55acee"
                closeIcon={item.name !== 'home'}
                onClose={(e) => handleClose(e, item, index)}
                key={item.name}
            >
                {item.label}
            </Tag>
        ) : (
            <Tag
                style={{ cursor: 'pointer' }}
                onClick={() => handleChange(item)}
                key={item.name}
            >
                {item.label}
            </Tag>
        );
    };

    return (
        <Space className="common-tag" size={[0, 8]}>
            {tagList.map((item: TagType, index: number) =>
                tagRender(item.path === currentTab.path, item, index),
            )}
        </Space>
    );
};

export default View;
