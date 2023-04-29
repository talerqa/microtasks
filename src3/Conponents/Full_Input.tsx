import React, {ChangeEvent, useState} from 'react';

export const FullInput = (props: any) => {
  let [title, setTitle] = useState('');

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)  =>  {
    setTitle(event.currentTarget.value)
  }



  return (
    <div>
      <input value={title} onChange={onChangeInputHandler}/>
      <button onClick={()=> {
        props.addNewMessage(title)
        setTitle('')
      }}>+
      </button>
    </div>
  );
};

