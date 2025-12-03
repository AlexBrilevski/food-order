import { useContext } from "react";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import CartContex from "../store/CartContext";
import UserProgressContex from "../store/UserProgressContex";
import { currencyFormatter } from "../utils/formatting";
import Input from "./ui/Input";

export default function Checkout() {
  const { items } = useContext(CartContex);
  const { progress, hideCheckout } = useContext(UserProgressContex);

  const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  async function sendOrderData(order) {
    console.log(order);
    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      body: JSON.stringify({ order }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const respData = await response.json();

    console.log(respData);
  }

  function onCheckoutFormSumbit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const fieldValues = Object.fromEntries(formData.entries());
    const { name, email, street, ['postal-code']: postaCode, city } = fieldValues;

    if (name.length < 4 || street.length < 4 || postaCode.length < 4 || city.length < 4) {
      console.log('Input errors', fullName, email, street, postaCode, city);
      return;
    }

    sendOrderData({ customer: fieldValues, items });
  }

  return (
    <Modal open={progress === 'checkout'} onClose={hideCheckout}>
      <form onSubmit={onCheckoutFormSumbit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>
        <Input id="name" label="Full Name" type="text" required />
        <Input id="email" label="E-mail Address" type="email" required />
        <Input id="street" label="Street" type="text" required />
        <div className="control-row">
          <Input id="postal-code" label="Postal Code" type="text" required />
          <Input id="city" label="City" type="text" required />
        </div>
        <p className="modal-actions">
          <Button onClick={() => hideCheckout()} type="buton" textOnly>
            Close
          </Button>
          <Button>
            Submit Order
          </Button>
        </p>
      </form>
    </Modal>
  );
}
