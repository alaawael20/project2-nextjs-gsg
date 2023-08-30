import Input from '@/components/atoms/Input';
import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

const ProductsItemsOptions = ({ grid, gridTrue, gridFalse }) => {
  return (
    <ProductOptionsDiv>
      <div className='info'>
        <Typography tag='h6' fw='400' lh='19px'>
          12,911 items in
        </Typography>
        <Typography tag='h6' fw='600' lh='19px'>
          Mobile accessory
        </Typography>
      </div>
      <div className='options_input'>
        <div className='verified'>
          <Input type='checkbox' id='verified' />
          <label htmlFor='verified'>Verified only</label>
        </div>
        <div className='featured'>
          <select>
            <option>Featured</option>
          </select>
        </div>
        <div className='buttons'>
          <ButtonGrid grid={grid} onClick={gridTrue}>
            <GridIcon src={images.grid} />
          </ButtonGrid>
          <ButtonFlex grid={grid} onClick={gridFalse}>
            <GridIcon src={images.flex} />
          </ButtonFlex>
        </div>
      </div>
    </ProductOptionsDiv>
  );
};

const ProductOptionsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.gray_3};
  border-radius: 6px;
  padding: 10px 0;

  .info {
    display: flex;
    gap: 5px;
    padding-left: 1rem;

    h6 {
      color: ${({ theme }) => theme.pallet.base_dark};
    }
  }

  .options_input {
    display: flex;
    align-items: center;

    .verified {
      display: flex;

      input {
        width: 20px;
        height: 20px;
        background: ${({ theme }) => theme.pallet.base_blue};
        border-radius: 5px;
      }

      label {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        padding-left: 13px;
        color: ${({ theme }) => theme.pallet.base_dark};
      }
    }
    .featured {
      select {
        width: 172px;
        height: 40px;
        background: ${({ theme }) => theme.pallet.base_white};
        outline: none;
        border: 1px solid ${({ theme }) => theme.pallet.gray_3};
        border-radius: 6px;
        margin-left: 17px;
        padding-left: 10px;
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      margin: 0 10px;
      border: 1px solid ${({ theme }) => theme.pallet.gray_3};
      border-radius: 6px;
    }
  }

  @media screen and (max-width: 992px) {
    justify-content: center;

    .info {
      display: none;
    }

    .options_input {
      width: 100%;
      justify-content: space-around;
    }
  }
`;

const ButtonGrid = styled.div`
  display: flex;
  align-items: center;
  background: ${({ grid, theme }) =>
    grid ? theme.pallet.gray_4 : theme.pallet.base_white};
  padding: 10px;
  cursor: pointer;
`;

const GridIcon = styled.img``;

const ButtonFlex = styled.div`
  display: flex;
  align-items: center;
  background: ${({ grid, theme }) =>
    grid ? theme.pallet.base_white : theme.pallet.gray_4};
  padding: 10px;
  cursor: pointer;
`;

export default ProductsItemsOptions;
