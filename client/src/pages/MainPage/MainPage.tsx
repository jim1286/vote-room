import React from 'react';
import { MainContainer } from './styles';
import { UserInfo, VoteList } from './components';

const MainPage: React.FC = () => {
  return (
    <MainContainer>
      <UserInfo />
      <VoteList />
    </MainContainer>
  );
};

export default MainPage;
