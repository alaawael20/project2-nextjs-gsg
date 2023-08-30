import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

const CartSavedLaterCard = ({ image, price, name, subName }) => {
  return (
    <Card>
      <div className='img'>
        <ProductImage src={image} />
      </div>

      <Typography tag='h5' fw='600' lh='22px'>
        {price}
      </Typography>
      <Typography tag='h6' fw='400' lh='24px'>
        {name}
      </Typography>
      <Typography tag='h6' fw='400' lh='24px'>
        {subName}
      </Typography>
      <div className='buttons'>
        <Button bgcolor={'base_white'}>
          <Icon src={images.ship} />
          Move to cart
        </Button>
      </div>
    </Card>
  );
};

const Icon = styled.img``;

const ProductImage = styled.img`
  height: 70%;
  mix-blend-mode: multiply;
  filter: contrast(1);

  transition: all 0.3s ease-in-out;
`;

const Card = styled.div`
  .img {
    width: 270px;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.pallet.gray_3};
    border: 1px solid ${({ theme }) => theme.pallet.gray_3};
    border-radius: 6px;
    &:hover {
      img {
        scale: 1.2;
      }
    }
  }

  h5 {
    margin: 10px 0;
  }
  h6 {
    color: ${({ theme }) => theme.pallet.gray_5};
  }

  .buttons {
    padding-top: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: auto;
      color: ${({ theme }) => theme.pallet.base_blue};
      border: 1px solid #ddd;
      border-radius: 0.5rem;
      padding: 0 1rem;
    }
  }
`;
export default CartSavedLaterCard;
