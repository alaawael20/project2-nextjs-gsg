const { styled } = require("styled-components");

export const Btn = styled.button`
  color: ${({ theme, bgcolor }) =>
    bgcolor == 'base_white' ? theme.pallet.base_dark : theme.pallet.base_white};
  background: ${({ theme, bgcolor }) =>
    bgcolor == 'base_white'
      ? theme.pallet.base_white
      : `linear-gradient(180deg, #127fff 0%, #0067ff 100%)`};
  width: 100px;
  height: 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: ${({ theme, bgcolor }) =>
    bgcolor == 'base_white' ? 'none' : ` 1px solid ${theme.pallet.base_blue}`};
  cursor: pointer;
`;