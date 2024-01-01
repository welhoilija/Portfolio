import React from 'react';

export default function FrontPage() {
  return (
    <div className='flex items-center justify-center h-screen w-100'>
      <div className='flex flex-col items-center justify-center h-1/2 w-full'>
          <h1 className='text-4xl font-bold'>Hi, I'm Tuomas!</h1>
          <hr className='my-4 w-full' />
          <h2 className='text-2xl'>
            Full Stack Developer | Marketing enthusiast | Problem solver
          </h2>
      </div>
    </div>
  );
}
