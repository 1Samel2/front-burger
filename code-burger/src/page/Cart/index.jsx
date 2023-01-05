import * as C from "./styles";
import { CartItems, CartResume } from "../../components"
import Capa from "../../assets/capa-burger-home.svg";
export const Cart = () => {
  return (
    <C.Container>
      <C.ImageLogo src={Capa} alt="logo do carrinho" />
      <C.Wrapper>
      <CartItems/>
      <CartResume/>
      </C.Wrapper>
    </C.Container>
  );
};
