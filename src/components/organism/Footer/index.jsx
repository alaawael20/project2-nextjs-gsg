import { Container } from '@/components/atoms/Container';
import Logo from '@/components/atoms/Logo';
import Typography from '@/components/atoms/Typography';
import { footer_socialMedia, images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

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

const FooterSection = styled.footer`
  max-width: 100%;
  background-color: ${({ theme }) => theme.pallet.base_white};
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2.5rem 0;

  .info {
    h6 {
      letter-spacing: -0.2px;
      padding: 1rem 0;
      color: ${({ theme }) => theme.pallet.gray_6};
      max-width: 250px;
    }

    .social_media {
      display: flex;
      gap: 12px;
    }
  }
`;
const SocialMediaICon = styled.img`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
`;

const FooterContentDetails = styled.div``;

const ContentDetailItem = styled.div`
  h6 {
    color: ${({ theme }) => theme.pallet.base_dark};
  }
`;

const ContentDetailItemContent = styled.div`
  margin-top: 10px;

  a {
    text-decoration: none;
  }
  h6 {
    letter-spacing: -0.2px;
    color: ${({ theme }) => theme.pallet.gray_6};
  }
`;

const ContentDetailImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 123px;
  height: 42px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.pallet.base_dark};
  margin-bottom: 8px;
`;

const ContentDetailSingleImage = styled.img``;

const FooterCopyRights = styled.div`
  max-width: 100%;
  background-color: ${({ theme }) => theme.pallet.gray_2};
`;

const FooterCopyRightsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;

  h6 {
    letter-spacing: -0.2px;

    color: ${({ theme }) => theme.pallet.gray_8};
  }
`;

const CopyRightsLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;
const CopyRightsLanguageIcon = styled.img`
  height: ${({ height }) => height};
`;

export default Footer;
