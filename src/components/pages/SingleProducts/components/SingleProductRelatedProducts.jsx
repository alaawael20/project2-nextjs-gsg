import Typography from '@/components/atoms/Typography';
import { relatedProduct } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';
import SingleProductDetailsRelatedProductsItem from './SingleProductDetailsRelatedProductsItem';

const SingleProductRelatedProducts = () => {
  return (
    <Div>
      <Typography tag='h6' fw='600' lh='19px'>
        You may like
      </Typography>
      <div className='items'>
        {relatedProduct.map((item) => (
          <SingleProductDetailsRelatedProductsItem
            key={item.id}
            image={item.image}
            name={item.details}
            minPrice={item.currentPrice}
            maxPrice={item.pastPrice}
          />
        ))}
      </div>
    </Div>
  );
};

const Div = styled.div`
  background: ${({ theme }) => theme.pallet.whiteColor};
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px 16px;
  overflow-x: scroll;

  .items {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 14px;
  }

  @media screen and (max-width: 992px) {
    .items {
      flex-direction: row;
    }
  }
`;
export default SingleProductRelatedProducts;
