import React from 'react';
import { styled } from 'styled-components';
import MainDiv from '../components/MainDiv';
import SecondDiv from '../components/SecondDiv';
import SecondDivItem from '../components/SecondDivItem';
import { electronicsAndGadgets, images } from '@/mock/data';

const ElectronicsAndGadgets = () => {
  return (
    <ElectronicsAndGadgetsSection>
      <ElectronicsAndGadgetsContainer>
        <MainDiv
          image={images.electronics}
          text='Consumer electronics and gadgets'
          buttonText='Source now'
        />
        <SecondDiv>
          {electronicsAndGadgets.map((item) => (
            <SecondDivItem
              key={item.image}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </SecondDiv>
      </ElectronicsAndGadgetsContainer>
    </ElectronicsAndGadgetsSection>
  );
};

const ElectronicsAndGadgetsSection = styled.section`
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
const ElectronicsAndGadgetsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
export default ElectronicsAndGadgets;
