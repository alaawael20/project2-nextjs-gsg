import { salaryFormat } from '@/utils';
import React from 'react';
import { styled } from 'styled-components';

const SingleProductDetailsRelatedProductsItem = ({
  image,
  name,
  minPrice,
  maxPrice,
}) => {
  return (
    <Div>
      <div className='img'>
        <ProductImage src={image} />
      </div>
      <div className='desc'>
        <div className='name'>{name}</div>
        <div className='price'>
          {salaryFormat('$', minPrice)} - {salaryFormat('$', maxPrice)}
        </div>
      </div>
    </Div>
  );
};

const ProductImage = styled.img`
  height: 70%;
  mix-blend-mode: multiply;
  filter: contrast(1);
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  .img {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.pallet.base_white};
    border: 1px solid ${({ theme }) => theme.pallet.gray_9};
    border-radius: 6px;
  }
  .name {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.pallet.base_dark};
  }

  .price {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: ${({ theme }) => theme.pallet.gray_5};
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;

    .name {
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      color: ${({ theme }) => theme.pallet.gray_4};
    }
  }
`;

export default SingleProductDetailsRelatedProductsItem;
