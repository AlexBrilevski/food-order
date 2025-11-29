import { use, useState } from 'react';
import CartContex from '../store/CartContext.jsx';
import logo from '../assets/logo.jpg';
import Button from './ui/Button.jsx';
import CartModal from './Modal.jsx';
import Cart from './Cart.jsx';

export default function Header() {
  const { items } = use(CartContex);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const itemsInCart = items.reduce((totalItems, item) => totalItems + item.quantity, 0);

  let cartModalActions = <Button onClick={() => setIsCartOpen(false)}>Close</Button>;

  if (itemsInCart) {
    cartModalActions = (
      <>
        <Button onClick={() => setIsCartOpen(false)}>Close</Button>
        <Button>Checkout</Button>
      </>
    );
  }

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="A restaurant" />
          <h1>React FoodOrder</h1>
        </div>
        <nav>
          <Button textOnly onClick={() => setIsCartOpen(true)}>
            Cart ({itemsInCart})
          </Button>
        </nav>
      </header>
      <CartModal open={isCartOpen}>
        <Cart />
        <form className="modal-actions" method="dialog">
          {cartModalActions}
        </form>
      </CartModal>
    </>
  );
}
