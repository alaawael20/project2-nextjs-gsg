import { styled } from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
export const H5 = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
export const H6 = styled.h6`
  font-size: ${({ theme }) => theme.fontSizes.h6};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
export const Body2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body2};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
export const Body1 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.span};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;