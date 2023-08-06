import React from 'react';
import { Vote, VoteContainer, VoteListContainer } from './styles';
import { VoteCard, CreateVoteCard } from './components';

const VoteList: React.FC = () => {
  return (
    <VoteListContainer>
      <VoteContainer>
        <Vote>
          <VoteCard />
        </Vote>
        <Vote>
          <CreateVoteCard />
        </Vote>
      </VoteContainer>
    </VoteListContainer>
  );
};

export default VoteList;
