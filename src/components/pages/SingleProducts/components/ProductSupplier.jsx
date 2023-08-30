import Typography from '@/components/atoms/Typography';
import React from 'react';
import { styled } from 'styled-components';
import SupplierContentInfoItem from './SupplierContentInfoItem';
import { images } from '@/mock/data';
import Button from '@/components/atoms/Button';

const ProductSupplier = () => {
  return (
    <Div>
      <div className='supplier_content'>
        <div className='header'>
          <div className='header_image'>R</div>
          <div className='header_text'>
            <Typography tag='h6' fw='400'>
              Supplier
            </Typography>
            <Typography tag='h6' fw='400'>
              Guanjoi Trading LLC
            </Typography>
          </div>
        </div>
        <Line />
        <div className='content_info'>
          <SupplierContentInfoItem
            image={images.usFlag}
            text='Germany, Berlin'
          />
          <SupplierContentInfoItem
            image={images.verify}
            text='Verified Seller'
          />
          <SupplierContentInfoItem
            image={images.world}
            text='Worldwide shipping'
          />
        </div>
        <div className='buttons'>
          <Button>Send inquiry</Button>
          <Button bgcolor={'base_white'}>Seller’s profile</Button>
        </div>
      </div>
      <div className='saveLater'>
        <div className='img'>
          <Icon src={images.like} />
        </div>
        <Typography tag='h6' fw='500' lh='24px'>
          Save for later
        </Typography>
      </div>
    </Div>
  );
};

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.pallet.greyColor2};
`;

const Div = styled.div`
  .supplier_content {
    background: ${({ theme }) => theme.pallet.base_white};
    border: 1px solid ${({ theme }) => theme.pallet.gray_3};
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    padding: 20px 16px;

    .header {
      display: flex;
      align-items: center;
      gap: 11px;
      margin-bottom: 20px;

      .header_image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        background: #c6f3f1;
        border-radius: 4px;
        font-weight: 600;
        font-size: 28px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: rgba(76, 167, 167, 0.6);
      }

      .header_text {
        h6 {
          color: ${({ theme }) => theme.pallet.base_dark};
        }
      }
    }
    .content_info {
      margin: 13px 0 28px;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 8px;

      button {
        width: 100%;
        border-radius: 0.5rem;

        &:last-child {
          color: ${({ theme }) => theme.pallet.base_blue};
        }
      }
    }
  }
  .saveLater {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 1.5rem;
    cursor: pointer;

    h6 {
      color: ${({ theme }) => theme.pallet.base_blue};
    }
  }
`;

const Icon = styled.img``;
export default ProductSupplier;
