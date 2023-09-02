import { styled } from 'styled-components';

export const InputStyle = styled.input`
  width: ${({ width }) => width};
  height: 40px;
  border: 1px solid ${({ theme, border_color }) => theme.pallet[border_color]};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding-left: 10px;

  &::placeholder {
    font-family: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.pallet.gray_5};
    font-family: 'Inter';
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  display: flex;

  input {
    width: 100%;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.pallet.gray_3};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-left: 10px;

    &::placeholder {
      font-family: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.pallet.gray_5};
      font-family: 'Inter';
    }
  }

  img {
    position: absolute;
    right: 1rem;
    top: 25%;
    cursor: pointer;
  }

  svg {
    position: absolute;
    right: 1rem;
    top: 25%;
    cursor: pointer;
  }
`;

export const InputPassword = styled.input``;

export const Icon = styled.img``;