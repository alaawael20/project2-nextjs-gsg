import { logo } from '@/mock/data';
import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

const Logo = () => {
  return (
    <Link href='/'>
      <LogoImage src={logo} alt='logo' />
    </Link>
  );
};
export default Logo;

const LogoImage = styled.img``;
