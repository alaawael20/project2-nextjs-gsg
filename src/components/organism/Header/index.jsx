'use client';
import { Container } from '@/components/atoms/Container';
import Logo from '@/components/atoms/Logo';
import HeaderIcons from '@/components/molecules/HeaderIcons';
import SearchBar from '@/components/molecules/SerachBar';
import { Flex } from '@/styles/customStyle';
import React from 'react';
import { HeaderSection } from './style';

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
