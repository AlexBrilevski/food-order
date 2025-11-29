import { useContext } from "react";
import CartContex from "../store/CartContext";
import Button from "./ui/Button";
import { currencyFormatter } from "../utils/formatting";

export default function Cart() {
  const { items } = useContext(CartContex);

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h2>Your cart</h2>
      {items.length > 0 ?
        <>
          <ul>
            {items.map(item =>
              <li key={item.id} className="cart-item">
                <p>{item.name}</p>
                <p className="cart-item-actions">
                  <Button textOnly>-</Button>
                  <span>{item.quantity}</span>
                  <Button textOnly>+</Button>
                </p>
              </li>
            )}
          </ul>
          <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
        </>
        :
        <p>No items in the cart</p>
      }
    </div>
  );
}
