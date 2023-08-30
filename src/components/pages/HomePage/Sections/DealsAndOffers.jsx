import Typography from '@/components/atoms/Typography';
import React from 'react';
import { styled } from 'styled-components';
import { dealsAndOffers, targetDate } from '@/mock/data';
import DealAndOffersItem from '../components/DealAndOffersItem';
import dynamic from 'next/dynamic';
const TimerOfDeals = dynamic(() => import('../components/TimerofDeals'), {
  ssr: false,
});

const DealsAndOffers = () => {
  return (
    <DealsAndOffersSection>
      <div className='mainSection'>
        <div className='text'>
          <Typography tag='h5' fw='600' lh='28px'>
            Deals and offers
          </Typography>
          <Typography tag='h6' fw='400'>
            Hygiene equipments
          </Typography>
        </div>
        <TimerOfDeals targetDate={targetDate} />
      </div>
      <div className='deal_offer_items'>
        {dealsAndOffers.map((data) => (
          <DealAndOffersItem
            key={data.image}
            image={data.image}
            title={data.title}
            discount={data.discount}
          />
        ))}
      </div>
    </DealsAndOffersSection>
  );
};
const DealsAndOffersSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 240px;
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.gray_3};
  border-radius: 6px;

  .mainSection {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .text {
      h5 {
        color: ${({ theme }) => theme.pallet.base_dark};
        letter-spacing: -0.2px;
      }
      h6 {
        color: ${({ theme }) => theme.pallet.gray_5};
      }
    }
  }
  .deal_offer_items {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  @media screen and (max-width: 1024px) {
    overflow-x: scroll;
  }
`;
export default DealsAndOffers;
