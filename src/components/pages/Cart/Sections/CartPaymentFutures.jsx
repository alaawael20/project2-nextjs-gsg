import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

const CartPaymentFutures = () => {
  return (
    <Div>
      <div className='features_div'>
        <div className='img'>
          <FeaturesImage src={images.lockIcon} />
        </div>
        <div className='content'>
          <Typography tag='h6' fw='400' lh='24px'>
            Secure payment
          </Typography>
          <Typography tag='body1' fw='400'>
            Have you ever finally just{' '}
          </Typography>
        </div>
      </div>
      <div className='features_div'>
        <div className='img'>
          <FeaturesImage src={images.chatIcon} />
        </div>
        <div className='content'>
          <Typography tag='h6' fw='400' lh='24px'>
            Customer support
          </Typography>
          <Typography tag='body1' fw='400'>
            Have you ever finally just
          </Typography>
        </div>
      </div>
      <div className='features_div'>
        <div className='img'>
          <FeaturesImage src={images.deliveryIcon} />
        </div>
        <div className='content'>
          <Typography tag='h6' fw='400' lh='24px'>
            Free delivery
          </Typography>
          <Typography tag='body1' fw='400'>
            Have you ever finally just
          </Typography>
        </div>
      </div>
    </Div>
  );
};
const FeaturesImage = styled.img`
  object-fit: contain;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 54px;
  margin: 30px 0;

  .features_div {
    display: flex;
    align-items: center;
    gap: 10px;

    .img {
      min-width: 48px;
      height: 48px;
      border-radius: 50%;
      background: ${({ theme }) => theme.pallet.gray_3};
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content {
      h6 {
        letter-spacing: -0.2px;
        color: ${({ theme }) => theme.pallet.base_dark};
      }
      p {
        letter-spacing: -0.2px;
        color: ${({ theme }) => theme.pallet.gary_1};
      }
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export default CartPaymentFutures;
