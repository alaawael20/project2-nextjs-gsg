import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/InputSelect';
import { categoriesSelect } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

const SearchBar = () => {
  return (
    <HeaderSearchBar>
      <Input placeholder='Search' width='400px' />
      <Select options={categoriesSelect} border='true' />
      <Button>Search</Button>
    </HeaderSearchBar>
  );
};

export default SearchBar;
const HeaderSearchBar = styled.div`
  display: flex;
  align-items: center;
`;
