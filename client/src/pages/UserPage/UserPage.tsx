import React, { useState } from "react";
import { UserInput, UserMargin, UserPageContainer } from "./styles";
import { Button, Form, Image, Input, UploadFile, notification } from "antd";
import { UserButton } from "./styles";
import { BR, H3M } from "@/theme";
import { CancelAccount } from "./components";
import { UploadProfileImage } from "@/components";
import { useUserSelector } from "@/flux";
import { ImageService, UserService } from "@/service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks";

const UserPage: React.FC = () => {
  const user = useUserSelector();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [file, setFile] = useState<UploadFile | undefined>(undefined);
  const [name, setName] = useState<string>(user?.name as string);
  const [userId, setUserId] = useState<string>(user?.userId as string);
  const [password, setPassword] = useState<string>("");

  const refetchProfile = (file: UploadFile | undefined) => {
    setFile(file);
  };

  const handleFinish = async () => {
    try {
      const params = {
        originUserId: user?.userId as string,
        name: name,
        userId: userId,
        password: password,
        image: file?.originFileObj,
      };

      await UserService.updateUser(params);

      notification.success({
        message: <BR>{`업데이트 성공`}</BR>,
        placement: "bottomRight",
      });

      signOut();
      navigate("/login");
    } catch (error) {
      notification.error({
        message: <BR>{`업데이트 실패`}</BR>,
        placement: "bottomRight",
      });

      console.log(error);
    }
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
          width: "80%",
          height: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <UserInput>
          <Form.Item label="이름">
            <Input
              value={name}
              placeholder="유저 이름"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="아이디">
            <Input
              value={userId}
              placeholder="유저 아이디"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="비밀번호" name="password">
            <Input
              value={password}
              placeholder="비밀번호"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Item>
          {user?.profileImagePath && (
            <Form.Item label=" 사진">
              <Image
                width={"80px"}
                height={"80px"}
                src={ImageService.getImage(user.profileImagePath)}
              />
            </Form.Item>
          )}
          <Form.Item label="프로필 사진">
            <UploadProfileImage onRefetchProfile={refetchProfile} />
          </Form.Item>
        </UserInput>
        <UserButton>
          <Form.Item style={{ margin: "10px" }}>
            <Button
              type="default"
              htmlType="submit"
              size="large"
              style={{ width: "200px" }}
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
