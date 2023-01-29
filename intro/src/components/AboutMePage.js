import React, { Component } from "react";
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	horizontal: {
	  padding: theme.spacing(3, 2),
	  height: 500,
	  display: "flex",
	  flexDirection: "column",
	  justifyContent: "center",
	  padding: "10%",
	},
  }));
  
  export default function AboutMePage() {
	const classes = useStyles();
	return (
	  <div>
		  <div>
			<Box sx={{flexGrow: 1}}>
			  <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" align="center" style={{ height: '50%' }}> 
				<Grid xs={12} className={classes.horizontal}>
					<div className="container">
						<div className="center">
							<h1>
								About me
							</h1>
							<hr></hr>
							<h2>
								Programmer with marketing knowledge!
							</h2>

							<p>
							I'm a nerd with interests in web development, search engine marketing, cryptocurrencies and everything digital.
							I started learning python when I was about 15 years old as I started building random scrapers, games etc. Later I started developing django web-apps, and started working in the field after 2019.
							I worked in web-development/marketing for 2 years after my conscription in 2019 and after that I have worked mainly with python and web development.
							</p>	
							<p>
							On free time I code my own<a href="https://github.com/welhoilija">projects,</a>play videogames , climb and run.

							
							</p>
						</div>
					</div>
				</Grid>
			  </Grid>
			</Box>
		  </div>
  
	  </div>
	);
  }
  
