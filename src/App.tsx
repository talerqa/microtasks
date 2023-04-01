import React from 'react';
import './App.css';
import {Button} from './site/Button';

function App() {
  const ButtonFoo1 = (subscriber: string, age: number) => {
    console.log(subscriber, age)
  }
  const ButtonFoo2 = (subscriber: string, age: number) => {
    console.log(subscriber, age)
  }
  const ButtonFoo3 = (subscriber: string) => {
    console.log(subscriber)
  }

  return (
    <div className="App">
      <Button name={'YoutubeChanel-1'} callback={() => ButtonFoo1('I m Vasya', 21)}/>
      <Button name={'YoutubeChanel-2'} callback={() => ButtonFoo2('I m NOT Vasya', 23)}/>
      <Button name={'Stupid btn'} callback={()=>ButtonFoo3('Stupid BTN')}/>
    </div>
  );
}

export default App;
