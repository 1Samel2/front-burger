import { useState, useEffect } from "react";
import * as C from "./styles";
import { useCart } from "../../hooks/CartContext";
import formatCurrency from "../../utils/formatCurrency";
import { Button } from "../Button";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(5);
  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setFinalPrice(sumAllItems);
  }, [cartProducts, deliveryTax]);
  
  return (
    <div>
      <C.Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </C.Container>
      <Button
        style={{ width: "100%", marginTop: 30, height: 50, fontSize: 20 }}
      >
        Finalizar Pedido
      </Button>
    </div>
  );
}
