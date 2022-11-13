import { getValue } from '@testing-library/user-event/dist/utils';
import React, {Children, useState} from 'react';
import Modal from './components/Modal';
import './App.css'
import './components/ModalContent'
import { ModalContent } from './components/ModalContent';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState({header: 'dadfawf', main: '', footer: ''})

  return (
    <div className="App">

      <main>

        <header>
          <div className='header__row'>
            <div className='header__row__item main-page'><p>Главная</p></div>
            <div className='header__row__item references'><p>Справочный материал</p></div>
            <div className='header__row__item calculator'><p>Калькулятор</p></div>
          </div>
        </header>

        <div className='menu'>
          <div className='menu__row'>
            <div className='menu__item'
              onClick={function() {setModalActive(true); setModalContent({header: 'header', main: 'текстекстекстекст', footer: 'foooooter'})}}>kujfduisuifklfj</div>
            <div className='menu__item' onClick={function() {setModalActive(true); setModalContent( {header: 'header', main: 'текстекстекстекст', footer: 'foooooter'})} } >первый пункт</div>
            <div className='menu__item' onClick={() => setModalActive(true)} >132423jfsifu</div>
            <div className='menu__item' onClick={() => setModalActive(true)} >5646ujfdkuliif</div>
            <div className='menu__item' onClick={() => setModalActive(true)} >56747888uisu</div>
          </div>
        </div>

      </main>

      <Modal active={modalActive} setActive={setModalActive}>
        <ModalContent modalContent={setModalContent}/>
      </Modal>
      
    </div>
  );
};

export default App;
