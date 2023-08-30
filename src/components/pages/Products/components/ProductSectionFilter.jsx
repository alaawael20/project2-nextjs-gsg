import React from 'react';
import { styled } from 'styled-components';
import ProductFilterTitle from './Filters/ProductFilterTitle';
import Typography from '@/components/atoms/Typography';
import {
  brandsFilter,
  categoryFilter,
  conditionFilter,
  featuresFilter,
  images,
} from '@/mock/data';
import { Flex } from '@/styles/customStyle';
import RangeSlider from './Filters/RangeSlider';

const ProductSectionFilter = () => {
  return (
    <ProductSectionFilterDiv>
      <ProductFilterTitle title='Category'>
        {categoryFilter.map((item) => (
          <ProductsFilterListItem key={item}>
            <Typography tag='h6' fw='400' lh='19px'>
              {item}
            </Typography>
          </ProductsFilterListItem>
        ))}
        <ProductsFilterListItem>
          <Typography tag='body1' fw='400' lh='19px'>
            See all
          </Typography>
        </ProductsFilterListItem>
      </ProductFilterTitle>

      <ProductFilterTitle title='Brands'>
        {brandsFilter.map((item) => (
          <ProductsFilterListItem key={item}>
            <ProductsFilterCheckbox type='checkbox' />
            <Typography tag='h6' fw='400' lh='19px'>
              {item}
            </Typography>
          </ProductsFilterListItem>
        ))}
        <ProductsFilterListItem>
          <Typography tag='body1' fw='400' lh='19px'>
            See all
          </Typography>
        </ProductsFilterListItem>
      </ProductFilterTitle>

      <ProductFilterTitle title='Features'>
        {featuresFilter.map((item) => (
          <ProductsFilterListItem key={item}>
            <ProductsFilterCheckbox type='checkbox' />
            <Typography tag='h6' fw='400' lh='19px'>
              {item}
            </Typography>
          </ProductsFilterListItem>
        ))}
        <ProductsFilterListItem>
          <Typography tag='body1' fw='400' lh='19px'>
            See all
          </Typography>
        </ProductsFilterListItem>
      </ProductFilterTitle>

      <ProductFilterTitle title='Price Range'>
        <RangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </ProductFilterTitle>

      <ProductFilterTitle title='Condition'>
        {conditionFilter.map((item) => (
          <ProductsFilterListItem key={item}>
            <ProductsFilterCheckbox
              type='radio'
              value={item}
              name='condition'
            />
            <Typography tag='h6' fw='400' lh='19px'>
              {item}
            </Typography>
          </ProductsFilterListItem>
        ))}
      </ProductFilterTitle>

      <ProductFilterTitle title='Ratings'>
        <ProductsFilterListItem>
          <Flex>
            <ProductsFilterCheckbox type='checkbox' />
            <div>
              {[...Array(5).keys()].map((index) => (
                <StarImage src={images.goldenStar} key={index} />
              ))}
            </div>
          </Flex>
        </ProductsFilterListItem>
        <ProductsFilterListItem>
          <Flex>
            <ProductsFilterCheckbox type='checkbox' />
            <div>
              {[...Array(4).keys()].map((index) => (
                <StarImage src={images.goldenStar} key={index} />
              ))}
              {[...Array(1).keys()].map((index) => (
                <StarImage src={images.GrayStar} key={index} />
              ))}
            </div>
          </Flex>
        </ProductsFilterListItem>
        <ProductsFilterListItem>
          <Flex>
            <ProductsFilterCheckbox type='checkbox' />
            <div>
              {[...Array(3).keys()].map((index) => (
                <StarImage src={images.goldenStar} key={index} />
              ))}
              {[...Array(2).keys()].map((index) => (
                <StarImage src={images.GrayStar} key={index} />
              ))}
            </div>
          </Flex>
        </ProductsFilterListItem>
        <ProductsFilterListItem>
          <Flex>
            <ProductsFilterCheckbox type='checkbox' />
            <div className='stars'>
              {[...Array(2).keys()].map((index) => (
                <StarImage src={images.goldenStar} key={index} />
              ))}
              {[...Array(3).keys()].map((index) => (
                <StarImage src={images.GrayStar} key={index} />
              ))}
            </div>
          </Flex>
        </ProductsFilterListItem>
      </ProductFilterTitle>
    </ProductSectionFilterDiv>
  );
};

const ProductSectionFilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const ProductsFilterListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 0.5rem 0;
  div {
    gap: 1rem;
  }

  h6 {
    padding: 0.7rem 0;
    color: ${({ theme }) => theme.pallet.gray_6};
  }
  p {
    padding: 0.7rem 0;
    color: ${({ theme }) => theme.pallet.base_blue};
  }
`;

const ProductsFilterCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  background-color: #bdbdbd;
  border: 2px solid #bdbdbd;
  border-radius: 5px;
`;
const StarImage = styled.img``;

export default ProductSectionFilter;
