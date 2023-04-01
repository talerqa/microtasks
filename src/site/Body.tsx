import React from 'react';

type BodyPropsType = {
  title: string
}

export const Body = (props: BodyPropsType) => {
  return (<div>
    {props.title}
  </div>)
};