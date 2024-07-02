import { uploadFiles } from '@/api/file';
import { UploadOutlined } from '@ant-design/icons';
import { Upload, Button } from 'antd';
import type { UploadProps } from 'antd';
import React, { useMemo } from 'react';
// import './index.scss'

type UpLoadProps = {
  valuename: string;
  value: UploadProps['fileList'] | string[];
  onChange: (val: UploadProps['fileList'], key: string) => void;
  label: string;
};

const View: React.FC<UpLoadProps> = (props: UpLoadProps) => {
  const uploadConfig: UploadProps = useMemo(() => {
    const { value, valuename, onChange, ...pops } = props;
    return {
      ...pops,
      async beforeUpload(file) {
        const data = new FormData();
        data.append('file', file);
        const res = await uploadFiles(data, newFileName);
        if (!res) return false;
        const newValue = value ? [...value, res] : [res];
        onChange && onChange(newValue as never, valuename);
        return false;
      },
      onRemove: (file) => {
        const { url } = file;
        if (!value || !url) return;
        const index = (value as string[]).indexOf(url);
        const newFileList = value.slice();
        newFileList.splice(index, 1);
        onChange && onChange(newFileList as never, valuename);
      },
      onChange(...args) {
        console.log('args', args);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fileList: value?.map((url) => ({ url }) as any)
    };
  }, [props]);
  return (
    <Upload {...uploadConfig}>
      <Button icon={<UploadOutlined />}>点击上传</Button>
    </Upload>
  );
};

export default View;