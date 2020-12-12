import React from "react";
import { FaTimes } from "react-icons/fa";
import { useCustomContext } from "./../context";

const Modal = ({ isisModalOpened }) => {
  const { handleIsModalOpen } = useCustomContext();
  return (
    <main>
      <div
        className={`modal-overlay ${
          isisModalOpened ? "modal-open" : "modal-close"
        }`}
      >
        <div className="modal-content">
          <p>Here goes the modal content</p>

          <FaTimes
            className="modal-close-icon"
            onClick={() => handleIsModalOpen("close")}
          />
        </div>
      </div>
    </main>
  );
};

export default Modal;
