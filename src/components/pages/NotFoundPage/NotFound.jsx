'use client'
import Link from 'next/link';
import { DivStyle } from './style';

const NotFound = () => {
  return (
    <DivStyle>
      <h1 className='error-code'>404</h1>
      <p className='error-message'>Page not found</p>
      <p>
        <Link href={'/'} className='back-link'>
          Home Page
        </Link>
      </p>
    </DivStyle>
  );
};


export default NotFound;
