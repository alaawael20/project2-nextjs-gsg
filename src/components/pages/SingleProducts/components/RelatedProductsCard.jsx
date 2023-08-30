import Typography from '@/components/atoms/Typography';
import { salaryFormat } from '@/utils';
import React from 'react';
import { styled } from 'styled-components';

const RelatedProductsCard = ({ image, name, minPrice, maxPrice }) => {
  return (
    <Card>
      <div className='img'>
        <ProductImage src={image} name='' />
      </div>
      <div className='desc'>
        <Typography tag='h6' fw='400' lh='19px'>
          {name}
        </Typography>
        <Typography tag='h6' fw='400' lh='19px'>
          Original
        </Typography>
      </div>
      <div className='price'>
        {salaryFormat('$', minPrice)} - {salaryFormat('$', maxPrice)}
      </div>
    </Card>
  );
};
const ProductImage = styled.img`
  height: 70%;
  mix-blend-mode: multiply;
  filter: contrast(1);
  transition: all 0.2s ease-in-out;
`;

const Card = styled.div`
  .img {
    width: 172px;
    height: 172px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.pallet.gray_3};
    border: 1px solid ${({ theme }) => theme.pallet.gray_9};
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      img {
        transform: scale(1.3);
      }
    }
  }
  .desc {
    margin-top: 14px;
    h6 {
      color: ${({ theme }) => theme.pallet.gray_6};
    }
  }
  .price {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.pallet.gray_4};
    margin: 9px 0;
  }
`;
export default RelatedProductsCard;
