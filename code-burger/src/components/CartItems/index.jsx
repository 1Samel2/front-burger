import React from "react";
import formatCurrency from "../../utils/formatCurrency";
import { useCart } from "../../hooks/CartContext";
import * as C from "./styles";

export function CartItems() {
  const { cartProducts } = useCart();
  return (
    <C.Container>
      <C.Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </C.Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <C.Body key={product.id}>
            <img src={product.url} alt={product.name}></img>
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </C.Body>
        ))
      ) : (
        <C.EmptyCart>Carrinho Vazio</C.EmptyCart>
      )}
    </C.Container>
  );
}
