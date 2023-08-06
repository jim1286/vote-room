import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 450px;
  height: 600px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  border-color: lightgray;
  border-radius: 10px;
`;

export const SignUpHeader = styled.div`
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpInput = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SignUpButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 5%;
`;
