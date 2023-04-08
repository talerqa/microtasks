import React from 'react';

type FooterPropsType = {
  title: string
}

export const Footer = (props: FooterPropsType) => {
  return (<div>
    {props.title}
  </div>)
};