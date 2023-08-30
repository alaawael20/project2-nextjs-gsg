import Typography from '@/components/atoms/Typography';
import React from 'react';
import { styled } from 'styled-components';

const SolidAndReviews = ({ image, text }) => {
  return (
    <>
      <Dot></Dot>
      <Div>
        <div className='img'>
          <Icon src={image} />
        </div>
        <Typography tag='h6' fw='400' lh='19px'>
          {text}
        </Typography>
      </Div>
    </>
  );
};

const Icon = styled.img``;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #dbdbdb;
`;
const Div = styled.div`
  display: flex;
  gap: 9px;

  h6 {
    color: ${({ theme }) => theme.pallet.gray_10} !important;
  }
`;

export default SolidAndReviews;
