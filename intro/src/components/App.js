
import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import SideNavbar from "./sidebar2";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const theme = createTheme({
    palette: {
      primary: {
        main: '#0d1b2a',
      },
      secondary: {
        main: '#1b263b',
      },
      background: {
        main: '#415a77',
      },
      warning: {
        main: '#778da9',
      },
      error: {
        main: '#e0e1dd',
      },
    },
  });

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Grid>
            <SideNavbar />
            <HomePage />        
          </Grid>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);