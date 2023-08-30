'use client';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Typography from '@/components/atoms/Typography';
import AuthForm from '@/components/molecules/AuthForm';
import { images } from '@/mock/data';
import { Flex } from '@/styles/customStyle';
import Link from 'next/link';
import React, { useState } from 'react';
import { styled } from 'styled-components';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormSection>
      <form>
        <div className='container'>
          <Typography tag='h3' fw='500' lh='32px'>
            Sign in
          </Typography>
          <div className='form_group'>
            <label htmlFor='email'>username</label>
            <Input
              type='email'
              width={'100%'}
              placeholder={'Email or Phone'}
              id='email'
              border_color='gray_3'
            />
          </div>
          <div className='form_group'>
            <div className='label'>
              <label htmlFor='password'>password</label>
              <label>forget Password</label>
            </div>

            <Input
              showPassword={showPassword}
              type='password'
              width={'100%'}
              placeholder={'Password'}
              id='password'
              border_color='gray_3'
              set_show_password={() => {
                setShowPassword(!showPassword);
              }}
            />
          </div>
          <Flex gap='.5rem'>
            <Input type='checkbox' width={'1rem'} />
            Remember password
          </Flex>
          <Button>Login</Button>
          <HorizontalLine>OR</HorizontalLine>
          <div className='buttons'>
            <Button>
              <Icon src={images.facebook} /> Continue With Google
            </Button>
            <Button>
              <Icon src={images.google} /> Continue With Facebook
            </Button>
          </div>
          <Typography tag={'h6'} fw='400'>
            Don’t have an account? <Link href='/signup'>RegisterNow</Link>
          </Typography>
        </div>
      </form>

      <AuthForm />
    </FormSection>
  );
};

const FormSection = styled.section`
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
    padding: 1rem 0;

    .container {
      padding: 0.5rem 1rem;

      .form_group {
        padding-top: 1rem;

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
        width: 100%;
        border-radius: 0.5rem;
      }

      .buttons {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 1rem;
          gap: 2rem;
          background: #fff;
          color: #000;

          &:last-child {
            background: #4267b2;
            color: #fff;
          }
        }
      }
      h6 {
        padding-top: 1rem;
        color: ${({ theme }) => theme.pallet.gray_6};
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

const HorizontalLine = styled.div`
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

const Icon = styled.img``;

export default Login;
