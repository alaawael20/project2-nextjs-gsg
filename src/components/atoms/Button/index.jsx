import React from 'react';
import { Btn } from './style';

const Button = ({ children, bgcolor }) => {
  return <Btn bgcolor={bgcolor}>{children}</Btn>;
};
export default Button;
