import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

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

const Container = styled.footer`
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

const CreditCardImage = styled.img`
  padding: 0 5px;
`;

export default AuthForm;
