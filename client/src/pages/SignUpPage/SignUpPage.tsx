import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';
import { SignUpContainer, SignUpHeader, SignUpInput, SignUpButton } from './styles';
import { H3M } from '@/theme';
import { useNavigate } from 'react-router-dom';
import { SignUpInfo } from '@/interface';
import { UploadProfileImage } from '@/components';

const SignUpPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [profileImagePath, setProfileImagePath] = useState('');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/signIn');
  };

  const handleFinish = async (values: SignUpInfo) => {
    console.log(values);
    console.log(profileImagePath);
  };

  const refetchProfileImage = (profileImage: string) => {
    setProfileImagePath(profileImage);
  };

  const isSamePassword = (_: any, value: string) => {
    if (value !== password) {
      return Promise.reject(new Error('비밀번호가 일치하지 않습니다.'));
    }

    return Promise.resolve();
  };

  const isProfileUpload = () => {
    if (profileImagePath) {
      return Promise.resolve();
    }

    return Promise.reject(new Error('프로필 사진을 업로드 해주세요.'));
  };

  return (
    <SignUpContainer>
      <SignUpHeader>
        <H3M>회원가입</H3M>
      </SignUpHeader>
      <Form
        name="userSignUp"
        initialValues={{ remember: true }}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 18 }}
        style={{
          width: '80%',
          height: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
        onFinish={(input) =>
          handleFinish({
            name: input.name,
            userId: input.userId,
            password: input.userId,
            profileImage: input.profileImage,
          })
        }
        autoComplete="off"
      >
        <SignUpInput>
          <Form.Item
            label="이름"
            name="name"
            rules={[{ required: true, message: '이름을 입력해 주세요.' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="아이디"
            name="userId"
            rules={[{ required: true, message: '아이디를 입력해 주세요.' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="password"
            rules={[
              {
                required: true,
                message: '패스워드를 입력해 주세요.',
              },
              {
                min: 6,
                message: '최소 6글자입니다.',
              },
            ]}
          >
            <Input.Password onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="비밀번호 확인"
            name="check"
            rules={[
              {
                validator: isSamePassword,
                required: true,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="프로필 사진"
            name="profileImage"
            rules={[{ validator: isProfileUpload, required: true }]}
          >
            <UploadProfileImage onRefetchProfileImage={refetchProfileImage} />
          </Form.Item>
        </SignUpInput>
        <SignUpButton>
          <Form.Item style={{ margin: '10px' }}>
            <Button htmlType="submit" size="large">
              가입하기
            </Button>
          </Form.Item>
          <Form.Item style={{ margin: '10px' }}>
            <Button type="primary" size="large" onClick={handleNavigate}>
              돌아가기
            </Button>
          </Form.Item>
        </SignUpButton>
      </Form>
    </SignUpContainer>
  );
};

export default SignUpPage;
