import { styled } from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7%;
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.theme.pallet.base_white};

  .links {
    display: flex;
    gap: 30px;
  }

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const CreditCardImage = styled.img`
  padding: 0 5px;
`;