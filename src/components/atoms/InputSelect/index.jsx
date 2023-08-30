import { Flex } from '@/styles/customStyle';
import React from 'react';
import { styled } from 'styled-components';
import Typography from '../Typography';

const Select = ({ options, border }) => {
  return (
    <InputSelect border={border}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.text}
        </Option>
      ))}
    </InputSelect>
  );
};

export default Select;

const InputSelect = styled.select`
  font-weight: 500;
  line-height: 22px;
  height: 40px;
  border: ${({ theme, border }) =>
    border == 'true' ? `1px solid${theme.pallet.base_blue} ` : 'none'};
  outline: none;
  border-left: none;
  padding: 0 10px;
`;

const Option = styled.option`
  display: flex;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.h6};
  line-height: 22px;
  color: ${({ theme }) => theme.pallet.base_dark};
`;
const FlagImg = styled.img`
  width: 25px;
  height: 18px;
  object-fit: contain;
`;
