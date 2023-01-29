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
        
        <div>
          <Box sx={{
            flexGrow: 1,
          }}>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center"> 
              <Grid xs={12}>
                <h1 className="header">Skills and technologies</h1>
              </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, sm: 2, md: 2, xl: 4, lg: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>

              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} alignItems="center">
                <MyCard 
                  className={"dark-mode"} 
                  text="Deep knowledge about python, and strengths and weaknesses of it" 
                  title="Python" 
                  image="/static/images/python.png" 
                  link="https://github.com/welhoilija"
                />
              </Grid>


              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} alignItems="center">
                <MyCard 
                  className={"dark-mode"} 
                  text="Deep knowledge in paid media marketing and different SEM strategies" 
                  title="Paid media and marketing" 
                  image="/static/images/marketing.png" 
                  link="https://github.com/welhoilija"
                />
            
              </Grid>

                <Grid xs={12} sm={12} md={6} lg={3} xl={3} alignItems="center">
                  <MyCard 
                    className={"dark-mode"} 
                    text="I have several projects with Django. I have also worked with several REST endpoint FW:s such as FastApi and falcon framework." 
                    title="Django and Rest frameworks" 
                    image="/static/images/pythondjango.png" 
                    link="https://github.com/welhoilija"
                  />
                </Grid>


                <Grid item xs={12} sm={12} md={6} lg={3} xl={3} alignItems="center">
                  <MyCard 
                      className={"dark-mode"} 
                      text="Business knowledge, Strong GNU/Linux knowledge, Facebook ads, Nginx, different databases and the list goes on..." 
                      title="Many other skills!" 
                      image="/static/images/react.png" 
                      link="https://github.com/welhoilija"
                  />
                </Grid>


            </Grid>
            <Grid container spacing={2}>
              <Grid xs={4}>
                  
              </Grid>
              <Grid xs={4} elevation={16} align="center">
              <h2><a href="https://github.com/welhoilija">Check also my Github</a></h2>
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

