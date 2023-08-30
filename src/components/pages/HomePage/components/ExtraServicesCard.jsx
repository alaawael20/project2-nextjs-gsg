import Typography from '@/components/atoms/Typography';
import React from 'react';
import { styled } from 'styled-components';

const ExtraServicesCard = ({ image, icon, text }) => {
  return (
    <ExtraServicesCardDiv>
      <ExtraServicesCardImageDiv bg_image={image}>
        <ExtraServicesCardImageMask></ExtraServicesCardImageMask>
      </ExtraServicesCardImageDiv>
      <Typography tag='body1' fw='600' lh='22px'>
        {text}
      </Typography>
      <ExtraServicesCardIconDiv>
        <ExtraServicesCardIcon src={icon} />
      </ExtraServicesCardIconDiv>
    </ExtraServicesCardDiv>
  );
};

const ExtraServicesCardDiv = styled.div`
  flex: 1 1 auto;
  background: ${({ theme }) => theme.pallet.base_white};
  width: 280px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.pallet.gray_9};
  border-radius: 6px;
  position: relative;

  p {
    margin: 16px 20px 20px;
  }

  @media screen and (max-width: 992px) {
    margin-bottom: 1rem;
  }
`;

const ExtraServicesCardImageDiv = styled.div`
  height: 60%;
  background-image: url(${({ bg_image }) => bg_image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const ExtraServicesCardImageMask = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

const ExtraServicesCardIcon = styled.img``;
const ExtraServicesCardIconDiv = styled.div`
  position: absolute;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #d1e7ff;
  border: 2px solid #ffffff;
  right: 1.5rem;
  top: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ExtraServicesCard;
