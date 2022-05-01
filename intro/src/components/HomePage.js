import React, { Component } from "react";
import ProjectsPage from "./ProjectsPage";
import AboutMePage from "./AboutMePage";
import ContactPage from "./contact";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Redirect
} from "react-router-dom";


export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<p>This is the homepage</p>} />
            <Route path='/Aboutme' element={<AboutMePage/> } />
            <Route path='/Projects' element={<ProjectsPage/>} />
            <Route path='/Contact' element={<ContactPage/>} />
        </Routes>
    </Router>
  );
}

}

