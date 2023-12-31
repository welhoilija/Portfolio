import React from 'react';

export default function MyCard({ text, title, image, link, className }) {
  return (
    <div
      className={`grid gap-y-1 shadow-xl h-full z-10 shadow-blue-950 hover:shadow-blue-950 hover:shadow-2xl transition-shadow duration-300 overflow-hidden w-full sm:w-72 rounded-lg m-4 p-5 ${className}`}
    >
      <div className='p-2.5'>
        <h3 className='text-lg font-bold text-white'>{title}</h3>
        <p className='text-sm text-gray-100 mt-2'>{text}</p>
      </div>
      <img
        className='w-full h-48 object-cover my-3'
        src={image}
        alt={title}
      />
      <div className='flex items-center justify-center mt-4'>
        <a
          href={link}
          className='text-blue-500 hover:text-blue-600 text-lg font-semibold transition-colors duration-300'
        >
          Learn More
        </a>
      </div>
    </div>
  );
}