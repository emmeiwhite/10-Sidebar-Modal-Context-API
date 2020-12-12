import React from "react";
import { FaTimes } from "react-icons/fa";
import { useCustomContext } from "./../context";

const Modal = ({ isModalBtnClicked }) => {
  const { handleModalBtnClick } = useCustomContext();
  return (
    <main>
      <div
        className={`modal-overlay ${
          isModalBtnClicked ? "modal-open" : "modal-close"
        }`}
      >
        <div className="modal-content">
          <p>Here goes the modal content</p>

          <FaTimes
            className="modal-close-icon"
            onClick={() => handleModalBtnClick("close")}
          />
        </div>
      </div>
    </main>
  );
};

export default Modal;
