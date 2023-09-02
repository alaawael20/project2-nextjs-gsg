const { styled } = require("styled-components");

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export const Span = styled.span`
  font-weight: 400;
  line-height: 15px;
  padding-top: 5px;
  text-align: center;
  color: ${({ theme }) => theme.pallet.gray_4};
  font-size: ${({ theme }) => theme.fontSizes.span};
`;