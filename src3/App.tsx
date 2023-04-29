import React, {useState} from 'react';
import './App.css';
import Input from './Conponents/Input';
import Button from './Conponents/Button';

function App() {
  const [message, setMessage] = useState([
    {message: 'mes1'},
    {message: 'mes2'},
    {message: 'mes3'},
    {message: 'mes4'},
  ])

  let [title, setTitle] = useState('');

  const addNewMessage = (title: string) => {
    const newMessage = {
      message: title
    }
    setTitle('')
    return setMessage([newMessage, ...message])
  }

  const callBackonClickButtonHandler = ()=> {
    addNewMessage(title)
  }

  return (
    <div className="App">

      <div>
        {/*<FullInput state={message} addNewMessage={addNewMessage}/>*/}
        <Input setTitle={setTitle} title={title} />
        <Button name={'+'} callBack={callBackonClickButtonHandler}/>
      </div>
      {message.map(e => <div>{e.message}</div>)}
    </div>
  );
}

export default App;
