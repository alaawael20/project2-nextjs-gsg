import Typography from '@/components/atoms/Typography';
import { extraServicesData } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';
import ExtraServicesCard from '../components/ExtraServicesCard';

const ExtraServices = () => {
  return (
    <ExtraServicesSection>
      <Typography tag='h3' fw='600' lh='32px'>
        Our extra services
      </Typography>
      <div className='cards'>
        {extraServicesData.map((data) => (
          <ExtraServicesCard
            key={data.icon}
            image={data.image}
            icon={data.icon}
            text={data.text}
          />
        ))}
      </div>
    </ExtraServicesSection>
  );
};

const ExtraServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 30px;

  h3 {
    letter-spacing: -0.2px;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media screen and (max-width: 992px) {
    .cards {
      justify-content: space-around;
    }
  }
`;

export default ExtraServices;
