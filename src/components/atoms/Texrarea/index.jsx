import React from 'react';
import { styled } from 'styled-components';

const Textarea = ({ placeholder }) => {
  return <TextArea placeholder={placeholder} />;
};

const TextArea = styled.textarea`
  color: ${({ theme }) => theme.pallet.gray_5};
  font-size: 16px;
  font-weight: 400;
  /* border: 1 solid ${({ theme }) => theme.pallet.gray_3}; */
  width: 100%;
  height: 73px;
  outline: none;
  padding: 0.5rem 0.8rem;

  &::placeholder {
    color: ${({ theme }) => theme.pallet.gray_5};
    font-family: 'Inter';
  }
`;

export default Textarea;
