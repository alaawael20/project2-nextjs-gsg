import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import {
  InputIcon,
  SubscribeContainer,
  SubscribeContent,
  SubscribeSection
} from './style';

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

export default Subscribe;
