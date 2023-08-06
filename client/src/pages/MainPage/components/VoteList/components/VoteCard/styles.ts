import styled from 'styled-components';

export const Vote = styled.div`
  margin: 20px;
`;

export const VoteButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Space = styled.div`
  width: 10px;
  height: 100%;
`;

export const CardHeader = styled.div`
  height: 30px;
`;

export const CardText = styled.div`
  height: 20px;
`;

export const CardBody = styled.div`
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
`;

export const VoteProgress = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  .ant-progress {
    margin: 0 !important;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;
