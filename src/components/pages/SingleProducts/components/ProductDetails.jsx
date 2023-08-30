import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';
import SolidAndReviews from './SolidAndReviews';
import DetailsPriceDiv from './DetailsPriceDiv';
import DescriptionItem from './DescriptionItem';

const ProductDetails = () => {
  return (
    <Div>
      <div className='inStock'>
        <div className='img'>
          <MainImg src={images.true} />
        </div>
        <Typography tag='h6' fw='400' lh='24px'>
          {' '}
          In Stock
        </Typography>
      </div>

      <Typography tag='h5' fw='600'>
        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
      </Typography>

      <div className='details_stars'>
        <div className='stars_icons'>
          <MainImg src={images.goldenStar} />
          <MainImg src={images.goldenStar} />
          <MainImg src={images.goldenStar} />
          <MainImg src={images.goldenStar} />
          <MainImg src={images.GrayStar} />
        </div>
        <Typography tag='h6' fw='400' lh='19px'>
          9.3
        </Typography>
        <SolidAndReviews image={images.msg} text='32 reviews' />
        <SolidAndReviews image={images.sold} text='154 sold' />
      </div>
      <DetailsPrice>
        <DetailsPriceDiv
          target={`true`}
          cPrice='98.00'
          infoPrice='50-100 pcs'
        />
        <DetailsPriceDiv cPrice='90.00' infoPrice='50-100 pcs' />
        <DetailsPriceDiv cPrice='98.00' infoPrice='50-100 pcs' />
      </DetailsPrice>
      <div>
        <DescriptionItem title='Price ' value='Negotiable' />
        <Line />
        <DescriptionItem title='Type ' value='Classic  shoes' />
        <DescriptionItem title='Material ' value='Plastic material' />
        <DescriptionItem title='Design ' value='Modern nice' />
        <Line />
        <DescriptionItem
          title='Customization '
          value='Customized logo and design custom packages'
        />
        <DescriptionItem title='Protection ' value='Refund Policy' />
        <DescriptionItem title='Warranty ' value='2 years full warranty' />
        <Line />
      </div>
    </Div>
  );
};

const Line = styled.hr`
  border: 1px solid ${({ theme }) => theme.pallet.gray_9};
  margin-bottom: 1rem;
`;

const MainImg = styled.img``;

const Div = styled.div`
  .inStock {
    display: flex;
    align-items: center;
    gap: 2px;

    h6 {
      letter-spacing: -0.2px;
      color: ${({ theme }) => theme.pallet.base_green};
    }
  }

  h5 {
    max-width: 384px;
    color: ${({ theme }) => theme.pallet.base_dark};
    margin-top: 5px;
  }

  .details_stars {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.5rem 0;

    h6 {
      color: ${({ theme }) => theme.pallet.base_orange};
    }
  }
`;
const DetailsPrice = styled.div`
  display: flex;
  align-items: center;
  background: #fff0df;
  padding: 1rem 1rem 0.8rem;
  margin: 11px 0 21px;
`;

export default ProductDetails;
