import React from 'react';
import { InputSelect, Option } from './style';

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

