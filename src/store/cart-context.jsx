import { createContext, useReducer } from "react";
import { CART_ACTION_TYPE, cartReduser } from "./cartReducer.js";

const initCartState = {
  items: [],
};

export const CartContex = createContext({
  items: [],
  addToCart: () => { },
});

export default function CartContexProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReduser, initCartState);

  const addToCart = () => {
    dispatchCartAction({ type: CART_ACTION_TYPE.addItem });
  };

  const cartCtx = {
    items: cartState.items,
    addToCart,
  }

  return (
    <CartContex.Provider value={cartCtx}>
      {children}
    </CartContex.Provider>
  );
}
