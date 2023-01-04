import * as C from "./styles";
import { CartItems } from "../../components"
import Capa from "../../assets/capa-burger-home.svg";
export const Cart = () => {
  return (
    <C.Container>
      <C.ImageLogo src={Capa} alt="logo do carrinho" />
      <CartItems/>
    </C.Container>
  );
};
