import React from 'react';
import { styled } from 'styled-components';

const CartCoupon = () => {
  return (
    <CartPaymentMethodsCoupon>
      <CouponHeader>Have a coupon?</CouponHeader>
      <CouponApply>
        <CouponApplyInput placeholder='Add coupon' />
        <CouponApplyButton>Apply</CouponApplyButton>
      </CouponApply>
    </CartPaymentMethodsCoupon>
  );
};

const CartPaymentMethodsCoupon = styled.div`
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.gray_3};
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 20px 16px;
`;

const CouponHeader = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.pallet.gray_6};
`;

const CouponApply = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 9px;
`;

const CouponApplyInput = styled.input`
  width: 100%;
  min-width: 110px;
  height: 40px;
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid #e0e0e0;
  padding-left: 10px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  outline: none;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.pallet.gray_4};
  }
`;

const CouponApplyButton = styled.button`
  min-width: 85px;
  height: 40px;
  color: ${({ theme }) => theme.pallet.base_blue};
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  background: ${({ theme }) => theme.pallet.base_white};
  border-left: none;
  border: 1px solid ${({ theme }) => theme.pallet.gray_3};
  cursor: pointer;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;
export default CartCoupon;
