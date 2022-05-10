
import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import SideNavbar from "./sidebar2";
import { BrowserRouter } from "react-router-dom";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <SideNavbar />
      	<HomePage />
        
      </BrowserRouter>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);