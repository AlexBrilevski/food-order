import { use, useRef } from 'react';
import CartContex from '../store/CartContext.jsx';
import logo from '../assets/logo.jpg';
import Button from './ui/Button.jsx';
import CartModal from './CartModal.jsx';

export default function Header() {
  const { items } = use(CartContex);
  const modal = useRef();

  const itemsInCart = items.reduce((totalItems, item) => totalItems + item.quantity, 0);

  let modalActions = <Button>Close</Button>;

  if (itemsInCart) {
    modalActions = (
      <>
        <Button>Close</Button>
        <Button>Checkout</Button>
      </>
    );
  }

  function openCart() {
    modal.current.open();
  }

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="A restaurant" />
          <h1>React FoodOrder</h1>
        </div>
        <nav>
          <Button textOnly onClick={openCart}>
            Cart ({itemsInCart})
          </Button>
        </nav>
      </header>
      <CartModal ref={modal} actions={modalActions} />
    </>
  );
}
