import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from "@material-ui/core";

export default class SkillsPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    return <div className="fullwidth">
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
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginTop: 30}}> 
    <Grid xs={3}>
      

    </Grid>
    <Grid xs={6} align="center">
      <h1>
        My skills
      </h1>
    </Grid>
    <Grid xs={3}>
    
    </Grid>
  </Grid>

	<hr></hr>
      <Grid container spacing={2} style={{marginTop: 70}}>
        <Grid xs={2}>

        </Grid>
        <Grid xs={2} align="center">
          <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#f5f5e800"}}>
            <CardMedia

              component="img"
              height="200"
              image="/static/images/python.png"
              alt="python"
              
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                Python 
              </Typography>
              <Typography variant="body2" color="#F5F5E9">
                I started coding with python at 15 y.o. and i have not stopped since. I love python and i have numerous projects coded with it.
                I also have used probably 100s of different python libraries, such as celery, django and ccxt.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid xs={2}>
            <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#f5f5e800"}}>
              <CardMedia

                component="img"
                height="200"
                image="/static/images/marketing.png"
                alt="web3auth"
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                  SEM and analytics
                </Typography>
                <Typography variant="body2" color="#F5F5E9">
                  I have worked with several marketing/analytics tools for more than 3 years now and i'm starting to be pretty comfortable with using them. 
                  Main tools i have worked with, are Google Tag manager, Google analytics, ahrefs, Google Ads, Search console and several other products designed for marketing and analytics.
                  My strengths in this field are definitely in tag manager and conversion tracking, but i also have strong knowledge of performance marketing overall.

                </Typography>
              </CardContent>
            </Card>
          </Grid>

        <Grid xs={2}>
            <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#f5f5e800"}}>
              <CardMedia

                component="img"
                height="200"
                image="/static/images/pythondjango.png"
                alt="web3auth"
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                  Django framework
                </Typography>
                <Typography variant="body2" color="#F5F5E9">
                  Django is my favourite web framework for python and i have done majority of my web development on this framework. Theres a very few things django isnt cabable as a web backend.
                  In my django projects i have also used other tools, such as React.JS, celery, REST API and probably hundreds of other libraries.

                </Typography>
              </CardContent>
            </Card>
          </Grid>


          <Grid xs={2}>
          <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#f5f5e800"}}>
            <CardMedia

              component="img"
              height="200"
              image="/static/images/react.png"
              alt="React"
              
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="#F5F5E9">
                Several others!
              </Typography>
              <Typography variant="body2" color="#F5F5E9">
                React.js, Strong GNU/Linux knowledge, Facebook ads, Nginx, mysql and the list goes on...
                I'm always eager to learn new technologies and that has brought me here. For the things that are not here, there should be a mention in my
                <a href="https://www.linkedin.com/in/tuomas-kangas-901207170/">Linkedin</a>.
                
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={1}>

        </Grid>


      </Grid>

	

</div>
  }
}

