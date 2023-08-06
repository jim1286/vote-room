import { Modal, Upload, UploadFile, UploadProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { UploadContainer } from './styles';
import { PlusOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload';
import { getBase64 } from '@/utils';

interface UploadProfileImageProps {
  onRefetchProfileImage: (profileImage: string) => void;
}

const UploadProfileImage: React.FC<UploadProfileImageProps> = ({
  onRefetchProfileImage,
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    profileImageToBase64();
  }, [fileList]);

  const handlePreviewCancel = () => {
    setPreviewOpen(false);
  };

  const handleChange: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);

    if (file.url) {
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    }
  };

  const profileImageToBase64 = async () => {
    if (fileList.length > 0) {
      onRefetchProfileImage(await getBase64(fileList[0].originFileObj as RcFile));
      return;
    }

    if (fileList.length === 0) {
      onRefetchProfileImage('');
      return;
    }
  };

  return (
    <UploadContainer>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-circle"
        fileList={fileList}
        maxCount={1}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        <PlusOutlined />
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handlePreviewCancel}
      >
        <img alt="profileImage" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </UploadContainer>
  );
};

export default UploadProfileImage;
