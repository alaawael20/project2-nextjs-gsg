import React from 'react';
import { styled } from 'styled-components';

const Typography = ({ tag, fw, lh, children }) => {
  switch (tag) {
    case 'h1':
      return (
        <H1 fw={fw} lh={lh}>
          {children}
        </H1>
      );
      break;
    case 'h2':
      return (
        <H2 fw={fw} lh={lh}>
          {children}
        </H2>
      );
      break;
    case 'h3':
      return (
        <H3 fw={fw} lh={lh}>
          {children}
        </H3>
      );
      break;
    case 'h4':
      return (
        <H4 fw={fw} lh={lh}>
          {children}
        </H4>
      );
      break;
    case 'h5':
      return (
        <H5 fw={fw} lh={lh}>
          {children}
        </H5>
      );
      break;
    case 'h6':
      return (
        <H6 fw={fw} lh={lh}>
          {children}
        </H6>
      );
      break;
    case 'body1':
      return (
        <Body1 fw={fw} lh={lh}>
          {children}
        </Body1>
      );
      break;
    case 'body2':
      return (
        <Body2 fw={fw} lh={lh}>
          {children}
        </Body2>
      );
      break;
    case 'span':
      return (
        <Span fw={fw} lh={lh}>
          {children}
        </Span>
      );
      break;
    default:
      break;
  }
};

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
const H5 = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
const H6 = styled.h6`
  font-size: ${({ theme }) => theme.fontSizes.h6};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
const Body2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body2};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
const Body1 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;
const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.span};
  font-weight: ${({ fw }) => fw || '700'};
  line-height: ${({ lh }) => lh || 'normal'};
`;

export default Typography;
