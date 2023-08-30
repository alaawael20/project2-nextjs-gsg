import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

const ProductItemCardFlex = ({
  currentPrice,
  pastPrice,
  rating,
  details,
  orders,
  shipping,
  description,
  image,
}) => {
  return (
    <Card>
      <div className='img'>
        <CardImage src={image} />
      </div>
      <div className='content'>
        <div className='info'>
          <Typography tag='body1' fw='600' lh='22px'>
            {details}
          </Typography>
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
            <Typography tag='h6' fw='400' lh='19px' className='rating'>
              {rating}
            </Typography>
            <Typography tag='h6' fw='400' lh='19px'>
              {orders} orders
            </Typography>
            <Typography tag='h6' fw='400' lh='19px'>
              {shipping}
            </Typography>
          </div>
          <Typography tag='h6' fw='400' lh='24px'>
            {description}
          </Typography>
          <Typography tag='h6' fw='500' lh='19px'>
            View details
          </Typography>
        </div>
        <div className='heart'>
          <StarIcon src={images.heart} />
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid #e3e8ee;
  border-radius: 6px;

  .img {
    width: 210px;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 20px;

    .info {
      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        color: ${({ theme }) => theme.pallet.base_dark};
      }

      .price {
        display: flex;
        gap: 8px;

        h5 {
          color: ${({ theme }) => theme.pallet.base_dark};
        }

        h6 {
          text-decoration-line: line-through;
          color: ${({ theme }) => theme.pallet.gray_5} !important;
        }
      }

      .stars {
        display: flex;
        gap: 6px;

        .stars_icon {
          min-width: max-content;
        }

        h6:nth-child(2) {
          color: ${({ theme }) => theme.pallet.base_orange};
        }

        h6 :nth-child(3) {
          color: ${({ theme }) => theme.pallet.gray_3};
        }

        h6:last-child {
          color: ${({ theme }) => theme.pallet.base_green};
        }
      }
      h6 {
        color: ${({ theme }) => theme.pallet.gray_5};
      }
      h6:last-child {
        color: ${({ theme }) => theme.pallet.base_blue};
      }
    }
    .heart {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 600px) {
    .content {
      .info {
        .stars {
          flex-direction: column;
        }
      }
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: scale-down;
`;

const StarIcon = styled.img``;
export default ProductItemCardFlex;
