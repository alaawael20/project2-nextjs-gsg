import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

const ProductItemCardGrid = ({
  currentPrice,
  pastPrice,
  rating,
  details,
  image,
}) => {
  return (
    <Card>
      <div className='img'>
        <CardImage src={image} />
      </div>
      <div className='content'>
        <div className='info'>
          <div className='price'>
            <Typography tag='h5' fw='600' lh='22px'>
              {currentPrice}
            </Typography>
            <Typography tag='h6' fw='400' lh='19px'>
              {pastPrice}
            </Typography>
          </div>
          <div className='stars'>
            <div className='stars_icon'>
              <StarIcon src={images.goldenStar} />
              <StarIcon src={images.goldenStar} />
              <StarIcon src={images.goldenStar} />
              <StarIcon src={images.goldenStar} />
              <StarIcon src={images.GrayStar} />
            </div>
            <Typography tag='h6' fw='400' lh='19px'>
              {rating}
            </Typography>
          </div>
          <Typography tag='body1' fw='400' lh='24px'>
            {details}
          </Typography>
        </div>
        <div className='heart'>
          <StarIcon src={images.heart} />
        </div>
      </div>
    </Card>
  );
};
const CardImage = styled.img`
  width: 100%;
  object-fit: scale-down;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid #e3e8ee;
  border-radius: 6px;

  .img {
    width: 230px;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .content {
    display: flex;
    padding: 20px;

    .info {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .price {
        display: flex;
        gap: 8px;

        h5 {
          color: ${({ theme }) => theme.pallet.base_dark};
        }

        h6 {
          text-decoration-line: line-through;
          color: ${({ theme }) => theme.pallet.gray_5};
        }
      }

      .stars {
        display: flex;
        gap: 6px;

        h6 {
          color: ${({ theme }) => theme.pallet.base_orange};
        }
      }
    }

    .heart {
      cursor: pointer;
    }
  }
`;

const StarIcon = styled.img``;

export default ProductItemCardGrid;
