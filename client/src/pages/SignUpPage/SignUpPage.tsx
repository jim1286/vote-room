import React, { useState } from "react";
import { Button, Input, Form, UploadFile, notification } from "antd";
import {
  SignUpContainer,
  SignUpHeader,
  SignUpInput,
  SignUpButton,
} from "./styles";
import { BR, H3M } from "@/theme";
import { useNavigate } from "react-router-dom";
import { SignUpInfo } from "@/interface";
import { UploadProfileImage } from "@/components";
import { UserService } from "@/service";

const SignUpPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<UploadFile | undefined>(undefined);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleFinish = async (values: SignUpInfo) => {
    values.image = file?.originFileObj as Blob;

    try {
      await UserService.signUp(values);

      notification.success({
        message: <BR>{`회원가입 성공`}</BR>,
        placement: "bottomRight",
      });

      handleNavigate();
    } catch (error) {
      notification.error({
        message: <BR>{`회원가입 실패`}</BR>,
        placement: "bottomRight",
      });

      console.log(error);
    }
  };

  const refetchProfile = (file: UploadFile | undefined) => {
    setFile(file);
  };

  const isSamePassword = (_: any, value: string) => {
    if (value !== password) {
      return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
    }

    return Promise.resolve();
  };

  const isProfileUpload = () => {
    if (file) {
      return Promise.resolve();
    }

    return Promise.reject(new Error("프로필 사진을 업로드 해주세요."));
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
          width: "80%",
          height: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        onFinish={(input) =>
          handleFinish({
            name: input.name,
            userId: input.userId,
            password: input.userId,
            image: input.profileImagePath,
          })
        }
        autoComplete="off"
      >
        <SignUpInput>
          <Form.Item
            label="이름"
            name="name"
            rules={[{ required: true, message: "이름을 입력해 주세요." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="아이디"
            name="userId"
            rules={[{ required: true, message: "아이디를 입력해 주세요." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="password"
            rules={[
              {
                required: true,
                message: "패스워드를 입력해 주세요.",
              },
              {
                min: 6,
                message: "최소 6글자입니다.",
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
            name="profileImagePath"
            rules={[{ validator: isProfileUpload, required: true }]}
          >
            <UploadProfileImage onRefetchProfile={refetchProfile} />
          </Form.Item>
        </SignUpInput>
        <SignUpButton>
          <Form.Item style={{ margin: "10px" }}>
            <Button htmlType="submit" size="large">
              가입하기
            </Button>
          </Form.Item>
          <Form.Item style={{ margin: "10px" }}>
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
