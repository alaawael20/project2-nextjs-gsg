import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/InputSelect';
import Textarea from '@/components/atoms/Texrarea';
import Typography from '@/components/atoms/Typography';
import { images } from '@/mock/data';
import { Flex } from '@/styles/customStyle';
import React from 'react';
import { styled } from 'styled-components';

const RequestSuppliers = () => {
  return (
    <RequestSuppliersSection bg_image={images.requestSuppliers}>
      <div className='supplier_container'>
        <div className='content'>
          <Typography tag='h2' fw='600'>
            An easy way to send requests to all suppliers
          </Typography>
          <Typography tag='body1' fw='400' lh='24px'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </Typography>
        </div>
        <form>
          <Typography tag='h4' fw='600' lh='28px'>
            Send quote to suppliers
          </Typography>
          <Input
            border_color='gray_3'
            placeholder='What item you need?'
            width='100%'
          />
          <Textarea placeholder='Type more details' />
          <Flex>
            <Input placeholder='Quantity' />
            <Select
              options={[
                { value: 'Pcs1', text: 'Pcs' },
                { value: 'Pcs2', text: 'Pcs2' },
                { value: 'Pcs3', text: 'Pcs3' },
              ]}
            />
          </Flex>
          <Button>Send inquiry</Button>
        </form>
      </div>
    </RequestSuppliersSection>
  );
};

const RequestSuppliersSection = styled.section`
  width: 100%;
  background-image: url(${({ bg_image }) => bg_image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid ${({ theme }) => theme.pallet.gray_9};
  margin-top: 20px;
  border-radius: 1rem;

  .supplier_container {
    height: 100%;
    background: linear-gradient(
      94.99deg,
      #2c7cf1 7.19%,
      rgba(0, 209, 255, 0.5) 89.49%
    );
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 30px;
    border-radius: 1rem;

    .content {
      flex: 1;
      color: ${({ theme }) => theme.pallet.base_white};
      letter-spacing: -0.2px;

      p {
        max-width: 390px;
      }
    }

    form {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 23px 20px;
      background: ${({ theme }) => theme.pallet.base_white};
      box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
      border-radius: 6px;

      textarea,
      input,
      select,
      button {
        border: 1px solid ${({ theme }) => theme.pallet.gray_3};
        border-radius: 0.3rem;
      }

      div {
        gap: 0.5rem;
      }

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export default RequestSuppliers;
