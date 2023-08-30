'use client';
import HeaderNav from '@/components/molecules/HeaderNav';
import Header from '@/components/organism/Header';
import React from 'react';
import Hero from './Sections/Hero';
import { Container } from '@/components/atoms/Container';
import DealsAndOffers from './Sections/DealsAndOffers';
import HomeAndOutdoor from './Sections/HomeAndOutdoor';
import ElectronicsAndGadgets from './Sections/ElectronicsAndGadgets';
import RequestSuppliers from './Sections/RequestSuppliers';
import RecommendedItems from './Sections/RecommendedItems';
import ExtraServices from './Sections/ExtraServices';
import SuppliersRegion from './Sections/SuppliersRegion';
import Subscribe from '@/components/organism/Subscribe';
import Footer from '@/components/organism/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeaderNav />
      <Container>
        <Hero />
        <DealsAndOffers />
        <HomeAndOutdoor />
        <ElectronicsAndGadgets />
        <RequestSuppliers />
        <RecommendedItems />
        <ExtraServices />
        <SuppliersRegion />
      </Container>
      <Subscribe />
      <Footer />
    </>
  );
};

export default HomePage;
