import Typography from '@/components/atoms/Typography';
import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

const RecommendedItemCard = ({ image, price, text }) => {
  return (
    <Card>
      <div className='img'>
        <CardImage src={image} alt={text} />
      </div>
      <Typography tag='h6' fw='600' lh='22px'>
        {price}
      </Typography>
      <Typography tag='body1' fw='400' lh='24px'>
        {text}
      </Typography>
    </Card>
  );
};

const Card = styled.div`
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.gray_9};
  border-radius: 6px;

  .img {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    margin-bottom: 0.2rem;

    img {
      object-fit: contain;
    }
  }

  h6 {
    padding: 0 1rem;
  }

  p {
    color: ${({ theme }) => theme.pallet.gray_4};
    width: 186px;
    padding: 0.5rem 1rem;
  }

  @media screen and (max-width: 578px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CardImage = styled.img``;
export default RecommendedItemCard;
