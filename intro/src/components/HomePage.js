import React, { Component } from "react";
import ProjectsPage from "./ProjectsPage";
import AboutMePage from "./AboutMePage";
import ContactPage from "./contact";
import ResponsiveDrawer from "./Sidebar";
import { withRouter } from 'react-router-dom'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Redirect,
	useParams
} from "react-router-dom";


export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<AboutMePage/>} />
            <Route path='/Aboutme' element={<AboutMePage/>} />
            <Route path='/Projects' element={<ProjectsPage/>} />
            <Route path='/Contact' element={<ContactPage/>} />
            <Route path='/sidebar/' element={<ResponsiveDrawer/>} />
        </Routes>
    </Router>
  );
}

}

