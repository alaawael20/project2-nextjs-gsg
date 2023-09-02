import { Container } from '@/components/atoms/Container';
import React from 'react';
import {
  DiscountBarButton,
  DiscountBarContent,
  DiscountBarContentContainer,
  DiscountBarContentHeader,
  DiscountBarContentText,
  DiscountBarSection
} from './style';

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


export default SupplierDiscount;
