import * as C from "./styles";
import { Button } from "../Button";
import { useCart } from "../../hooks/CartContext";

export const CardProduct = ({ product }) => {
  const { putProductInCart } = useCart();
  return (
    <C.Container>
      <C.Image src={product.url} alt="tabela de hamburguer" />
      <div>
        <C.ProductName>{product.name} </C.ProductName>
        <C.ProductPrice>{product.formatedPrice} </C.ProductPrice>
        <Button
          style={{ width: 140 }}
          type="button"
          onClick={() => putProductInCart(product)}
        >
          Adicionar
        </Button>
      </div>
    </C.Container>
  );
};
