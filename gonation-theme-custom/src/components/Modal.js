import React from "react";

const Modal = ({toggle}) => {
  return (
    <div className="modal-container">
      <div className="modal-popup">
        <div className="close-btn"><button onClick={() => toggle(false)}>X</button></div>
        <p>
          Our kitchen will be closing early on Wednesday Nov 23rd at 8:30pm but
          the bar will be open all night long. We are closed on
          Thanksgiving day.
        </p>
      </div>
    </div>
  );
};

export default Modal;
