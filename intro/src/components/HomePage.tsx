import React from 'react';
import ProjectsPage from './ProjectsPage';
import AboutMePage from './AboutMePage';
import ContactPage from './contact';
import FrontPage from './FrontPage';
import SkillsPage from './SkillsPage';
import { Routes, Route } from 'react-router-dom';
import '../static/stars.scss';

const HomePage = () => {
  return (
    <div>
      <div className="star-container hidden md:inline">
        {Array.from({ length: 100 }, (_, index) => (
          <div
            key={index}
            className="star"
          ></div>
        ))}
      </div>
      <Routes>
        <Route
          path="/"
          element={<FrontPage />}
        />
        <Route
          path="/Aboutme"
          element={<AboutMePage />}
        />
        <Route
          path="/Projects"
          element={<ProjectsPage />}
        />
        <Route
          path="/Contact"
          element={<ContactPage />}
        />
        <Route
          path="/Skills"
          element={<SkillsPage />}
        />
      </Routes>
    </div>
  );
};

export default HomePage;
