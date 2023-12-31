import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './logo';
import navbarList from './navbarlist';

import { GitHubIcon, TelegramIcon, LinkedInIcon, MenuIcon } from './Icons';

function NavbarItem({ item, onClick }) {
  return (
    <div>
      <Link
        to={item.redirect_to}
        onClick={onClick}
      >
        <div className='p-1 text-center bg-auto hover:bg-gray-700 rounded-lg'>
          {item.icon && <item.icon className='text-gray-300 mr-4' />}
          {item.open && <span className='text-white'>{item.desc}</span>}
        </div>
      </Link>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className='flex flex-row flex-wrap justify-center items-end h-full'>
      {' '}
      <a href='https://github.com/welhoilija'>
        <GitHubIcon className='h-6 w-6 text-white' />
      </a>
      <a href='https://www.linkedin.com/in/tuomas-kangas-901207170/'>
        <LinkedInIcon className='h-6 w-6 text-white grow-1' />
      </a>
      <a href='https://t.me/TuomasKangas'>
        <TelegramIcon className='h-6 w-6 text-white' />
      </a>
    </div>
  );
}

export default function SideNavbar({ open, setOpen }) {
  return (
    <div
      className={`fixed flex-col inset-y-0 shadow left-0 z-30 transition-width duration-300 ease-in-out ${
        open ? 'w-44' : 'w-14'
      } bg-gray-800 h-screen overflow-y-hidden`}
    >
      <div className='flex flex-col items-center py-2'>
        <Header />
        <button
          onClick={() => setOpen(!open)}
          className='text-white mt-1'
        >
          <MenuIcon className='h-4 w-4 grow' />
        </button>
      </div>
      <hr className='border-t border-gray-700' />
      <div className='flex flex-col px-2 py-2 space-y-1'>
        {navbarList.map((item, index) => (
          <NavbarItem
            key={item.desc}
            item={{ ...item, index, open }}
            onClick={() => setOpen(false)}
            className='grow'
          />
        ))}
      </div>
      <hr className='border-t border-gray-700' />
      <div className='py-2 h-80'>
        <SocialLinks />
      </div>
    </div>
  );
}