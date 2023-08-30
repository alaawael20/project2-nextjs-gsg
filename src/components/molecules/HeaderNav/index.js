import { Container } from '@/components/atoms/Container';
import Select from '@/components/atoms/InputSelect';
import Typography from '@/components/atoms/Typography';
import { currency, images, secondHeader, shipSelect } from '@/mock/data';
import { Flex } from '@/styles/customStyle';
import React from 'react';
import { styled } from 'styled-components';

const HeaderNav = () => {
  return (
    <NavSection>
      <Container>
        <Flex sb='true'>
          <NavbarCategories>
            <NavbarCategoriesIcon src={images.burgerIcon} />
            <NavbarCategoriesItems>
              {secondHeader.map((text) => (
                <NavbarCategoryItem key={text}>{text}</NavbarCategoryItem>
              ))}
            </NavbarCategoriesItems>
            <NavbarCategoriesIcon src={images.dropIcon} />
          </NavbarCategories>
          <RightDiv>
            <Select options={currency} border='false' />
            <DropDown>
              <div>
                <Typography tag='h6' fw='500' lh='22px'>
                  Ship to
                </Typography>
                <FlagImg src={shipSelect[0].image} />
              </div>
              <FlagImg src={images.dropIcon} />
            </DropDown>
          </RightDiv>
        </Flex>
      </Container>
    </NavSection>
  );
};

export default HeaderNav;

const NavSection = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallet.base_white};
  border-top: 1px solid ${({ theme }) => theme.pallet.gray_2};
  border-bottom: 1px solid ${({ theme }) => theme.pallet.gray_2};
`;
const NavbarCategories = styled.div`
  display: flex;
  width: 70%;
`;
const NavbarCategoriesIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding-right: 0.5rem;
`;
const NavbarCategoriesItems = styled.div`
  display: flex;
  gap: 1rem;
`;
const NavbarCategoryItem = styled.h6`
  line-height: 22px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.pallet.base_dark};

  &:last-child {
    padding-right: 0.5rem;
  }
`;

const RightDiv = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4rem;
`;
const DropDown = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 0.5rem;
  div {
    display: flex;
    gap: 0.2rem;
  }
`;
const FlagImg = styled.img``;
