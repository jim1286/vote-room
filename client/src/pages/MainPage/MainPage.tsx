import React from "react";
import { LogoutButton, MainContainer } from "./styles";
import { UserInfo, VoteList } from "./components";
import { useAuth } from "@/hooks";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };

  return (
    <MainContainer>
      <LogoutButton onClick={handleSignOut}>{`로그아웃`}</LogoutButton>
      <UserInfo />
      <VoteList />
    </MainContainer>
  );
};

export default MainPage;
