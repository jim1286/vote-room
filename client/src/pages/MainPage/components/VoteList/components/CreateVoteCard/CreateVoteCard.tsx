import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Card, notification } from "antd";
import { AddButton } from "./styles";
import { CreateVoteModal } from "./components";
import { CreateVoteRequest } from "@/interface";
import { VoteService } from "@/service";
import { BR } from "@/theme";

interface CreateVoteCardProps {
  onFetch: () => void;
}

const CreateVoteCard: React.FC<CreateVoteCardProps> = ({ onFetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (values: CreateVoteRequest) => {
    try {
      await VoteService.createVote(values);

      notification.success({
        message: <BR>{`${values.title} 생성 성공`}</BR>,
        placement: "bottomRight",
      });

      setIsModalOpen(false);
      onFetch();
    } catch (error) {
      notification.error({
        message: <BR>{`생성 실패`}</BR>,
        placement: "bottomRight",
      });

      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Card
      bodyStyle={{
        width: "400px",
        height: "500px",
        backgroundColor: "ivory",
      }}
    >
      <AddButton>
        <Button
          style={{
            border: "none",
            width: "100px",
            height: "100px",
            backgroundColor: "ivory",
          }}
          shape="circle"
          icon={<PlusCircleOutlined />}
          onClick={showModal}
        />
      </AddButton>
      <CreateVoteModal
        isOpen={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </Card>
  );
};

export default CreateVoteCard;
