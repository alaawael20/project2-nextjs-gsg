'use client';
import { Container } from '@/components/atoms/Container';
import HeaderNav from '@/components/molecules/HeaderNav';
import Footer from '@/components/organism/Footer';
import Header from '@/components/organism/Header';
import React from 'react';
import SectionPaths from '../Products/Sections/SectionPaths';
import { styled } from 'styled-components';
import SingleProductItem from './sections/SingleProductItem';
import SingleProductDetails from './sections/SingleProductDetails';
import RelatedProducts from './sections/RelatedProducts';
import SupplierDiscount from '@/components/molecules/SupplierDiscount';

const ProductSingle = () => {
  return (
    <>
      <Header />
      <HeaderNav />
      <ProductSection>
        <Container>
          <SectionPaths />
          <SingleProductItem />
          <SingleProductDetails />
          <RelatedProducts />
        </Container>
        <SupplierDiscount />
      </ProductSection>
      <Footer />
    </>
  );
};
const ProductSection = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.pallet.greyColor3};
  background-color: ${({ theme }) => theme.pallet.gray_1};
`;
export default ProductSingle;
