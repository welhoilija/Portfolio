import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from "@material-ui/core";
import { Box } from "@mui/system";
const styles = (theme) => ({
  root: {
    backgroundColor: 'blue',
    // Match [sm, md)
    //       [600px, 900px)
    [theme.breakpoints.between('sm', 'md')]: {
      backgroundColor: 'red',
    },
  },
});

export default function ProjectsPage() {
  return (
    <div className="fullwidth">
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="rcenter">
        <Box sx={{
          flexGrow: 1,
          maxWidth: 1400,
        }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
            <Grid xs={4}></Grid>
            <Grid xs={4} sm={4} md={4}>
              <h1 className="header">Check out my projects!</h1>
            </Grid>
            <Grid xs={4}></Grid>
          </Grid>
          <Grid container spacing={{ xs: 6, sm: 6, md: 6 }} columns={{ xs: 4, sm: 4, md: 4 }}>

            <Grid xs={12} sm={6} md={3} alignItems="center">
              <Card sx={{ maxWidth: 245 }} style={{backgroundColor: "#f5f5e800"}}>
                <CardMedia

                  component="img"
                  height="200"
                  image="/static/images/crp.png"
                  alt="python"
                  
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                    Crypto Portfolio Web-App
                  </Typography>
                  <Typography variant="body2" color="#F5F5E9">
                    Advanced crypto portfolio with django + celery backend and JS/Bootstrap front. 
                  </Typography>
                </CardContent>
              </Card>
            </Grid>


            <Grid xs={12} sm={6} md={3} alignItems="center">
                <Card sx={{ maxWidth: 245 }} style={{backgroundColor: "#f5f5e800"}}>
                  <CardMedia

                    component="img"
                    height="200"
                    image="/static/images/web3auth.png"
                    alt="web3auth"
                    
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                      Web3 Authentication backend for django
                    </Typography>
                    <Typography variant="body2" color="#F5F5E9">
                      Project where I improved a Web3 auth backend to support later versions of python and django, and also migrated the project to Ethers.js

                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid xs={12} sm={6} md={3} alignItems="center">
                <Card sx={{ maxWidth: 245 }} style={{backgroundColor: "#f5f5e800"}}>
                  <CardMedia

                    component="img"
                    height="200"
                    image="/static/images/boulderinfo.png"
                    alt="python"
                    
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                      Boulderinfo
                    </Typography>
                    <Typography variant="body2" color="#F5F5E9">
                      SEO/Bouldering project with friends. Has been an on/off for a year. About 400 organic/month.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>


              <Grid xs={12} sm={6} md={3} alignItems="center">
              <Card sx={{ maxWidth: 245 }} style={{backgroundColor: "#f5f5e800"}}>
                <CardMedia

                  component="img"
                  height="200"
                  image="/static/images/react.png"
                  alt="React"
                  
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                    This portfolio
                  </Typography>
                  <Typography variant="body2" color="#F5F5E9">
                    Built with python-django backend and ReactJS-MaterialUI frontend. 

                  </Typography>
                </CardContent>
              </Card>
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
  );
}
