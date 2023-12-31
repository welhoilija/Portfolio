import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import HomePage from './HomePage';
import SideNavbar from './sidebar';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import '../static/tailwind.css';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [seed, setSeed] = useState(null);

  const generateSeed = () => {
    axios
      .post('/api/generate')
      .then((response) => {
        setSeed(response.data.seed);
      })
      .catch((error) => {
        console.error('Error generating seed:', error);
      });
  };

  useEffect(() => {
    generateSeed();
  }, []);

  return (
    <BrowserRouter>
      <div className='flex mr-2'>
        <SideNavbar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />
        <div className={`flex-grow ${sidebarOpen ? 'ml-44' : 'ml-16'}`}>
          <HomePage />
        </div>
      </div>
    </BrowserRouter>
  );
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);
