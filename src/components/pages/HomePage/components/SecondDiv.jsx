import React from 'react';
import { styled } from 'styled-components';

const SecondDiv = ({ children }) => {
  return <Div>{children}</Div>;
};

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
`;

export default SecondDiv;
