import React, { Component } from "react";
import logo from '/static/images/logo.png';


function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" width="60" height="30"/>;
}

export default Header;