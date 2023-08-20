import { OptionUser } from "@/interface";
import { ImageService } from "@/service";
import { Avatar, Tooltip } from "antd";
import React from "react";

interface VoteUserProps {
  user: OptionUser;
}

const VoteUser: React.FC<VoteUserProps> = ({ user }) => {
  return (
    <Tooltip title={user.userId} placement="top">
      <Avatar src={ImageService.getImage(user.profileImagePath)} />
    </Tooltip>
  );
};

export default VoteUser;
