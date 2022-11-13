import React, { Children } from 'react'
import "./modal.css"

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation}>
        <div className='x' onClick={() => setActive(false)}>x</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;