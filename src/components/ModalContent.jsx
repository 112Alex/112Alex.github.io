import React from 'react';
import { Children } from 'react';
import './ModalContent.css'

export const ModalContent = function(props) {
  return (
    <div className='modal-content'>
        <div className='header'><p>{props}</p></div>
        <div className='main'><p></p></div>
        <div className='footer'><p></p></div>
    </div>

  );
};
