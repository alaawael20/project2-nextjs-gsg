import { Products } from '@/mock/data';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ProductItemCardGrid from './ProductItemCardGrid';
import ProductItemCardFlex from './ProductItemCardFlex';
import Pagination from './Pagination';

const ProductItems = ({ grid }) => {
  const [myProducts] = useState(Products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(9);
  const [selected, setSelected] = useState(9);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const CurrentPageProducts = myProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    setProductPerPage(Number(selected));
    setCurrentPage(1);
  }, [selected]);
  return (
    <ProductItemDiv>
      {grid ? (
        <div className='cardGrid'>
          {CurrentPageProducts.map((item) => (
            <ProductItemCardGrid
              key={item.id}
              image={item.image}
              currentPrice={item.currentPrice}
              pastPrice={item.pastPrice}
              rating={item.rating}
              details={item.details}
            />
          ))}
        </div>
      ) : (
        <div className='cardFlex'>
          {CurrentPageProducts.map((item) => (
            <ProductItemCardFlex
              key={item.id}
              image={item.image}
              currentPrice={item.currentPrice}
              pastPrice={item.pastPrice}
              rating={item.rating}
              details={item.details}
              orders={item.orders}
              shipping={item.shipping}
              description={item.description}
            />
          ))}
        </div>
      )}
      <Pagination
        selected={selected}
        setSelected={setSelected}
        productsPerPage={productPerPage}
        totalProducts={myProducts.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </ProductItemDiv>
  );
};

const ProductItemDiv = styled.div`
  .cardGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }

  .cardFlex {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 20px;
  }

  @media screen and (max-width: 992px) {
    .cardGrid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 768px) {
    .cardGrid {
      grid-template-columns: 1fr;
    }
  }
`;

export default ProductItems;
