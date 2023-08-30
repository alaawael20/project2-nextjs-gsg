import Typography from '@/components/atoms/Typography';
import { relatedProducts } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';
import RelatedProductsCard from '../components/RelatedProductsCard';

const RelatedProducts = () => {
  return (
    <Div>
      <Typography tag='h5' fw='600' lh='28px'>
        Related Products
      </Typography>
      <div className='cards'>
        {relatedProducts.map((item) => (
          <RelatedProductsCard
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
  width: 100%;
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.base_white_1};
  border-radius: 6px;
  padding: 20px;

  .cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 22px;
  }
`;

export default RelatedProducts;
