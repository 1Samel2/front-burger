import styled from "styled-components";
import { Button, ErrorMessage } from "../../../components/";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    padding: 50px;
    background: #565656;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

export const LabelInputAlign = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 60px;
  width: 322px;
  font-weight: bold;
  padding-left: 10px;
  border: none;
  font-size: 17px;
`;

export const LabelUpload = styled.label`
  display: flex;
  align-items: center;
  color: white;
  font-size: 18px;
  border: dashed;
  padding: 20px;

  cursor: pointer;

  input {
    opacity: 0;
    width: 1px;
  }
`;

export const ButtonAdd = styled(Button)`
  width: 100%;
  height: 60px;
  font-size: 20px;
`;

