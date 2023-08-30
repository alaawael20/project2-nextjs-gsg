import { secondaryImages } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

const ProductImages = ({ image }) => {
  return (
    <Div>
      <div className='main_img'>
        <MainImg src={secondaryImages[0].image} />
      </div>
      <div className='secondary_images'>
        <div className='img'>
          <SecondaryImg src={secondaryImages[1].image} />
        </div>
        <div className='img'>
          <SecondaryImg src={secondaryImages[2].image} />
        </div>
        <div className='img'>
          <SecondaryImg src={secondaryImages[3].image} />
        </div>
        <div className='img'>
          <SecondaryImg src={secondaryImages[4].image} />
        </div>
        <div className='img'>
          <SecondaryImg src={secondaryImages[5].image} />
        </div>
        <div className='img'>
          <SecondaryImg src={secondaryImages[6].image} />
        </div>
      </div>
    </Div>
  );
};

const MainImg = styled.img`
  object-fit: contain;
`;

const SecondaryImg = styled.img``;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.gray_3};
  border-radius: 6px;
  margin-bottom: 20px;
  overflow: hidden;

  .secondary_images {
    display: flex;
    justify-content: space-between;

    .img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      padding: 2px 0;
      background: ${({ theme }) => theme.pallet.base_white};
      border: 1px solid ${({ theme }) => theme.pallet.gray_3};
      border-radius: 4px;
    }
  }
`;

export default ProductImages;
