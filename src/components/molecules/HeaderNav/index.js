import { Container } from '@/components/atoms/Container';
import Select from '@/components/atoms/InputSelect';
import Typography from '@/components/atoms/Typography';
import { currency, images, secondHeader, shipSelect } from '@/mock/data';
import { Flex } from '@/styles/customStyle';
import React from 'react';
import { DropDown, FlagImg, NavSection, NavbarCategories, NavbarCategoriesIcon, NavbarCategoriesItems, NavbarCategoryItem, RightDiv } from './style';

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
