import { useContext } from "react";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import UserProgressContex from "../store/UserProgressContex";

export default function Checkout() {
  const { progress, hideCheckout } = useContext(UserProgressContex);

  return (
    <Modal open={progress === 'checkout'}>
      <h2>Checkout</h2>
      <div className="modal-actions">
        <Button textOnly onClick={() => hideCheckout()}>Close</Button>
      </div>
    </Modal>
  );
}
