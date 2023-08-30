import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

const SingleProductFeature = ({ text }) => {
  return (
    <Div>
      <div>
        <Icon src={images.true} />
      </div>
      <Typography tag='h6' fw='400' lh='24px'>
        {text}
      </Typography>
    </Div>
  );
};

const Icon = styled.img``;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  h6 {
    color: ${({ theme }) => theme.pallet.gray_6};
  }
`;

export default SingleProductFeature;
