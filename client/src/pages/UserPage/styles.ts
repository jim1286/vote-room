import styled from 'styled-components';

export const UserPageContainer = styled.div`
  width: 500px;
  height: 600px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  border-color: lightgray;
  border-radius: 10px;
`;

export const UserMargin = styled.div`
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserInput = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const UserButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 5%;
`;
