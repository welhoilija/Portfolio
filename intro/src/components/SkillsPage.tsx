import React from 'react';
import MyCard from './card';

export default function SkillsPage() {
  return (
    <div className="grid justify-center items-center h-screen">
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-6">Skills and Technologies</h1>
      </div>
      <div className="grid z-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 auto-rows-max">
        <MyCard 
          className="dark-mode" 
          text="Deep knowledge about python, and strengths and weaknesses of it. The main language i like to work with. Experience with multiple different web-frameworks within python." 
          title="Python" 
          image="/static/images/python.png" 
          link="https://github.com/welhoilija"
        />
        <MyCard 
          className="dark-mode" 
          text="Experience with Search engine Optimization, Search Engine marketing, Marketing strategy and lot of stuff around the marketing scene." 
          title="SEM and PPC advertising" 
          image="/static/images/marketing.png" 
          link="https://github.com/welhoilija"
        />
        <MyCard 
          className="dark-mode" 
          text="I have gotten used to many different technologies in my past and I'm always learning new stuff." 
          title="DevOps, Cloud, Linux and many others!" 
          image="/static/images/guake.png" 
          link="https://github.com/welhoilija"
        />
        <MyCard 
          className="dark-mode" 
          text="React.Js, Vue, Next and many different libraries and frameworks within the huge JS-community. I prefer TS almost always." 
          title="The wide world of JavaScript" 
          image="/static/images/typescript.png" 
          link="https://github.com/welhoilija"
        />
      </div>
      <div className="text-center py-24">
        <h2 className="text-xl mb-3">
          <a
            href="https://github.com/welhoilija"
            className="text-blue-300 hover:text-blue-400"
          >
            Check more at my Github
          </a>
        </h2>
      </div>
    </div>
  );
}