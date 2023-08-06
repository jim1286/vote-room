import React, { useState } from 'react';
import { UserInput, UserMargin, UserPageContainer } from './styles';
import { Button, Form, Input } from 'antd';
import { UserButton } from './styles';
import { H3M } from '@/theme';
import { CancelAccount } from './components';
import { UpdateUserInfo } from '@/interface';
import { UploadProfileImage } from '@/components';

const UserPage: React.FC = () => {
  const [profileImagePath, setProfileImagePath] = useState('');

  const refetchProfileImage = (profileImage: string) => {
    setProfileImagePath(profileImage);
  };

  const handleFinish = async (values: UpdateUserInfo) => {
    console.log(values);
    console.log(profileImagePath);
  };

  return (
    <UserPageContainer>
      <UserMargin>
        <H3M>{`유저 정보`}</H3M>
      </UserMargin>
      <Form
        initialValues={{ remember: true }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17 }}
        style={{
          width: '80%',
          height: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <UserInput>
          <Form.Item label="이름">
            <Input disabled={true} placeholder="유저 이름" />
          </Form.Item>
          <Form.Item label="아이디">
            <Input disabled={true} placeholder="유저 아이디" />
          </Form.Item>
          <Form.Item label="비밀번호" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="프로필 사진">
            <UploadProfileImage onRefetchProfileImage={refetchProfileImage} />
          </Form.Item>
        </UserInput>
        <UserButton>
          <Form.Item style={{ margin: '10px' }}>
            <Button
              type="default"
              htmlType="submit"
              size="large"
              style={{ width: '200px' }}
            >
              유저 정보 변경하기
            </Button>
          </Form.Item>
        </UserButton>
      </Form>
      <CancelAccount />
    </UserPageContainer>
  );
};

export default UserPage;
