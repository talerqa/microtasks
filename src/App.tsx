import React, {useState} from 'react';
import './App.css';
import {Button} from './site/Button';

function App() {

  // const Foo = (name: string) => {
  //   console.log(name)
  // }
//  let a = 1;

  let [a, Count] = useState(1)

  const PlusCounter = () => {
    Count(++a);
  }

  const ResetCounter = () => {
    Count(a = 0)
  }

  const MinusCounter = () => {
    Count(--a);
  }

  return (
    <div className="App">
      <div>{a}</div>
      <Button name={'+'} callback={PlusCounter}/>
      <Button name={'0'} callback={ResetCounter}/>
      <Button name={'-'} callback={MinusCounter}/>
    </div>
  );
}

export default App;
