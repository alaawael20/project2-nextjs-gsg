import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import { Container, CreditCardImage } from './style';

const AuthForm = () => {
  return (
    <Container>
      <div>
        <CreditCardImage src={images.payment} />
        <CreditCardImage src={images.visa} />
        <CreditCardImage src={images.express} />
        <CreditCardImage src={images.american} />
      </div>
      <div className='links'>
        <Typography tag='h6' fw='600'>
          Support
        </Typography>
        <Typography tag='h6' fw='600'>
          Privacy & Cookies
        </Typography>
        <Typography tag='h6' fw='600'>
          Accessibility
        </Typography>
      </div>
    </Container>
  );
};

export default AuthForm;
