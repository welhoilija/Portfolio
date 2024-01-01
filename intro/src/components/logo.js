import React from "react";
import logo from '/static/images/logo.png';


function Header() {
  return <a href="/"><img src={logo} alt="Logo" width="60" height="30"/></a>;
}

export default Header;