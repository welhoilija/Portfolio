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
							I am a highly motivated and skilled web developer with 2 years of professional experience in the industry. 
							My expertise includes Python, Django, web development, and search engine marketing. 
							I have a strong passion for all things digital, including cryptocurrencies, and constantly seek to stay up to date with the latest technologies. 
							In my free time, I enjoy coding personal<a href="https://github.com/welhoilija">projects,</a>playing video games, climbing, and running. 
							I am excited to bring my skills and enthusiasm to a new opportunity and make a meaningful impact.
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
  
