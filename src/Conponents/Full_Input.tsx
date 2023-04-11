import React, {ChangeEvent, useState} from 'react';

export const FullInput = (props: any) => {
  let [title, setTitle] = useState('');

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)  =>  {
    setTitle(event.currentTarget.value)
   // console.log(event.target.value)
  }



  return (
    <div>
      <input onChange={onChangeInputHandler}/>
      <button onClick={()=> {props.addNewMessage(title)}}>+
      </button>
    </div>
  );
};

