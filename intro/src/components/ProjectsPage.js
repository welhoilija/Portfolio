import MyCard from './card';

import { Grid } from "@material-ui/core";
import { Box } from "@mui/system";

import React, { Component } from "react";
const styles = (theme) => ({
  root: {
    backgroundColor: 'blue',
    [theme.breakpoints.between('sm', 'md')]: {
      backgroundColor: 'red',
    },
  },
});


export default function ProjectsPage() {
  return (
    <div>
      <div>
        
        <div class='CardsBlock'>
          <Box sx={{
            flexGrow: 1,
          }} 
          >
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center"> 
              <Grid xs={12}>
                <h1 className="header">Check out projects I've worked on!</h1>
              </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, sm: 2, md: 2, xl: 4, lg: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>

              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} align="center">
                <MyCard className={"dark-mode"} text="Advanced crypto portfolio with django + celery backend and JS/Bootstrap front." title="Crypto Portfolio Web-App" image="/static/images/crp.png" link="https://github.com/welhoilija/CryptoPortfolio-Django"/>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} align="center">
                <MyCard text="Updated existing public key cryptography authentication system for django" title="Web3 Authentication backend for django" image="/static/images/pythondjango.png" link="https://github.com/welhoilija/CryptoPortfolio-Django"/>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} align="center">
                <MyCard text="Bouldering organic growth project done with couple of friends. Pulls a decent amount of organic traffic every month" title="Boulderinfo" image="/static/images/boulderinfo.png" link="https://boulderinfo.fi"/>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} align="center">
                <MyCard text="1-day hackathon project done with my friend Steellow!" title="Yet Another Drinking Game" image="/static/images/flutter.png" link="https://github.com/welhoilija/yadg"/>
              </Grid>


            </Grid>
            <Grid container spacing={2}>
              <Grid xs={4}>
                  
              </Grid>
              <Grid xs={4} elevation={16} align="center">
              <h2><a href="https://github.com/welhoilija">Check more at my Github</a></h2>
              </Grid>
              <Grid xs={4}>
                  
              </Grid>
            </Grid>


            <Grid container spacing={2}>
              <Grid xs={4}>
                  
              </Grid>
              <Grid xs={4} elevation={16} align="center">
              <p>I also have several private projects.</p>
              </Grid>
              <Grid xs={4}>
                  
              </Grid>
            </Grid>
          </Box>
        </div>


        
      </div>
    </div>
  );
}
