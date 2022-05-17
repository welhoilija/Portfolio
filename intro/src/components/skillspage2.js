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
    <div className="container">
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
      <div className="center">
        
        <div className="rcenter">
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
                <Card sx={{ maxWidth: 345, m: 2 }} style={{backgroundColor: "#f5f5e800"}}>
                  <CardMedia

                    component="img"
                    height="200"
                    image="/static/images/python.png"
                    alt="python"
                    
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                      <h2>Python</h2>
                    </Typography>
                    <Typography variant="body2" color="#F5F5E9">
                        I started coding with python at 15 y.o. and i have not stopped since. I love python and i have numerous projects coded with it. I also have used probably 100s of different python libraries, such as celery, django and ccxt.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>


              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} alignItems="center">
                  <Card sx={{ maxWidth: 345, m: 2 }} style={{backgroundColor: "#f5f5e800"}}>
                    <CardMedia

                      component="img"
                      height="200"
                      image="/static/images/marketing.png"
                      alt="marketing"
                      
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                        <h2>SEM and analytics</h2>
                      </Typography>
                      <Typography variant="body2" color="#F5F5E9">
                        I have worked with several marketing/analytics tools for more than 3 years now and i'm starting to be pretty comfortable with using them. Main tools i have worked with, are Google Tag manager, Google analytics, ahrefs, Google Ads, Search console and several other products designed for marketing and analytics. My strengths in this field are definitely in tag manager and conversion tracking, but i also have strong knowledge of performance marketing overall.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={3} xl={3} alignItems="center">
                  <Card sx={{ maxWidth: 345, m: 2 }} style={{backgroundColor: "#f5f5e800"}}>
                    <CardMedia

                      component="img"
                      height="200"
                      image="/static/images/pythondjango.png"
                      alt="Django"
                      
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                        <h2>Django Framework</h2>
                      </Typography>
                      <Typography variant="body2" color="#F5F5E9">
                      Django is my favourite web framework for python and i have done majority of my web development on this framework. Theres a very few things django isnt cabable as a web backend. In my django projects i have also used other tools, such as React.JS, celery, REST API and probably hundreds of other libraries.                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>


                <Grid item xs={12} sm={12} md={6} lg={3} xl={3} alignItems="center">
                  <Card sx={{ maxWidth: 345, m: 2 }} style={{backgroundColor: "#f5f5e800"}}>
                    <CardMedia

                      component="img"
                      height="200"
                      image="/static/images/react.png"
                      alt="React"
                      
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                        <a href="https://github.com/welhoilija/Portfolio">Several others!</a>
                      </Typography>
                      <Typography variant="body2" color="#F5F5E9">
                      React.js, Strong GNU/Linux knowledge, Facebook ads, Nginx, mysql and the list goes on... I'm always eager to learn new technologies and that has brought me here. For the things that are not displayed here, there should be a mention in my <a href="https://www.linkedin.com/in/tuomas-kangas-901207170/">Linkedin</a>
                      </Typography>
                    </CardContent>
                  </Card>
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

