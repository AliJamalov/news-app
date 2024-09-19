import React from 'react';
import Link from 'next/link';

const Header = () => {

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Mission', path: '/mission' },
    { name: 'News', path: '/news' },
    { name: 'Partners', path: '/' },
  ];

  return (
    <header className='bg-[#442788] px-[72px] py-[32px] flex justify-between items-center'>
      <div>
        <h1 className='text-[34px] font-bold text-white'>GameNot</h1>
      </div>
      <nav>
        <ul className='flex space-x-6'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className='text-white text-[18px]'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
