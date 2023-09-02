'use client';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Typography from '@/components/atoms/Typography';
import AuthForm from '@/components/molecules/AuthForm';
import { images } from '@/mock/data';
import { Flex } from '@/styles/customStyle';
import Link from 'next/link';
import React, { useState } from 'react';
import { FormSection, HorizontalLine, Icon } from './style';

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

export default Login;
