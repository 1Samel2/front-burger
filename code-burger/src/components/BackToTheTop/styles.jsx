import styled from "@emotion/styled";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
export const Container = styled.div`
  position: fixed;
  z-index: 50;
  bottom: 30px;
  right: 70px;
  background-color: #B06D46;
  border-radius: 100%;
`;

export const Rocket = styled(ExpandLessIcon)`
  font-size: 50px;
  cursor: pointer;
`;
