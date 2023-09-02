import { styled } from 'styled-components';

export const NavSection = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallet.base_white};
  border-top: 1px solid ${({ theme }) => theme.pallet.gray_2};
  border-bottom: 1px solid ${({ theme }) => theme.pallet.gray_2};
`;
export const NavbarCategories = styled.div`
  display: flex;
  width: 70%;
`;
export const NavbarCategoriesIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding-right: 0.5rem;
`;
export const NavbarCategoriesItems = styled.div`
  display: flex;
  gap: 1rem;
`;
export const NavbarCategoryItem = styled.h6`
  line-height: 22px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.h6};
  color: ${({ theme }) => theme.pallet.base_dark};

  &:last-child {
    padding-right: 0.5rem;
  }
`;

export const RightDiv = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4rem;
`;
export const DropDown = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 0.5rem;
  div {
    display: flex;
    gap: 0.2rem;
  }
`;
export const FlagImg = styled.img``;