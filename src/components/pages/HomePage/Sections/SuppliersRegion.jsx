import Typography from '@/components/atoms/Typography';
import { regions } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';
import SupplierRegionCard from '../components/SupplierRegionCard';

const SuppliersRegion = () => {
  return (
    <SuppliersRegionSection>
      <Typography tag='h3' fw='600' lh='32px'>
        Suppliers by region
      </Typography>
      <div className='cards'>
        {regions.map((reg) => (
          <SupplierRegionCard
            key={reg.name}
            image={reg.image}
            name={reg.name}
            website={reg.website}
          />
        ))}
      </div>
    </SuppliersRegionSection>
  );
};
const SuppliersRegionSection = styled.section`
  margin: 30px 0 40px;

  .cards {
    width: 100%;
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }

  @media screen and (max-width: 900px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
    }
  }

  @media screen and (max-width: 576px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }
  }
`;

export default SuppliersRegion;
