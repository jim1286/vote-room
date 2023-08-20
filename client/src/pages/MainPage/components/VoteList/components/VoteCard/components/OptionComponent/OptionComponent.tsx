import React from "react";
import { BM } from "@/theme";
import { Button, Progress, Space, Avatar } from "antd";
import { Container, VoteProgress } from "./styles";
import { Option, UpdateOptionRequest } from "@/interface";
import { VoteUser } from "./components";
import { VoteService } from "@/service";
import { useUserSelector } from "@/flux";
import { nanoid } from "@reduxjs/toolkit";

interface OptionComponentProps {
  option: Option;
  voteTitle: string;
  totalNumber: number;
  onFetch: () => void;
}

const OptionComponent: React.FC<OptionComponentProps> = ({
  option,
  voteTitle,
  totalNumber,
  onFetch,
}) => {
  const user = useUserSelector();

  const handleClick = async () => {
    try {
      const params: UpdateOptionRequest = {
        userId: user?.userId as string,
        voteTitle: voteTitle,
        optionTitle: option.title,
      };
      await VoteService.updateOption(params);

      onFetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Button
        size="small"
        onClick={handleClick}
        style={{ border: "none", backgroundColor: "ivory" }}
      >
        <BM>{option.title}</BM>
      </Button>
      <VoteProgress>
        <Progress
          percent={(option.number / totalNumber) * 100}
          showInfo={false}
        />
        <Space />
        <Avatar.Group
          maxCount={1}
          maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          {option.userList.map((user) => (
            <VoteUser key={nanoid()} user={user} />
          ))}
        </Avatar.Group>
      </VoteProgress>
    </Container>
  );
};

export default OptionComponent;
