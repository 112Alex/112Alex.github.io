import { getValue } from '@testing-library/user-event/dist/utils';
import React, {Children, useState} from 'react';
import Modal from './components/Modal';
import './App.css'
import './components/ModalContent'
import { ModalContent } from './components/ModalContent';
import Notation from './components/Notation';


function App() {
 //функция для изменения содержимого модального окна
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState({header: 'header', main: 'main', footer: ''})

  return (
    <div className="App">

      <main>

        <header>
          <div className='header__row'>
            <div className='header__row__item references'><p>Справочный материал</p></div>
            <div className='header__row__item calculator'><p>Калькулятор</p></div>
          </div>
        </header>

        <div className='menu'>
          <div className='menu__row'>
            <div className='menu__item'
              onClick={function() {setModalActive(true); setModalContent({header: '', main: <Notation/>, footer: ''})}}>Сравнение чисел в различных системах счисления</div>
            <div className='menu__item' onClick={function() {setModalActive(true); setModalContent({header: 'header', main: 'main', footer: ''})} } >Простой линейный алгоритм для формального исполнителя</div>~
          </div>
        </div>

      </main>

      <Modal active={modalActive} setActive={setModalActive}>
        {modalContent}
      </Modal>
      
    </div>
  );
};

export default App;
