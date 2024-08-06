import { uploadFiles } from '@/api/file';
import { UploadOutlined } from '@ant-design/icons';
import { Upload, Button } from 'antd';
import type { UploadProps, UploadFile } from 'antd';
import React, { useState, useMemo, useCallback, useEffect } from 'react';

type UpLoadProps = {
    valuename: string;
    value: UploadProps['fileList'] | string[];
    onChange: (val: UploadProps['fileList'], key: string) => void;
    label: string;
};

const View: React.FC<UpLoadProps> = (props: UpLoadProps) => {
    //控制按钮显示
    const [btnShow, setBtnShow] = useState(true);
    //修改文件列表
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    //链接回填
    const linkBackFill = useCallback(() => {
        if (!props.value || props.value.length === 0) {
            setBtnShow(true);
        } else {
            setBtnShow(false);
            setFileList([
                {
                    name: (props.value[0] as string).split('/').pop(),
                    url: props.value[0],
                },
            ] as UploadFile[]);
        }
    }, [props.value]);

    useEffect(() => {
        linkBackFill();
    }, [linkBackFill]);

    const uploadConfig: UploadProps = useMemo(() => {
        const { value, valuename, onChange, ...pops } = props;
        return {
            ...pops,
            beforeUpload(file) {
                //随机生成文件名
                const randomFileName = Math.random()
                    .toString(36)
                    .substring(2, 15);
                const fileExtension = file.name.split('.').pop();
                const newFileName = randomFileName + '.' + fileExtension;
                const data = new FormData();
                data.append('file', file);
                //生成链接
                uploadFiles(data, newFileName).then((res) => {
                    if (res) {
                        setBtnShow(false);
                        setFileList([{ name: newFileName, url: res }] as never);
                    }
                    const newValue = value ? [...value, res] : [res];
                    onChange && onChange(newValue as never, valuename);
                });
                return false;
            },
            onRemove: (file) => {
                const { url } = file;
                if (!value || !url) return;
                const index = (value as string[]).indexOf(url);
                const newFileList = value.slice();
                newFileList.splice(index, 1);
                onChange && onChange(newFileList as never, valuename);
                setFileList([]);
                setBtnShow(true);
            },
            onChange(...args) {
                console.log('args', args);
            },
            fileList,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            // fileList: value?.map((url) => ({ url }) as any)
        };
    }, [props]);

    return (
        <Upload {...uploadConfig}>
            {btnShow && <Button icon={<UploadOutlined />}>点击上传文件</Button>}
        </Upload>
    );
};

export default View;
