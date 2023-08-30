import Typography from '@/components/atoms/Typography';
import React from 'react';
import { styled } from 'styled-components';

const SupplierRegionCard = ({ image, name, website }) => {
  return (
    <Card>
      <CardImage src={image} />
      <div className='content'>
        <Typography tag='h6' fw='400' lh='24px'>
          {name}
        </Typography>
        <Typography tag='body2' fw='400' lh='16px'>
          {website}
        </Typography>
      </div>
    </Card>
  );
};
const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  .content {
    p {
      color: ${({ theme }) => theme.pallet.gray_4};
    }
  }
`;
const CardImage = styled.img``;

export default SupplierRegionCard;
