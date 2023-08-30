import React from 'react';
import { styled } from 'styled-components';

const Input = ({
  placeholder,
  width,
  type = 'text',
  border_color = 'base_blue',
  id,
  showPassword = false,
  set_show_password = () => {},
}) => {
  return type == 'password' ? (
    <Div>
      <InputPassword
        id={id}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
      />
      {showPassword ? (
        <svg
          onClick={set_show_password}
          stroke='gray'
          fill='gray'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='1.3rem'
          width='1.3rem'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z'></path>
        </svg>
      ) : (
        <Icon onClick={set_show_password} src='/eye-icon.png' />
      )}
    </Div>
  ) : (
    <InputStyle
      type={type}
      placeholder={placeholder}
      width={width}
      border_color={border_color}
      id={id && id}
    />
  );
};
const InputStyle = styled.input`
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

const Div = styled.div`
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

const InputPassword = styled.input``;

const Icon = styled.img``;
export default Input;
