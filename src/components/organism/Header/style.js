import { styled } from 'styled-components';

export const HeaderSection = styled.header`
  padding: 1rem 0;
  width: 100%;
  background-color: ${({ theme }) => theme.pallet.base_white};
  display: flex;
  align-items: center;
  justify-content: center;
`;