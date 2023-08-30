'use client';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from '@/styles/globalStyle';
import { theme } from '@/styles/themes';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProvider>
  );
};

export default Theme;
