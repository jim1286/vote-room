import React, { useState } from "react";
import { Button, Modal, notification } from "antd";
import { CancelAccountContainer } from "./styles";
import { BR, H5B } from "@/theme";
import { UserService } from "@/service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks";

const CancelAccount: React.FC = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await UserService.deleteUser();

      notification.success({
        message: <BR>{`삭제 성공`}</BR>,
        placement: "bottomRight",
      });

      navigate("/login");
      signOut();
    } catch (error) {
      notification.error({
        message: <BR>{`삭제 실패`}</BR>,
        placement: "bottomRight",
      });

      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <CancelAccountContainer>
      <Button
        type="primary"
        onClick={showModal}
        style={{ width: "500px", height: "50px" }}
      >
        계정 탈퇴하기
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <H5B color="red">{`계정을 탈퇴하시겠습니까?`}</H5B>
      </Modal>
    </CancelAccountContainer>
  );
};

export default CancelAccount;
