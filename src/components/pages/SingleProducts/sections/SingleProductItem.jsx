import React from 'react';
import { styled } from 'styled-components';
import ProductImages from '../components/ProductImages';
import ProductDetails from '../components/ProductDetails';
import ProductSupplier from '../components/ProductSupplier';

const SingleProductItem = () => {
  return (
    <Div>
      <ProductImages />
      <ProductDetails />
      <ProductSupplier />
    </Div>
  );
};

const Div = styled.div`
  display: grid;
  grid-template-columns: 30% 42% 1fr;
  gap: 20px;

  background: ${({ theme }) => theme.pallet.base_white};

  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px 20px 40px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export default SingleProductItem;
