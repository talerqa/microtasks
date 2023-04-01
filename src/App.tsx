import React from 'react';
import './App.css';
import {Button} from './site/Button';

function App() {

  const Foo = (name: string) => {
    console.log(name)
  }

  return (
    <div className="App">
    <Button name={'FirstButton'} callback={()=>Foo('Lesha')}/>
    </div>
  );
}

export default App;
