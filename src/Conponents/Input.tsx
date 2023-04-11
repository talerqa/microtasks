import React, {ChangeEvent} from 'react';

const Input = (props: any) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)  =>  {
    props.setTitle(event.currentTarget.value)
  }

  return (
    <div>
      <input value={props.title} onChange={onChangeInputHandler}/>
    </div>
  );
};

export default Input;