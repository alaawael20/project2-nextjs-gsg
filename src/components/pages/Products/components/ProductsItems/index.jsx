import React, { useState } from 'react';
import { styled } from 'styled-components';
import ProductsItemsOptions from './ProductsItemsOptions';
import ProductItems from './ProductItems';

const ProductsItemsDiv = () => {
  const [grid, setGrid] = useState(true);
  const gridTrue = () => {
    setGrid(true);
  };
  const gridFalse = () => {
    setGrid(false);
  };
  return (
    <ProductsItemsContainer>
      <ProductsItemsOptions
        grid={grid}
        gridTrue={gridTrue}
        gridFalse={gridFalse}
      />
      <ProductItems grid={grid} />
    </ProductsItemsContainer>
  );
};

const ProductsItemsContainer = styled.div``;
export default ProductsItemsDiv;
