import React from 'react';
import { Button, Input, Form, notification } from 'antd';
import { SignInContainer, SignInInput, SignInButton, SignInMargin } from './styles';
import { useNavigate } from 'react-router-dom';
import { BR, H3M } from '@/theme';
import { SignInInfo } from '@/interface';
import { useAuth } from '@/hooks';
import { TokenService } from '@/service';
import { useDispatch } from 'react-redux';
import { setUser } from '@/flux';

const SignInPage: React.FC = () => {
  const { signIn, signOut, getUser } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/signUp');
  };

  const handleSignIn = async (values: SignInInfo) => {
    try {
      const tokens = await signIn(values);
      TokenService.setTokens(tokens);

      const user = await getUser();
      dispatch(setUser(user));

      notification.success({
        message: <BR>{`로그인 성공`}</BR>,
        placement: 'bottomRight',
      });

      navigateToMain();
    } catch {
      signOut();

      notification.error({ message: <BR>{`로그인 실패`}</BR>, placement: 'bottomRight' });
    }
  };

  const navigateToMain = () => {
    navigate('/');
  };

  return (
    <SignInContainer>
      <SignInMargin>
        <H3M>로그인</H3M>
      </SignInMargin>
      <Form
        name="SignIn"
        initialValues={{ remember: true }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        style={{
          width: '80%',
          height: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
        onFinish={handleSignIn}
        autoComplete="off"
      >
        <SignInInput>
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
            rules={[{ required: true, message: '비밀번호를 입력해 주세요.' }]}
          >
            <Input.Password />
          </Form.Item>
        </SignInInput>
        <SignInButton>
          <Form.Item style={{ margin: '10px' }}>
            <Button type="default" htmlType="submit" size="large">
              로그인
            </Button>
          </Form.Item>
          <Form.Item style={{ margin: '10px' }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              onClick={handleNavigate}
            >
              회원가입
            </Button>
          </Form.Item>
        </SignInButton>
      </Form>
    </SignInContainer>
  );
};

export default SignInPage;
