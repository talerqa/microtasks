import React from 'react';

type ButtonPropsType = {
  name: string,
  callBack: () => void
}

const Button = (props: ButtonPropsType) => {
  const onClickButtonHandler = () => {
    props.callBack()
  }

  return (
    <div>
      <button onClick={onClickButtonHandler}>{props.name}</button>
    </div>
  );
};

export default Button;