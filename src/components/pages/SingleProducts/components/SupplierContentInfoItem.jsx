import Typography from '@/components/atoms/Typography';
import React from 'react';
import { styled } from 'styled-components';

const SupplierContentInfoItem = ({ image, text }) => {
  return (
    <Div>
      <div className='img'>
        <Icon src={image} />
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
  gap: 18px;
  margin-bottom: 8px;

  .img {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h6 {
    color: ${({ theme }) => theme.pallet.gray_4};
  }
`;

export default SupplierContentInfoItem;
