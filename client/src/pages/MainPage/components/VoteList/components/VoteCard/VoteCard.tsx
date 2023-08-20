import React, { useState } from "react";
import { Avatar, Button, Card, Divider, Tooltip, notification } from "antd";
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Space,
  VoteButton,
} from "./styles";
import { PlusOutlined } from "@ant-design/icons";
import { AddOptionModal, OptionComponent } from "./components";
import { BM, BR } from "@/theme";
import { CreateOptionRequest, DeleteVoteRequest, Vote } from "@/interface";
import { ImageService, VoteService } from "@/service";
import { nanoid } from "@reduxjs/toolkit";
import { useUserSelector } from "@/flux";

const { Meta } = Card;

interface VoteCardProps {
  vote: Vote;
  onFetch: () => void;
}

const VoteCard: React.FC<VoteCardProps> = ({ vote, onFetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useUserSelector();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (values: string) => {
    try {
      const find = vote.optionList?.find((option) => option.title === values);

      if (find) {
        throw new Error();
      }

      const params: CreateOptionRequest = {
        userId: user?.userId as string,
        voteTitle: vote.title,
        optionTitle: values,
      };

      await VoteService.createOption(params);

      notification.success({
        message: <BR>{`${values} 추가`}</BR>,
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

  const handleFinishVote = async () => {
    try {
      const params: DeleteVoteRequest = {
        voteTitle: vote.title,
        userId: user?.userId as string,
      };

      await VoteService.deleteVote(params);

      notification.success({
        message: <BR>{`삭제 성공`}</BR>,
        placement: "bottomRight",
      });
      onFetch();
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
    <Card
      bodyStyle={{
        width: "400px",
        height: "500px",
        backgroundColor: "ivory",
      }}
    >
      <CardHeader>
        <Meta
          avatar={<Avatar src={ImageService.getImage(vote.profileImagePath)} />}
          title={vote.title}
        />
      </CardHeader>
      <Divider />
      <CardText>
        <BM>{`설명 : ${vote.description}`}</BM>
        <BM>{`총 : ${vote.totalNumber}`}</BM>
      </CardText>
      <Divider />
      <CardBody>
        {vote.optionList?.map((option) => (
          <OptionComponent
            key={nanoid()}
            voteTitle={vote.title}
            totalNumber={vote.totalNumber}
            option={option}
            onFetch={onFetch}
          />
        ))}
      </CardBody>
      <Divider />
      <CardFooter>
        <VoteButton>
          <Tooltip title="옵션 추가">
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined />}
              onClick={showModal}
            />
            <AddOptionModal
              isOpen={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            />
          </Tooltip>
          <Space />
          <Button size="large" onClick={handleFinishVote}>{`종료`}</Button>
        </VoteButton>
      </CardFooter>
    </Card>
  );
};

export default VoteCard;
