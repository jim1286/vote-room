import React, { useEffect, useState } from "react";
import { VoteWrap, VoteContainer, VoteListContainer } from "./styles";
import { VoteCard, CreateVoteCard } from "./components";
import { VoteService } from "@/service";
import { Vote } from "@/interface";
import { nanoid } from "@reduxjs/toolkit";

const VoteList: React.FC = () => {
  const [voteList, setVoteList] = useState<Vote[]>();

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      const voteList = await VoteService.getVoteList();

      setVoteList(voteList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VoteListContainer>
      <VoteContainer>
        {voteList?.map((vote) => (
          <VoteWrap key={nanoid()}>
            <VoteCard vote={vote} onFetch={handleFetch} />
          </VoteWrap>
        ))}
        <VoteWrap>
          <CreateVoteCard onFetch={handleFetch} />
        </VoteWrap>
      </VoteContainer>
    </VoteListContainer>
  );
};

export default VoteList;
