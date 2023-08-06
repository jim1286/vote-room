import React from 'react';
import { UserInfoContainer } from './styles';
import { Button, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const UserInfo: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/user');
  };

  return (
    <UserInfoContainer>
      <Tooltip title="유저 정보">
        <Button
          style={{
            border: 'none',
            width: '40px',
            height: '40px',
            backgroundColor: 'ivory',
          }}
          shape="circle"
          icon={<UserOutlined />}
          onClick={handleClick}
        />
      </Tooltip>
    </UserInfoContainer>
  );
};

export default UserInfo;
