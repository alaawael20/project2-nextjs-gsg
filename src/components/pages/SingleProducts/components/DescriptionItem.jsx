import Typography from '@/components/atoms/Typography';
import React from 'react';
import { styled } from 'styled-components';

const DescriptionItem = ({ title, value }) => {
  return (
    <Div>
      <Typography tag='h6' fw='400' lh='19px'>
        {title}:
      </Typography>
      <Typography tag='body1' fw='400'>
        {value}
      </Typography>
    </Div>
  );
};
const Div = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  margin-bottom: 1rem;

  h6 {
    color: ${({ theme }) => theme.pallet.gray_5};
  }
  p {
    max-width: 189px;
    color: ${({ theme }) => theme.pallet.gray_6};
  }
`;

export default DescriptionItem;
