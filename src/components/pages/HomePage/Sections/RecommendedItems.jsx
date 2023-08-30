import Typography from '@/components/atoms/Typography';
import { recommendedItems } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';
import RecommendedItemCard from '../components/RecommendedItemCard';

const RecommendedItems = () => {
  return (
    <RecommendedItemsSection>
      <Typography tag='h3' fw='600' lh='32px'>
        Recommended items
      </Typography>
      <div className='items'>
        {recommendedItems.map((item) => (
          <RecommendedItemCard
            image={item.image}
            price={item.price}
            text={item.text}
            key={item.image}
          />
        ))}
      </div>
    </RecommendedItemsSection>
  );
};
const RecommendedItemsSection = styled.section`
  margin-top: 30px;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    gap: 20px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1260px) {
    .items {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (max-width: 992px) {
    .items {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    .items {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 576px) {
    .items {
      grid-template-columns: 1fr;
    }
  }
`;
export default RecommendedItems;
