import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { CancelAccountContainer } from './styles';
import { H5B } from '@/theme';

const CancelAccount: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <CancelAccountContainer>
      <Button
        type="primary"
        onClick={showModal}
        style={{ width: '500px', height: '50px' }}
      >
        계정 탈퇴하기
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered>
        <H5B color="red">{`계정을 탈퇴하시겠습니까?`}</H5B>
      </Modal>
    </CancelAccountContainer>
  );
};

export default CancelAccount;
