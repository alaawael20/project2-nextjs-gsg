import React from 'react';
import { Div, Icon, Span } from './style';

const HeaderIconDiv = ({ icon, title }) => {
  return (
    <Div>
      <Icon src={icon} />
      <Span>{title}</Span>
    </Div>
  );
};

export default HeaderIconDiv;
