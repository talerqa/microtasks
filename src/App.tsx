import React, {useState} from 'react';
import './App.css';
import {Money} from './site/Money';


function App() {
  const [money, setMoney] = useState([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
  ])

  return (
    <div className="App">
      <Money data={money}/>
    </div>)
}


export default App;


// const Foo = (name: string) => {
//   //   console.log(name)
//   // }
// //  let a = 1;
//
//   let [a, Count] = useState(1)
//
//   const PlusCounter = () => {
//     Count(++a);
//   }
//
//   const ResetCounter = () => {
//     Count(a = 0)
//   }
//
//   const MinusCounter = () => {
//     Count(--a);
//   }


{/*<div>{a}</div>*/
}
{/*<Button name={'+'} callback={PlusCounter}/>*/
}
{/*<Button name={'0'} callback={ResetCounter}/>*/
}
{/*<Button name={'-'} callback={MinusCounter}/>*/
}