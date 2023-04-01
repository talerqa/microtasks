import React, {useState} from 'react';
import './App.css';
import {Button} from './site/Button';

function App() {

  const Foo = (name: string) => {
    console.log(name)
  }

//  let a = 1;

  let[a,PlusCounter] = useState(1)

  const Counter = () => {
    PlusCounter(++a);
    console.log(a)
  }

  return (
    <div className="App">
      <div>{a}</div>
      <Button name={'FirstButton'} callback={Counter}/>
    </div>
  );
}

export default App;
