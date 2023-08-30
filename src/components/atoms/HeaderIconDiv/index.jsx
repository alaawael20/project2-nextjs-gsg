import React from 'react';
import { styled } from 'styled-components';

const HeaderIconDiv = ({ icon, title }) => {
  return (
    <Div>
      <Icon src={icon} />
      <Span>{title}</Span>
    </Div>
  );
};

export default HeaderIconDiv;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;
const Span = styled.span`
  font-weight: 400;
  line-height: 15px;
  padding-top: 5px;
  text-align: center;
  color: ${({ theme }) => theme.pallet.gray_4};
  font-size: ${({ theme }) => theme.fontSizes.span};
`;
