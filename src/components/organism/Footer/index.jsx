import { Container } from '@/components/atoms/Container';
import Logo from '@/components/atoms/Logo';
import Typography from '@/components/atoms/Typography';
import { footer_socialMedia, images } from '@/mock/data';
import React from 'react';
import {
  ContentDetailImage,
  ContentDetailItem,
  ContentDetailItemContent,
  ContentDetailSingleImage,
  CopyRightsLanguage,
  CopyRightsLanguageIcon,
  FooterContainer,
  FooterContentDetails,
  FooterCopyRights,
  FooterCopyRightsContainer,
  FooterSection,
  SocialMediaICon
} from './style';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContainer>
          <div className='info'>
            <Logo />
            <Typography tag='h6' fw='400' lh='24px'>
              Best information about the company gies here but now lorem ipsum
              is
            </Typography>
            <div className='social_media'>
              {footer_socialMedia.map((icon) => (
                <SocialMediaICon src={icon} key={icon} />
              ))}
            </div>
          </div>
          <FooterContentDetails>
            <ContentDetailItem>
              <Typography tag='h6' fw='600' lh='22px'>
                About
              </Typography>
              <ContentDetailItemContent>
                <Typography tag='h6' fw='400' lh='24px'>
                  About Us
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  Find store
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  Categories
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  Blogs
                </Typography>
              </ContentDetailItemContent>
            </ContentDetailItem>
          </FooterContentDetails>

          <FooterContentDetails>
            <ContentDetailItem>
              <Typography tag='h6' fw='600' lh='22px'>
                Partnership
              </Typography>
              <ContentDetailItemContent>
                <Typography tag='h6' fw='400' lh='24px'>
                  About Us
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  Find store
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  Categories
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  Blogs
                </Typography>
              </ContentDetailItemContent>
            </ContentDetailItem>
          </FooterContentDetails>

          <FooterContentDetails>
            <ContentDetailItem>
              <Typography tag='h6' fw='600' lh='22px'>
                Information
              </Typography>
              <ContentDetailItemContent>
                <Typography tag='h6' fw='400' lh='24px'>
                  Help Center
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  Money Refund
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  Shipping
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  Contact us
                </Typography>
              </ContentDetailItemContent>
            </ContentDetailItem>
          </FooterContentDetails>

          <FooterContentDetails>
            <ContentDetailItem>
              <Typography tag='h6' fw='600' lh='22px'>
                For users
              </Typography>
              <ContentDetailItemContent>
                <Typography tag='h6' fw='400' lh='24px'>
                  Login
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  Register
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  Settings
                </Typography>
                <Typography tag='h6' fw='400' lh='24px'>
                  My Orders
                </Typography>
              </ContentDetailItemContent>
            </ContentDetailItem>
          </FooterContentDetails>

          <FooterContentDetails>
            <ContentDetailItem>
              <Typography tag='h6' fw='600' lh='22px'>
                Get app
              </Typography>
              <ContentDetailItemContent>
                <ContentDetailImage>
                  <ContentDetailSingleImage src={images.appleStore} />
                </ContentDetailImage>
                <ContentDetailImage>
                  <ContentDetailSingleImage src={images.googleStore} />
                </ContentDetailImage>
              </ContentDetailItemContent>
            </ContentDetailItem>
          </FooterContentDetails>
        </FooterContainer>
      </Container>
      <FooterCopyRights>
        <Container>
          <FooterCopyRightsContainer>
            <Typography tag='h6' fw='400' lh='24px'>
              © 2023 Commerce.
            </Typography>
            <CopyRightsLanguage>
              <CopyRightsLanguageIcon src={images.usFlag} height='18px' />
              <Typography tag='h6' fw='500' lh='22px'>
                English
              </Typography>
              <CopyRightsLanguageIcon src={images.dropTop} height='7.41px' />
            </CopyRightsLanguage>
          </FooterCopyRightsContainer>
        </Container>
      </FooterCopyRights>
    </FooterSection>
  );
};

export default Footer;
