import { styled } from 'styled-components';

export const TextArea = styled.textarea`
  color: ${({ theme }) => theme.pallet.gray_5};
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 73px;
  outline: none;
  padding: 0.5rem 0.8rem;

  &::placeholder {
    color: ${({ theme }) => theme.pallet.gray_5};
    font-family: 'Inter';
  }
`;