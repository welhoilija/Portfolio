import React from "react";
import '/static/images/logo.png';


function Header() {
  return <a href="/"><img src={'/static/images/logo.png'} alt="Logo" width="60" height="30"/></a>;
}

export default Header;