import React from 'react';
import {Link} from 'react-router-dom';
import Giftify from '../assets/Giftify.png';

export default function Navbar({toggle}) {
    return (
      <nav
        className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
        role='navigation'
      >
        <Link to='/' className='mx-24 pl-8'>
          <img src={Giftify} alt="giftify" className="w-30 h-16"/>
        </Link>
        <div className='mx-24 px-4 cursor-pointer md:hidden' onClick={toggle}>
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
        <div className='pr-8 md:block  hidden'>
    
          <Link to='/sign-in' className='p-4'>
            <button className="font-bold text-black text-md border border-green-400 bg-transparent py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
            Sign in
            </button>
          </Link>
          <Link to="/sign-up" className='p-4'>
             <button className="font-bold  text-white text-md  bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                Sign up
             </button>
          </Link>
        </div>
      </nav>
    )
}
