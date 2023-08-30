import Typography from '@/components/atoms/Typography';
import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

const DealAndOffersItem = ({ image, title, discount }) => {
  return (
    <Div>
      <Image width={140} height={140} alt={title} src={image} />
      <Typography tag={'h6'} fw='400' lh='24px'>
        {title}
      </Typography>
      <Typography tag={'body2'} fw='500'>
        {discount}
      </Typography>
    </Div>
  );
};
const Div = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.pallet.gray_9};

  img {
    background-color: ${({ theme }) => theme.pallet.base_white};
  }

  h6 {
    color: ${({ theme }) => theme.pallet.base_dark};
    letter-spacing: -0.2px;
    text-align: center;
    padding-top: 1rem;
  }
  p {
    background-color: ${({ theme }) => theme.pallet.base_red_1};
    padding: 0.5rem;
    border-radius: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.pallet.base_red};
  }
`;
export default DealAndOffersItem;
