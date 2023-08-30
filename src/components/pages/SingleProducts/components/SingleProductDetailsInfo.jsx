import React, { useState } from 'react';
import SingleProductFeature from './SingleProductFeature';
import SingleProductsTableItem from './SingleProductsTableItem';
import { styled } from 'styled-components';

const SingleProductDetailsInfo = () => {
  const [tap, setTap] = useState('Description');
  return (
    <Div>
      <DivHeader>
        <DivHeaderItem
          type={tap === 'Description' ? 'active' : ''}
          onClick={() => setTap('Description')}>
          Description
        </DivHeaderItem>
        <DivHeaderItem
          type={tap === 'Reviews' ? 'active' : ''}
          onClick={() => setTap('Reviews')}>
          Reviews
        </DivHeaderItem>
        <DivHeaderItem
          type={tap === 'Shipping' ? 'active' : ''}
          onClick={() => setTap('Shipping')}>
          Shipping
        </DivHeaderItem>
        <DivHeaderItem
          type={tap === 'About company' ? 'active' : ''}
          onClick={() => setTap('About company')}>
          About company
        </DivHeaderItem>
      </DivHeader>
      <DivInformation>
        <DivInformationParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </DivInformationParagraph>
      </DivInformation>
      <div className='table'>
        <SingleProductsTableItem name='Model' value='#8786867' />
        <SingleProductsTableItem name='Style' value='Classic style' />
        <SingleProductsTableItem name='Certificate' value='ISO-898921212' />
        <SingleProductsTableItem name='Size' value='34mm x 450mm x 19mm' />
        <SingleProductsTableItem name='Memory' value='36GB RAM' />
      </div>
      <div className='features'>
        <SingleProductFeature text='Some great feature name here' />
        <SingleProductFeature text='Lorem ipsum dolor sit amet, consectetur ' />
        <SingleProductFeature text='Duis aute irure dolor in reprehenderit' />
        <SingleProductFeature text='Some great feature name here' />
      </div>
    </Div>
  );
};

const Div = styled.div`
  background: ${({ theme }) => theme.pallet.base_white};
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
  border-radius: 6px;

  .table {
    max-width: 70%;
    margin: 23px 0 0 20px;
    border: 1px solid #e0e7e9;
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 26px 20px 28px;
  }
`;

const DivHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #e3e8ee;
`;

const DivHeaderItem = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  padding: 16px 16px 13px;
  color: ${({ type, theme }) =>
    type === 'active' ? theme.pallet.base_blue : theme.pallet.gray_4};
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${({ type, theme }) =>
      type === 'active' ? theme.pallet.base_blue : 'none'};
    bottom: 0;
    left: 0;
  }
`;

const DivInformation = styled.div`
  max-width: 90%;
  margin: 18px 0 0 20px;
`;

const DivInformationParagraph = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.pallet.gray_6};
`;

export default SingleProductDetailsInfo;
