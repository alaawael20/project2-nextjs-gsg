import Typography from '@/components/atoms/Typography';
import { salaryFormat } from '@/utils';
import React from 'react';
import { styled } from 'styled-components';

const SecondDivItem = ({ title, price, image }) => {
  return (
    <ItemContainer>
      <div className='text'>
        <Typography tag={'h6'} fw='400'>
          {title}
        </Typography>
        <div>
          <Typography tag='body2' fw='400'>
            {' '}
            From
          </Typography>
          <Typography tag='body2' fw='400'>
            {salaryFormat('USD ', price)}
          </Typography>
        </div>
      </div>
      <div className='img'>
        <ItemImage src={image} />
      </div>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.pallet.gray_9};
  padding: 0 0.5rem;

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    p {
      color: ${({ theme }) => theme.pallet.gray_5};
    }
  }

  .img {
    width: 82px;
    height: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export default SecondDivItem;
