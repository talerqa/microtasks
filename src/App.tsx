import React, {useState} from 'react';
import './App.css';
import {FullInput} from './Conponents/Full_Input';

function App() {
  const [message, setMessage] = useState([
    {message: 'mes1'},
    {message: 'mes2'},
    {message: 'mes3'},
    {message: 'mes4'},
  ])

  const newMessage = {
    message: 'mes0'
  }

  const addNewMessage = (title: string) => {
    const newMessage = {
      message: title
    }
    return setMessage([newMessage, ...message])
  }

  return (
    <div className="App">

      <div>
        <FullInput state={message} addNewMessage={addNewMessage}/>
      </div>
      {message.map(e => <div>{e.message}</div>)}
    </div>
  );
}

export default App;
