import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 450px;
  height: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  border-color: lightgray;
  border-radius: 10px;
`;

export const SignInMargin = styled.div`
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignInInput = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SignInButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 5%;
`;
