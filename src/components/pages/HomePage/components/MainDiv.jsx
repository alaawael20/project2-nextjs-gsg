import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import React from 'react';
import { styled } from 'styled-components';

const MainDiv = ({ image, text, buttonText }) => {
  return (
    <Div bgimage={image}>
      <div className='content'>
        <Typography tag='h4' fw='600' lh={'26px'}>
          {text}
        </Typography>
        <Button bgcolor={'base_white'}>{buttonText}</Button>
      </div>
    </Div>
  );
};

const Div = styled.div`
  background-image: url(${({ bgimage }) => bgimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h4 {
      color: ${({ theme }) => theme.pallet.base_dark};
      letter-spacing: -0.2px;
      width: 130px;
    }
    button {
      border-radius: 6px;
      box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
      color: ${({ theme }) => theme.pallet.base_dark};
      text-align: center;
    }
  }
`;

export default MainDiv;
