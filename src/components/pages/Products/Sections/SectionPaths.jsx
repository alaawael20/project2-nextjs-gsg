import React from 'react';
import { styled } from 'styled-components';
import Path from '../components/Path';

const SectionPaths = () => {
  return (
    <ProductsPathSection>
      <Path text='Home' />
      <Path text='Clothings' />
      <Path text='Men’s wear' />
      <Path text='Summer clothing' show={false} />
    </ProductsPathSection>
  );
};

const ProductsPathSection = styled.section`
  display: flex;
  align-items: center;
  margin: 20px 0;
  gap: 0.6rem;
`;
export default SectionPaths;
