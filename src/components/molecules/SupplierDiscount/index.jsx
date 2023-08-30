import { Container } from '@/components/atoms/Container';
import React from 'react';
import { styled } from 'styled-components';

const SupplierDiscount = () => {
  return (
    <Container>
      <DiscountBarSection>
        <DiscountBarContentContainer>
          <DiscountBarContent>
            <DiscountBarContentHeader>
              Super discount on more than 100 USD
            </DiscountBarContentHeader>
            <DiscountBarContentText>
              Have you ever finally just write dummy info
            </DiscountBarContentText>
          </DiscountBarContent>
        </DiscountBarContentContainer>
        <DiscountBarButton>Shop now</DiscountBarButton>
      </DiscountBarSection>
    </Container>
  );
};

const DiscountBarSection = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.pallet.base_blue_2};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 40px;
`;

const DiscountBarContentContainer = styled.div`
  width: 65%;
  height: 100%;
  background-color: ${({ theme }) => theme.pallet.base_blue_3};
  display: flex;
  align-items: center;
  border-radius: 8px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 100%;
    right: -40px;
    transform: skewX(15deg);
    background-color: ${({ theme }) => theme.pallet.base_blue_3};
  }
  z-index: 1;
`;

const DiscountBarContent = styled.div`
  margin-left: 30px;
`;

const DiscountBarContentHeader = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.pallet.base_white};
`;

const DiscountBarContentText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.pallet.base_white};
  opacity: 0.7;
`;

const DiscountBarButton = styled.button`
  width: 121px;
  height: 40px;

  outline: none;
  border: none;
  background: ${({ theme }) => theme.pallet.base_orange};
  border-radius: 6px;
  color: ${({ theme }) => theme.pallet.base_white};
  margin-right: 32px;
  z-index: 2;
`;

export default SupplierDiscount;
