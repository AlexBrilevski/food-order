import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

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
      <h2>Your cart</h2>
      <form className="modal-actions" method="dialog">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}

const CartModal = forwardRef(Modal);

export default CartModal;
