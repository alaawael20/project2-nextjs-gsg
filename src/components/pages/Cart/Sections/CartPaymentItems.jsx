import { cartData, images } from '@/mock/data';
import React from 'react';
import CartPaymentItem from '../components/CartPaymentItem';
import { styled } from 'styled-components';
import Button from '@/components/atoms/Button';
import CartCoupon from '../components/CartCoupon';
import Typography from '@/components/atoms/Typography';

const CartPaymentItems = () => {
  return (
    <Div>
      <div className='items'>
        {cartData.map((item) => (
          <CartPaymentItem
            key={item.id}
            image={item.image}
            title={item.details}
            text={item.description}
            price={item.currentPrice}
          />
        ))}
        <Buttons>
          <Button>
            <Icon src={images.arrowIcon} />
            Back to shop
          </Button>
          <Button bgcolor={'base_white'}>Remove all</Button>
        </Buttons>
      </div>
      <div className='payment_method'>
        <CartCoupon />
        <div className='checkout'>
          <div className='checkout_container'>
            <div className='checkout_details'>
              <div className='item'>
                <Typography tag='h6' fw='400' lh='24px'>
                  Subtotal:
                </Typography>
                <Typography tag='body1' fw='600' lh='24px'>
                  $1403.97
                </Typography>
              </div>
              <div className='item'>
                <Typography tag='h6' fw='400' lh='24px'>
                  Discount:
                </Typography>
                <Typography tag='body1' fw='600' lh='24px'>
                  - $60.00
                </Typography>
              </div>
              <div className='item'>
                <Typography tag='h6' fw='400' lh='24px'>
                  Tax:
                </Typography>
                <Typography tag='body1' fw='600' lh='24px'>
                  + $14.00
                </Typography>
              </div>
              <div className='item'>
                <Typography tag='h6' fw='400' lh='24px'>
                  Total:
                </Typography>
                <Typography tag='body1' fw='600' lh='24px'>
                  $1357.97
                </Typography>
              </div>
            </div>
            <Button>Checkout</Button>
            <div className='cards'>
              <CardImage src={images.american} />
              <CardImage src={images.express} />
              <CardImage src={images.visa} />
              <CardImage src={images.payment} />
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

const CardImage = styled.img`
  padding: 0 5px;
`;
const Icon = styled.img``;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  button {
    border-radius: 0.5rem;
    padding: 0 1rem;
    width: auto;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    &:last-child {
      border: 1px solid #e3e8ee;
      color: ${({ theme }) => theme.pallet.base_blue};
      box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    }
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  margin-top: 23px;

  .items {
    background: ${({ theme }) => theme.pallet.base_white};
    border: 1px solid ${({ theme }) => theme.pallet.base_white_1};
    border-radius: 6px;
  }

  .payment_method {
    .checkout {
      background: ${({ theme }) => theme.pallet.base_white};
      border: 1px solid ${({ theme }) => theme.pallet.base_white_1};
      border-radius: 6px;
      padding: 20px 16px;

      .checkout_container {
        width: 100%;
        height: 100%;

        .checkout_details {
          width: 100%;
          margin-bottom: 22px;

          .item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;

            h6 {
              color: ${({ theme }) => theme.pallet.base_dark};
            }

            p {
              text-align: right;
              letter-spacing: -0.2px;
              color: black;
            }

            &:first-child {
              p {
                color: ${({ theme }) => theme.pallet.base_dark};
              }
            }

            &:nth-child(2) {
              p {
                color: ${({ theme }) => theme.pallet.base_red};
              }
            }

            &:nth-child(3) {
              p {
                color: ${({ theme }) => theme.pallet.base_green};
              }
            }

            &:last-child {
              border-top: 1px solid #ddd;
              padding-top: 1rem;
            }
          }
        }
        button {
          width: 100%;
          background: ${({ theme }) => theme.pallet.base_green};
          color: ${({ theme }) => theme.pallet.base_white};
          border: none;
          border-radius: 0.5rem;
        }
        .cards {
          padding-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export default CartPaymentItems;
