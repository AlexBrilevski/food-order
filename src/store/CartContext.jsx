import { createContext, useReducer } from "react";
import { CART_ACTION_TYPE, initCartState, cartReduser } from "./cartReducer.js";

const CartContex = createContext({
  items: [],
  addToCart: (item) => { },
});

export function CartContexProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReduser, initCartState);

  const addToCart = (item) => {
    dispatchCartAction({ type: CART_ACTION_TYPE.addItem, payload: item });
  };

  const cartCtx = {
    items: cartState.items,
    addToCart,
  }

  console.log(cartState);

  return (
    <CartContex.Provider value={cartCtx}>
      {children}
    </CartContex.Provider>
  );
}

export default CartContex;
