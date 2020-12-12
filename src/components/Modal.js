import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = ({ isModalBtnClicked }) => {
  return (
    <main>
      <div
        className={`modal-overlay ${
          isModalBtnClicked ? "modal-open" : "modal-close"
        }`}
      >
        <div className="modal-content">Main Content</div>
      </div>
    </main>
  );
};

export default Modal;
