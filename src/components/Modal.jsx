import React, { Children } from 'react'
import "./modal.css"

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation}>
        <div className='x' onClick={() => setActive(false)}>&#9587;</div>
          <div>{children.header}</div>
          <div>{children.main}</div>
          <div>{children.footer}</div>
      </div>
    </div>
  );
};

export default Modal;