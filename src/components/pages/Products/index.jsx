'use client';
import { Container } from '@/components/atoms/Container';
import HeaderNav from '@/components/molecules/HeaderNav';
import Header from '@/components/organism/Header';
import React from 'react';
import { styled } from 'styled-components';
import SectionPaths from './Sections/SectionPaths';
import ProductsSection from './Sections/ProductsSection';
import Footer from '@/components/organism/Footer';
import Subscribe from '@/components/organism/Subscribe';

const ProductsPage = () => {
  return (
    <>
      <Header />
      <HeaderNav />
      <ProductSection>
        <Container>
          <SectionPaths />
          <ProductsSection />
        </Container>
      </ProductSection>
      <Subscribe />
      <Footer />
    </>
  );
};
const ProductSection = styled.section`
  background-color: ${({ theme }) => theme.pallet.gray_1};
`;

export default ProductsPage;
