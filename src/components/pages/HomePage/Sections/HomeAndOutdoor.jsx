import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { homeAndOutdoor, images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';
import MainDiv from '../components/MainDiv';
import SecondDiv from '../components/SecondDiv';
import SecondDivItem from '../components/SecondDivItem';

const HomeAndOutdoor = () => {
  return (
    <HomeOutdoorSection>
      <HomeOutdoorContainer>
        <MainDiv
          image={images.homeAndOutdoor}
          text='Home and outdoor'
          buttonText='Source now'
        />
        <SecondDiv>
          {homeAndOutdoor.map((item) => (
            <SecondDivItem
              key={item.image}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </SecondDiv>
      </HomeOutdoorContainer>
    </HomeOutdoorSection>
  );
};
const HomeOutdoorSection = styled.section`
  width: 100%;
  height: 240px;
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.gray_3};
  border-radius: 6px;
  margin-top: 20px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HomeOutdoorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export default HomeAndOutdoor;
