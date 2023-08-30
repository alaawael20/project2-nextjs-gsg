import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import React, { useState } from 'react';
import { styled } from 'styled-components';

const ProductFilterTitle = ({ children, title }) => {
  const [showChildren, setShowChildren] = useState(false);

  const toggleShowChildren = () => {
    setShowChildren(!showChildren);
  };
  return (
    <ProductsFiltersList>
      <div className='product_filter_list_header' onClick={toggleShowChildren}>
        <Typography tag='h6' fw='600' lh='19px'>
          {title}
        </Typography>
        <div className='icon'>
          <ArrowIcon src={images.dropTop} show_children={showChildren} />
        </div>
      </div>
      {showChildren && children}
    </ProductsFiltersList>
  );
};

const ProductsFiltersList = styled.div`
  border-top: 1px solid ${({ theme }) => theme.pallet.gray_9};

  .product_filter_list_header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h6 {
      padding: 1rem 0;
      color: ${({ theme }) => theme.pallet.base_dark};
    }
  }

  .icon {
    margin-right: 14px;
    cursor: pointer;
  }
`;

const ArrowIcon = styled.img`
  transform: ${({ show_children }) => (show_children ? ' ' : 'rotate(180deg)')};
`;

export default ProductFilterTitle;
