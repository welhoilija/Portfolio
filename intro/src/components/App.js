
import React, { Component } from "react";
import { render } from "react-dom";
import App from "./HomePage";
import ResponsiveDrawer from "./Sidebar";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<App />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);