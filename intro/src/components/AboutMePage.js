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
								Full stack programmer with deep business knowledge
							</h2>

							<p>
							I'm a motivated Web Developer with about four years of hands-on experience in the industry. I have strong skills in Python, Django, TypeScript, and other web development technologies. I'm also skilled in Search Engine Marketing, a key aspect of online visibility.

							I'm deeply interested in the digital world, including areas like crypto, AI and fintech and I always make sure to stay updated with the latest tech trends.

							In my free time, I enjoy working on personal coding projects that you can see on my <a href="https://github.com/welhoilija">GitHub</a>, playing video games, and keeping fit with climbing and running.
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
  
