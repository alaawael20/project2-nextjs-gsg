import Typography from '@/components/atoms/Typography';
import React from 'react';
import { styled } from 'styled-components';
import CartSavedLaterCard from '../components/CartSavedLaterCard';
import { cardImage3, cardImage4, cardImage5, cardImage6 } from '@/mock/data';

const SavedForLater = () => {
  return (
    <Div>
      <Typography tag='h5' fw='600' lh='28px'>
        Saved for later
      </Typography>
      <div className='cards'>
        <CartSavedLaterCard
          image={cardImage5}
          price='$99.50'
          name='GoPro HERO6 4K Action'
          subName='Camera - Black'
        />
        <CartSavedLaterCard
          image={cardImage6}
          price='$99.50'
          name='GoPro HERO6 4K Action'
          subName='Camera - Black'
        />
        <CartSavedLaterCard
          image={cardImage3}
          price='$99.50'
          name='GoPro HERO6 4K Action'
          subName='Camera - Black'
        />
        <CartSavedLaterCard
          image={cardImage4}
          price='$99.50'
          name='GoPro HERO6 4K Action'
          subName='Camera - Black'
        />
      </div>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.base_white_1};
  border-radius: 6px;
  padding: 20px;

  .cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 22px;
  }
`;
export default SavedForLater;
