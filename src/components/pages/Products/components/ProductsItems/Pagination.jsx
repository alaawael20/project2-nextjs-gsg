import React from 'react';
import { styled } from 'styled-components';

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  setCurrentPage,
  selected,
  setSelected,
}) => {
  const pageNumbers = [];

  const numberOfPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePageForward = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <Div>
      <select value={selected} onChange={handleSelect}>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
      </select>
      <div className='pages_number'>
        <Prev
          className='prev'
          currentPage={currentPage}
          onClick={handlePageBack}>
          {'<'}
        </Prev>
        {pageNumbers.map((number) => (
          <Num
            className='num'
            key={number}
            number={number}
            currentPage={currentPage}
            onClick={() => setCurrentPage(number)}>
            {number}
          </Num>
        ))}
        <Next
          className='next'
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          onClick={handlePageForward}>
          {'>'}
        </Next>
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 9px;
  margin-top: 30px;

  select {
    width: 125px;
    height: 40px;
    background: ${({ theme }) => theme.pallet.base_white};
    padding: 0 10px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.pallet.gray_3};
    border-radius: 6px;
    cursor: pointer;
  }

  .pages_number {
    display: flex;
    align-items: center;
  }
`;

const Prev = styled.div`
  width: 44px;
  height: 40px;
  background: ${({ currentPage, theme }) =>
    currentPage === 1 ? theme.pallet.gray_2 : theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.gray_3};
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  cursor: pointer;
`;

const Next = styled.div`
  width: 44px;
  height: 40px;
  background: ${({ currentPage, theme }) =>
    currentPage === 1 ? theme.pallet.gray_2 : theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.gray_3};
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  cursor: pointer;
`;

const Num = styled.div`
  width: 44px;
  height: 40px;
  background: ${({ currentPage, theme }) =>
    currentPage === 1 ? theme.pallet.gray_2 : theme.pallet.base_white};
  border: 1px solid ${({ theme }) => theme.pallet.gray_3};
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ currentPage, number, theme }) =>
    currentPage === number ? theme.pallet.gray_5 : theme.pallet.base_dark};
  cursor: pointer;
`;
export default Pagination;
