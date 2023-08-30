import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { heroMenuItem, images } from '@/mock/data';
import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

const Hero = () => {
  return (
    <HeroSection>
      <div className='container'>
        <HeroContainer>
          <HeroMenu>
            {heroMenuItem.map((obj) => (
              <HeroMenuItem key={obj.text} active={obj.active}>
                {obj.text}
              </HeroMenuItem>
            ))}
          </HeroMenu>
        </HeroContainer>
        <HeroImage bg_image={images.heroBanner}>
          <HeroImageContent>
            <h4>Latest trending</h4>
            <Typography tag='h3' fw='700'>
              Electronic items
            </Typography>
            <Button bgcolor='base_white'>Learn more</Button>
          </HeroImageContent>
        </HeroImage>
        <HeroRectangles>
          <div className='user'>
            <div className='userInfo'>
              <Image src={images.avatar} width={44} height={44} alt='avatar' />
              <Typography tag='h6' fw='400'>
                Hi, user <br /> Let’s get started
              </Typography>
            </div>
            <div className='buttons'>
              <Button>Join now</Button>
              <Button bgcolor='base_white'>Login in</Button>
            </div>
          </div>
          <div className='discount'>
            <Typography tag={'h6'} fw='400'>
              Get US $10 <br /> off with a new <br /> supplier{' '}
            </Typography>
          </div>
          <div className='quote'>
            <Typography tag={'h6'} fw='400'>
              Send quotes with <br /> supplier <br /> preferences{' '}
            </Typography>
          </div>
        </HeroRectangles>
      </div>
    </HeroSection>
  );
};
const HeroSection = styled.section`
  display: flex;
  padding: 1rem;
  margin: 1rem 0;
  width: 100%;
  height: 400px;
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.gray_3};
  border-radius: 6px;

  .container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(200px, 22%) 1fr minmax(150px, 17%);
    grid-row: 100%;
    gap: 13px;
  }

  @media screen and (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`;
const HeroContainer = styled.div``;
const HeroMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const HeroMenuItem = styled.li`
  padding: 10px;
  font-weight: ${({ active }) => (active == 'true' ? 600 : 400)};
  font-size: 16px;
  line-height: 19px;
  color: ${({ active, theme }) =>
    active == 'true' ? theme.pallet.base_dark : theme.pallet.gray_6};
  background-color: ${({ active, theme }) =>
    active == 'true' ? '#E5F1FF' : theme.pallet.base_white};
  border-radius: 6px;
`;
const HeroImage = styled.div`
  background-image: url(${({ bg_image }) => bg_image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const HeroImageContent = styled.div`
  margin: 10% 0% 0 5%;
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  button {
    margin-top: 1rem;
    border-radius: 0.2rem;
  }
`;
const HeroRectangles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .user {
    display: flex;
    flex-direction: column;

    width: 100%;
    border-radius: 6px;
    background: #e3f0ff;
    padding: 10px;
    gap: 1rem;

    .userInfo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      button {
        width: 100%;
        border-radius: 0.3rem;
        padding: 1rem 0;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.pallet.base_white};
        &:last-child {
          color: ${({ theme }) => theme.pallet.base_blue};
        }
      }
    }
  }

  .discount {
    width: 100%;
    background: #f38332;
    border-radius: 6px;
    padding: 20px 16px;
    color: ${({ theme }) => theme.pallet.base_white};
  }

  .quote {
    width: 100%;
    background: #55bdc4;
    border-radius: 6px;
    padding: 20px 16px;
    color: ${({ theme }) => theme.pallet.base_white};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Hero;
