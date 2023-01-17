import styled from "styled-components";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

export const Container = styled.div`

`;

export const Img = styled.img`
  width: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Check = styled(CheckBoxIcon)`
  color: #006400;
  cursor: pointer;
`;

export const Cancel = styled(CancelIcon)`
  color: #800000;
  cursor: pointer;
`;

export const Edit = styled(EditIcon)`
  color: #2f4f4f;
  cursor: pointer;
`;
