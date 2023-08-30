import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

const Path = ({ text, show = true }) => {
  return (
    <ProductsPathDiv>
      <Typography tag='h6' fw='400' lh='24px'>
        {text}
      </Typography>
      {show && <ProductsPathIcon src={images.arrowRight} />}
    </ProductsPathDiv>
  );
};

const ProductsPathDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h6 {
    color: ${({ theme }) => theme.pallet.gray_5};
    cursor: pointer;
  }
`;

const ProductsPathIcon = styled.img``;

export default Path;
