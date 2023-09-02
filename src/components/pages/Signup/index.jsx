'use client';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Typography from '@/components/atoms/Typography';
import AuthForm from '@/components/molecules/AuthForm';
import Link from 'next/link';
import React from 'react';
import { HorizontalLine, SignUpForm } from './style';

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

export default SignUp;
