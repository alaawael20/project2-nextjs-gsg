'use client';
import { Container } from '@/components/atoms/Container';
import Typography from '@/components/atoms/Typography';
import SupplierDiscount from '@/components/molecules/SupplierDiscount';
import Footer from '@/components/organism/Footer';
import Header from '@/components/organism/Header';
import React from 'react';
import CartPaymentItems from './Sections/CartPaymentItems';
import CartPaymentFutures from './Sections/CartPaymentFutures';
import SavedForLater from './Sections/SavedForLater';

const Cart = () => {
  return (
    <>
      <Header showSearch={false} />
      <Container style={{ paddingTop: '1rem' }}>
        <Typography tag='h3' fw='600' lh='32px'>
          My cart (3)
        </Typography>
        <CartPaymentItems />
        <CartPaymentFutures />
        <SavedForLater />
      </Container>
      <SupplierDiscount />
      <Footer />
    </>
  );
};

export default Cart;
