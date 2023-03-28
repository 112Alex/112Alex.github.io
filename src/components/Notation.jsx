import React, {useState} from "react";
import './notation.css'
import image from './0ac27589859f085440b26eeccac0bc8d.jpg'

const Notation = function () {

  const [num16, setNum16] = useState(NaN)
  const [num8, setNum8] = useState(NaN)
  const [num2, setNum2] = useState(NaN)

  function arrayer(number) {
    return ((""+number).split("").map(Number))
  };

  let arr16 = arrayer(num16.toString(2))
  let arr8 = arrayer(num8.toString(2))
  let arr2 = arrayer(num2.toString(2))
  let content16 = []
  let content8 = []
  let content2 = []

  for (let i in arr16) {
    if (arr16[0] == 1) {
      content16.push(<p> {arr16[0]} * 2<sup>{arr16.length - i}</sup> + </p>)
    };
  };
  for (let i in arr8) {
    if (arr16[0] == 1) {
      content8.push(<p> {arr8[0]} * 2<sup>{arr8.length - i}</sup> + </p>)
    };
  };
  for (let i in arr2) {
    if (arr2[0] == 1) {
      content2.push(<p> {arr2[0]} * 2<sup>{arr2.length - i}</sup> + </p>)
    };
  };

  return (
    <div className="Notation">
      <div className="Notation__row">
        <div className="Notation__item">
          <p className="Notation__header">Среди приведённых ниже чисел, записанных в различных системах счисления, найдите минимальное и запишите его в ответ в десятичной системе счисления</p>
          <div className="Notation__item">
            <div className="Notation-digits__item">
              <h4>Введите числа:</h4>
              <input type="text" onChange={event => setNum16(parseInt(event.target.value, 16))}/><sub> 16</sub>
              <input type="text" onChange={event => setNum8(parseInt(event.target.value, 8))}/><sub> 8</sub>
              <input type="text" onChange={event => setNum2(parseInt(event.target.value, 2))}/><sub> 2</sub>
              <p>Первое число в десятичной системе = {num16.toString(10)}</p>
              <p>Второе число в десятичной системе = {num8.toString(10)}</p>
              <p>Третье число в десятичной системе = {num2.toString(10)}</p>
            </div>
            <div className="Notation-digits__item">
              <h4>Решение:</h4>
              <p>см. таблицу <em>триад</em> и <em>тетрад</em></p>
              <p>Первое число в двоичной системе = {num16.toString(2)}</p>
              <p>Второе число в двоичной системе = {num8.toString(2)}</p>
              <p>Третье число в двоичной системе = {num2.toString(2)}</p>
            </div>
            <div className="Notation-digits__item">
              <div className="Notation-digits__row">
                {content16} = {num16.toString(10)}
              </div>
              <div className="Notation-digits__row">
                {content8} = {num8.toString(10)}
              </div>
              <div className="Notation-digits__row">
                {content2} = {num2}
              </div>
              <div className="Notattion-digits__row">
                <br ></br>
                <p>Ответ: минимальное значение = {Math.min(num8.toString(10), num16.toString(10), num2.toString(10))}</p>
              </div>
            </div>
          </div>
          <div className="Notation__item">{}</div>
        </div>
      </div>
      <div className="Notation__picture"><img src={image} alt="картинка не найдена" /></div>
    </div>
  );
};

export default Notation
