import React from "react";
import { UserInfoContainer } from "./styles";
import { Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { ImageService } from "@/service";
import { useUserSelector } from "@/flux";

const UserInfo: React.FC = () => {
  const navigate = useNavigate();
  const user = useUserSelector();

  const handleClick = () => {
    navigate("/info");
  };

  return (
    <UserInfoContainer>
      <Tooltip title="유저 정보">
        <img
          src={ImageService.getImage(user?.profileImagePath)}
          width={"40px"}
          height={"40px"}
          style={{ borderRadius: "50%", cursor: "pointer" }}
          onClick={handleClick}
        />
      </Tooltip>
    </UserInfoContainer>
  );
};

export default UserInfo;
