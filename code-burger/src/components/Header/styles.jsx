import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';


export const Container = styled.header`
  height: 72px;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isActive ? "#B06D46" : "black")};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;
export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #555555;
  cursor: pointer;
`;

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`;

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`;

export const User = styled(PersonIcon)``;

export const Cart = styled(ShoppingCartIcon)``;
