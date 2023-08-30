import React from 'react';
import { styled } from 'styled-components';
import SingleProductDetailsInfo from '../components/SingleProductDetailsInfo';
import SingleProductRelatedProducts from '../components/SingleProductRelatedProducts';

const SingleProductDetails = () => {
  return (
    <Div>
      <SingleProductDetailsInfo />
      <SingleProductRelatedProducts />
    </Div>
  );
};

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 17.5rem;
  gap: 20px;

  margin: 20px 0;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
export default SingleProductDetails;
