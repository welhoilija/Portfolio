import React, { Component } from "react";
import Sidebar from "react-sidebar";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import Header from "./logo"
const text = {
  color: "white"
};

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={
        <b>
          <div className="SideBar">
            <div className="logo">
             <Header />
            </div>
            <div className="SideBarContent">
                <div className="SideBarItem">
                  <a href="/"> Frontpage</a>
                </div>
                <div className="SideBarItem">
                  <a href="/Aboutme">About me</a>
                </div>
                <div className="SideBarItem">
                  <a href="/Projects">Projects</a>
                </div>
                <div className="SideBarItem">
                  <a href="/Skills">My skills</a>
                </div>
                <div className="SideBarItem">
                  <a href="/Contact">Contact me</a>
                </div>
                
            </div>
            <div className="SideBarGitHub">
              <div className="githubicon">
                <a href="https://github.com/welhoilija">
                  <GitHubIcon fontSize="large"/>
                </a>
                <a href="https://www.linkedin.com/in/tuomas-kangas-901207170/">
                  <LinkedInIcon fontSize="large"/>
                </a>
                <a href="https://t.me/TuomasKangas">
                  <TelegramIcon fontSize="large"/>
                </a>
              </div>
            </div>
            <Divider />
        </div>
        </b>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <Button onClick={() => this.onSetSidebarOpen(true)}>
          <MenuIcon/>
        </Button>
        
      </Sidebar>
    );
  }
}
 
export default SideBar;