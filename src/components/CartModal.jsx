import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

function Modal({ actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    }
  });

  return createPortal(
    <dialog ref={dialog} className="modal">
      <Cart />
      <form className="modal-actions" method="dialog">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}

const CartModal = forwardRef(Modal);

export default CartModal;
