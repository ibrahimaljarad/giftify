import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-green-400'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/signin' className='p-4'>
        Sign in
      </Link>
      <Link to='/signup' className='p-4'>
        Sign up
      </Link>
    </div>
  );
};

export default Dropdown;