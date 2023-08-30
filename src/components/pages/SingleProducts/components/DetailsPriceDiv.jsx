import Typography from '@/components/atoms/Typography';
import { salaryFormat } from '@/utils';
import React from 'react';
import { styled } from 'styled-components';

const DetailsPriceDiv = ({ target = `false`, cPrice, infoPrice }) => {
  return (
    <Div target={target}>
      <PriceValue target={target}>{salaryFormat('$', cPrice)}</PriceValue>
      <Priceinfo>{infoPrice}</Priceinfo>
    </Div>
  );
};

const Div = styled.div`
  border-left: ${({ target, theme }) =>
    target == `true` ? '' : `1px solid ${theme.pallet.base_white_1}`};
  padding: 0 40px 0 10px;
`;

const PriceValue = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${({ target, theme }) =>
    target == `true` ? theme.pallet.base_red : theme.pallet.base_dark};
`;

const Priceinfo = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.pallet.gray_8};
`;

export default DetailsPriceDiv;
