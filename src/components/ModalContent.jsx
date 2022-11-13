import React from 'react';
import { Children } from 'react';
import './ModalContent.css'

export const ModalContent = function(props) {
  return (
    <div className='modal-content'>
      <div className='header'><p>{props.header}</p></div>
      <div className='main'><p>{props.main}</p></div>
      <div className='footer'><p>{props.footer}</p></div>
    </div>

  );
};
