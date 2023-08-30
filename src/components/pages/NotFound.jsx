'use client';

import Link from 'next/link';
import { styled } from 'styled-components';
import Typography from '../atoms/Typography';

const NotFound = () => {
  return (
    <Div>
      <h1 className='error-code'>404</h1>
      <p className='error-message'>Oops! Page not found</p>
      <Typography tag={'h2'} fw='600'>
        اصلاً عادي
      </Typography>
      <p>
        Go back to{' '}
        <Link href={'/'} className='back-link'>
          home
        </Link>
      </p>
    </Div>
  );
};

const Div = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .error-code {
    font-size: 120px;
    color: #e74c3c;
    margin: 0;
  }

  .error-message {
    font-size: 24px;
    color: #333;
    margin: 10px 0;
  }
  p:last-child {
    padding-top: 1rem;
  }
  .back-link {
    border: 1px solid #ddd;
    padding: 0.5rem;
    color: #3498db;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .back-link:hover {
    background: #3498db;
    color: #fff;
  }
`;

export default NotFound;
