import React from 'react';
import { styled } from 'styled-components';
import ProductSectionFilter from '../components/ProductSectionFilter';
import ProductsItemsDiv from '../components/ProductsItems';

const ProductsSection = () => {
  return (
    <ProductsSectionSection>
      <ProductSectionFilter />
      <ProductsItemsDiv />
    </ProductsSectionSection>
  );
};
const ProductsSectionSection = styled.section`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 12px;
  margin-bottom: 2rem;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
export default ProductsSection;
