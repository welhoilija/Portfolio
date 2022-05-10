import React, { Component } from "react";
import ProjectsPage from "./ProjectsPage";
import AboutMePage from "./AboutMePage";
import ContactPage from "./contact";
import FrontPage from "./FrontPage";
import SkillsPage from "./SkillsPage";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";


export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
  return (

      <Routes>
          <Route path='/' element={<FrontPage/>} />
          <Route path='/Aboutme' element={<AboutMePage/>} />
          <Route path='/Projects' element={<ProjectsPage/>} />
          <Route path='/Contact' element={<ContactPage/>} />
          <Route path='/Skills' element={<SkillsPage/>} />
      </Routes>

  );
}

}

