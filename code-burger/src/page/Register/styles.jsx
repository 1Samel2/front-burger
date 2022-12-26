import styled from "styled-components";

import BackgroundImg from "../../assets/backgroud-login.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("${BackgroundImg}");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterImage = styled.img`
  height: 82%;
`;

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 82%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  text-align: center;
  margin-top: 30px;
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 30px;
`;

export const input = styled.input`
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  width: 391.42px;
  height: 38.32px;
  padding-left: 4px;
  border: ${(props) => (props.error ? "2px solid #cc1717" : "none")};
`;

export const Error = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding-top: 10px;
  color: #cc1717;
`;


export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;
