import styled from "styled-components";

export const VoteListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const VoteContainer = styled.div`
  min-height: 650px;
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const VoteWrap = styled.div`
  margin: 20px;
`;
