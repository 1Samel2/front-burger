import styled from "styled-components";

import { FaTrash } from "react-icons/fa";

export const Container = styled.section`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  padding: 10px;
  width: max-content;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #9a9a9d;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  grid-gap: 10px 15px;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #9a9a9d;
  position: relative;
  img {
    border-radius: 10px;
    width: 120px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  button {
    background: transparent;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const EmptyCart = styled.p``;

export const ButtonImageTrash = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  padding-right: 20px;

  &:active {
    opacity: 0.6;
  }
`;

export const Trash = styled(FaTrash)``;
