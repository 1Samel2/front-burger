import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import RocketIcon from '@mui/icons-material/Rocket';

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;
  hr {
    margin: 50px 15px;
  }
`;

export const ItemContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background: ${(props) => (props.isActive ? "#565656" : "none")};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;

  .icon {
    color: white;
  }
`;

export const ListLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  padding-left: 10px;
  text-decoration: none;
`;

export const Logout = styled(LogoutIcon)`
  color: #ffffff;
`;
