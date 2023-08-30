'use client';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Typography from '@/components/atoms/Typography';
import AuthForm from '@/components/molecules/AuthForm';
import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

const SignUp = () => {
  return (
    <SignUpForm>
      <form action=''>
        <div className='container'>
          <Typography tag='h3' fw='500' lh='32px'>
            Sign up
          </Typography>
          <div className='name'>
            <div className='form_group'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' placeholder='name' />
            </div>
            <div className='form_group'>
              <label htmlFor='surname'>Surname</label>
              <input type='surname' id='surname' placeholder='surname' />
            </div>
          </div>
          <div className='form_group'>
            <label htmlFor='email'>Your Email</label>
            <input id='email' type='email' placeholder='Email or Phone' />
          </div>
          <div className='form_group'>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' placeholder='Password' />
          </div>
          <div className='form_group'>
            <label htmlFor='rpassword'> Repeat Password</label>
            <input
              id='rpassword'
              type='password'
              placeholder='Confirm Password'
            />
          </div>
          <Button>Register now</Button>
          <div className='agree'>
            <Input type='checkbox' width={'1rem'} />I agree with
            <span>Terms and Conditions</span>
          </div>
          <HorizontalLine />
          <Typography tag={'h6'} fw='400'>
            Already have an account? <Link href='/login'>Login</Link>
          </Typography>
        </div>
      </form>
      <AuthForm />
    </SignUpForm>
  );
};

const SignUpForm = styled.section`
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

export default SignUp;
