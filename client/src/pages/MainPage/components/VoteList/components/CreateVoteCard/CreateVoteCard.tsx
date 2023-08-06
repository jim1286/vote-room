import React, { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { AddButton } from './styles';
import { CreateVoteModal } from './components';
import { CreateRoomInfo } from '@/interface';

const CreateVoteCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (values: CreateRoomInfo) => {
    console.log(values);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Card
      bodyStyle={{
        width: '400px',
        height: '500px',
        backgroundColor: 'ivory',
      }}
    >
      <AddButton>
        <Button
          style={{
            border: 'none',
            width: '100px',
            height: '100px',
            backgroundColor: 'ivory',
          }}
          shape="circle"
          icon={<PlusCircleOutlined />}
          onClick={showModal}
        />
      </AddButton>
      <CreateVoteModal isOpen={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
    </Card>
  );
};

export default CreateVoteCard;
