import { styled } from 'styled-components';

export const SignUpForm = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.pallet.gray_1};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  form {
    width: 387px;
    margin: 3rem 0 5rem;
    background-color: ${(props) => props.theme.pallet.base_white};
    box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
    border-radius: 6px;

    .container {
      padding: 0.5rem 1rem;
      .name {
        display: flex;
        gap: 1rem;
        input {
          width: 96%;
        }
      }
      .form_group {
        padding-top: 1rem;
        display: flex;
        flex-direction: column;

        input {
          outline: none;
          border: 1px solid #ddd;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }

        .label {
          display: flex;
          align-items: center;
          justify-content: space-between;

          label {
            padding-bottom: 0.3rem;
            &:last-child {
              color: ${({ theme }) => theme.pallet.base_blue};
            }
          }
        }
      }

      button {
        margin-top: 1rem;
        width: 100%;
        border-radius: 0.5rem;
      }
      .agree {
        display: flex;
        align-items: center;
        gap: 1rem;

        span {
          color: ${({ theme }) => theme.pallet.base_blue};
        }
      }
      h6 {
        text-align: center;
        padding-top: 1rem;
        a {
          color: ${({ theme }) => theme.pallet.base_blue};
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    form {
      width: 100%;
      margin: 0;
    }
  }
`;

export const HorizontalLine = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.pallet.gray_5};
  text-transform: uppercase;
  position: relative;
  margin: 1.5rem 0;

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 45%;
    right: 0;
    top: 50%;
    background-color: ${({ theme }) => theme.pallet.gray_2};
  }

  &::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 45%;
    left: 0;
    top: 50%;
    background-color: ${({ theme }) => theme.pallet.gray_2};
  }
`;