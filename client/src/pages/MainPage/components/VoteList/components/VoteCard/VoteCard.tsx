import React, { useState } from 'react';
import { Avatar, Button, Card, Divider, Progress, Tooltip } from 'antd';
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Space,
  VoteButton,
  VoteProgress,
} from './styles';
import { PlusOutlined } from '@ant-design/icons';
import { AddOptionModal } from './components';
import { BM } from '@/theme';
import { AddVoteOption } from '@/interface';

const { Meta } = Card;

const VoteCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (values: AddVoteOption) => {
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
      <CardHeader>
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
          title="Card title"
        />
      </CardHeader>
      <Divider />
      <CardText>
        <BM>{`점심 메뉴`}</BM>
      </CardText>
      <Divider />
      <CardBody>
        <Button size="small" style={{ border: 'none' }}>
          <BM>{`옵션`}</BM>
        </Button>
        <VoteProgress>
          <Progress percent={50} showInfo={false} />
          <Space />
          <Avatar.Group
            maxCount={1}
            maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
          >
            <Tooltip title="이름" placement="top">
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
            </Tooltip>
            <Tooltip title="이름" placement="top">
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
            </Tooltip>
            <Tooltip title="이름" placement="top">
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
            </Tooltip>
            <Tooltip title="이름" placement="top">
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
            </Tooltip>
          </Avatar.Group>
        </VoteProgress>
      </CardBody>
      <Divider />
      <CardFooter>
        <VoteButton>
          <Tooltip title="옵션 추가">
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined />}
              onClick={showModal}
            />
            <AddOptionModal
              isOpen={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            />
          </Tooltip>
          <Space />
          <Button size="large">{`종료`}</Button>
        </VoteButton>
      </CardFooter>
    </Card>
  );
};

export default VoteCard;
