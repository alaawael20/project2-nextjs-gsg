import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

const Subscribe = () => {
  return (
    <SubscribeSection>
      <SubscribeContainer>
        <SubscribeContent>
          <Typography tag='h4' fw='600' lh='28px'>
            Subscribe on our newsletter
          </Typography>
          <Typography tag='body2' fw='400' lh='24px'>
            Get daily news on upcoming offers from many suppliers all over the
            world
          </Typography>
          <form>
            <InputIcon src={images.message} />
            <Input placeholder='Email' width='100%' />
            <Button>Subscribe</Button>
          </form>
        </SubscribeContent>
      </SubscribeContainer>
    </SubscribeSection>
  );
};

const SubscribeSection = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.pallet.gray_2};
`;

const SubscribeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;
const SubscribeContent = styled.div`
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

const InputIcon = styled.img`
  position: absolute;
  left: 1.2rem;
  top: 10px;
`;

export default Subscribe;
