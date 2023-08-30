import Typography from '@/components/atoms/Typography';
import React from 'react';
import { styled } from 'styled-components';

const SingleProductsTableItem = ({ name, value }) => {
  return (
    <Div>
      <div className='name'>
        <Typography tag='h6' fw='400' lh='19px'>
          {name}
        </Typography>
      </div>
      <div className='value'>
        <Typography tag='h6' fw='400' lh='24px'>
          {value}
        </Typography>
      </div>
    </Div>
  );
};

const Div = styled.div`
  height: 36px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  border-bottom: 1px solid #e0e7e9;

  h6 {
    padding-left: 10px;
    color: ${({ theme }) => theme.pallet.gray_6};
  }

  .name {
    display: flex;
    align-items: center;
    height: 100%;
    background: ${({ theme }) => theme.pallet.greyColor5};
  }

  .value {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export default SingleProductsTableItem;
