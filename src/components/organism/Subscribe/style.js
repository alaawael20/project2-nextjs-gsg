import { styled } from 'styled-components';

export const SubscribeSection = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.pallet.gray_2};
`;

export const SubscribeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;
export const SubscribeContent = styled.div`
  text-align: center;

  h4,
  p {
    text-align: center;
    letter-spacing: -0.2px;
  }
  p {
    color: ${({ theme }) => theme.pallet.gray_8};
  }

  form {
    width: 85%;
    margin: 0 auto;
    display: flex;
    position: relative;
    margin-top: 21px;

    button {
      width: 110px;
      border-radius: 6px;
    }

    input {
      width: 100%;
      background: ${({ theme }) => theme.pallet.base_white};
      border-radius: 6px;
      padding-left: 36px;
      margin: 0 8px;
    }
  }
`;

export const InputIcon = styled.img`
  position: absolute;
  left: 1.2rem;
  top: 10px;
`;
