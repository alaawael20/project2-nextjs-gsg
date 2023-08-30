import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { salaryFormat } from '@/utils';
import React from 'react';
import { styled } from 'styled-components';

const CartPaymentItem = ({ image, title, text, price }) => {
  return (
    <CartPaymentItemContainer>
      <div className='card_content'>
        <div className='card_details'>
          <div className='img'>
            <ProductImage src={image} />
          </div>

          <div className='details_content'>
            <Typography tag='h6' fw='600' lh='22px'>
              {title}
            </Typography>
            <Typography tag='body1' fw='400' lh='22px'>
              {text}
            </Typography>
            <div className='buttons'>
              <Button bgcolor={'base_white'}>Remove</Button>
              <Button bgcolor={'base_white'}>Save for later</Button>
            </div>
          </div>
        </div>

        <div className='quantity'>
          <Typography tag='h6' fw='600' lh='22px'>
            {salaryFormat('$', price)}
          </Typography>
          <select>
            <option value='Qty: 1'>Qty: 1</option>
            <option value='Qty: 2'>Qty: 2</option>
            <option value='Qty: 9'>Qty: 9</option>
          </select>
        </div>
      </div>
    </CartPaymentItemContainer>
  );
};
const ProductImage = styled.img`
  height: 70%;
  mix-blend-mode: multiply;
  filter: contrast(1);
`;

const CartPaymentItemContainer = styled.div`
  .card_content {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 0;
    border-bottom: 1px solid ${({ theme }) => theme.pallet.base_white_1};

    .card_details {
      display: flex;
      gap: 10px;

      .img {
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({ theme }) => theme.pallet.base_white};
        border: ${({ theme }) => theme.pallet.base_white};
        border-radius: 6px;
      }
      .details_content {
        p {
          max-width: 360px;
          color: ${({ theme }) => theme.pallet.gray_5};
          margin: 6px 0 10px;
        }
        .buttons {
          display: flex;
          gap: 0.5rem;
          button {
            color: ${({ theme }) => theme.pallet.base_red};
            border: 1px solid #e3e8ee;
            box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);

            &:last-child {
              color: ${({ theme }) => theme.pallet.base_blue};
            }
          }
        }
      }
    }

    .quantity {
      h6 {
        text-align: right;
      }

      select {
        width: 123px;
        height: 40px;
        background: ${({ theme }) => theme.pallet.base_white};
        outline: none;
        border: 1px solid ${({ theme }) => theme.pallet.base_white_1};
        border-radius: 6px;
        padding-right: 1rem;
        margin-top: 12px;
      }
      option {
      }
    }
  }
`;

export default CartPaymentItem;
