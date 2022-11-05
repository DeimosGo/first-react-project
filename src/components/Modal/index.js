import React from "react";
import ReacDOM from 'react-dom';
import './Modal.css';

const Modal = ({ children }) => {
  return ReacDOM.createPortal(
    <div className="container__modal">
      {children}
    </div>,
    document.getElementById('modal')
    );
};

export { Modal };
