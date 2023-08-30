'use client';
import { Container } from '@/components/atoms/Container';
import Logo from '@/components/atoms/Logo';
import HeaderIcons from '@/components/molecules/HeaderIcons';
import SearchBar from '@/components/molecules/SerachBar';
import { Flex } from '@/styles/customStyle';
import React from 'react';
import { styled } from 'styled-components';

const Header = ({ showSearch = true }) => {
  return (
    <HeaderSection>
      <Container>
        <Flex sb='true'>
          <Logo />
          {showSearch && <SearchBar />}
          <HeaderIcons />
        </Flex>
      </Container>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.header`
  padding: 1rem 0;
  width: 100%;
  background-color: ${({ theme }) => theme.pallet.base_white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
