import React from "react";
import formatCurrency from "../../utils/formatCurrency";
import { useCart } from "../../hooks/CartContext";
import * as C from "./styles";

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } = useCart();
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
            <img src={product.url} alt={product.name} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <C.QuantityContainer>
              <button onClick={() => decreaseProducts(product.id)} style={{ fontSize: 30 }}>-</button>
              <p>{product.quantity}</p>
              <button
                onClick={() => increaseProducts(product.id)}
                style={{ fontSize: 24 }}
              >
                +
              </button>
            </C.QuantityContainer>
            <p>{formatCurrency(product.quantity * product.price)}</p>

            <C.ButtonImageTrash onClick={() => deleteProducts(product.id)}>
              <C.Trash />
            </C.ButtonImageTrash>
          </C.Body>
        ))
      ) : (
        <C.EmptyCart>Carrinho Vazio</C.EmptyCart>
      )}
    </C.Container>
  );
}
