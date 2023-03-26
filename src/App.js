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
          <div className='menu__item'
            onClick={function() {setModalActive(true); setModalContent({header: '', main: <Notation/>, footer: ''})}}>Сравнение чисел в различных системах счисления</div>
          <div/>
        </header>

        <div className='container'>
          <div className='info'>
            <h1>Как переводить из двоичной системы в десятичную</h1>
            <p>
              Двоичная система счисления ("по основанию два") - система счисления, которая имеет два возможных значения для каждого разряда; часто эти значения представляются как 0 или 1. И наоборот, десятичная (<i>по основанию десять</i>) система счисления имеет десять возможных значений (0,1,2,3,4,5,6,7,8 или 9) для каждого разряда. Чтобы не запутаться при использовании различных систем счисления, основание каждого отдельного числа можно записывать после числа нижним индексом. Например, двоичное число 10011100 можно записать <i>по основанию два</i> как 10011100<sub>2</sub>. А десятичное число 156 может быть записано как 156<sub>10</sub>, читаться оно будет так: "сто пятьдесят шесть, по основанию десять". Так как двоичная система является внутренним языком компьютеров, то серьезные программисты должны понимать, как переводить из двоичной системы в десятичную. Обратный перевод из десятичной в двоичную зачастую сложнее освоить первым.
            </p>
            <p>Преобразовать число из двоичной системы счисления в десятичную можно следующим образом: каждый <span class="note" data-bs-toggle="tooltip" title="" data-bs-original-title="Разряд — это позиция или место расположения цифры в записи натурального числа.">разряд</span> числа необходимо умножить на 2<sup>n</sup>, где n - номер разряда, начиная с 0. Затем суммировать полученные значения.</p>
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
