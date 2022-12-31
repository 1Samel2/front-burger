import * as C from './styles'
import Button from "../../components/Button";

export const CardProduct = ({ product }) => {
  return (
    <C.Container>
      <C.Image src={product.url} alt="tabela de hamburguer" />
      <div>
        <C.ProductName>{product.name} </C.ProductName>
        <C.ProductPrice>{product.formatedPrice} </C.ProductPrice>
        <Button style={{width:140}} type="button">Adicionar</Button>
      </div>
    </C.Container>
  );
};
