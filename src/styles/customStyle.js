import { styled } from 'styled-components';

export const Flex = styled.div`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : 0)};
  align-items: center;
  justify-content: ${({ sb }) => (sb ? 'space-between' : 'flex-start')};
`;
