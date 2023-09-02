import { styled } from 'styled-components';

export const InputSelect = styled.select`
  font-weight: 500;
  line-height: 22px;
  height: 40px;
  border: ${({ theme, border }) =>
    border == 'true' ? `1px solid${theme.pallet.base_blue} ` : 'none'};
  outline: none;
  border-left: none;
  padding: 0 10px;
`;

export const Option = styled.option`
  display: flex;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.h6};
  line-height: 22px;
  color: ${({ theme }) => theme.pallet.base_dark};
`;
export const FlagImg = styled.img`
  width: 25px;
  height: 18px;
  object-fit: contain;
`;
