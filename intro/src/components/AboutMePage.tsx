import React from 'react';

export default function AboutMePage() {
  return (
    <div className='grid justify-center items-center h-screen'>
      <div className='max-w-4xl px-10 py-6 text-center'>
        <h1 className='text-4xl font-bold'>About me</h1>
        <hr className='my-4' />
        <h2 className='text-2xl'>
          Full stack programmer with deep business knowledge
        </h2>
        <p className='mt-4'>
          I'm a motivated Web Developer with about four years of hands-on
          experience in the industry. I mainly work with Python and TypeScript, and I'm mostly familiar with frameworks such as Django, Vue or React.
          <br />
          <br />
          I'm deeply interested in the digital world, including areas like
          MarTech, AI, and fintech and I always make sure to stay updated with
          the latest tech trends.
          <br />
          <br />
          In my free time, I enjoy working on personal coding projects that you
          can see on my{' '}
          <a
            href='https://github.com/welhoilija'
            className='text-blue-500 hover:text-blue-700'
          >
            GitHub
          </a>
          , playing video games, and keeping fit with climbing and running.
        </p>
      </div>
    </div>
  );
}
