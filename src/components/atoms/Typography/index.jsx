import React from 'react';
import { Body1, Body2, H1, H2, H3, H4, H5, H6, Span } from './style';

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

export default Typography;
