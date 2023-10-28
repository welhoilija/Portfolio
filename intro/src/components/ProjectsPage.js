import React from 'react';
import { Grid, Box, Typography, Link } from '@material-ui/core';
import MyCard from './card';

export default function ProjectsPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>

        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Check out projects I've worked on!
          </Typography>
        </Grid>

        <Grid item container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>


          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} align="center">
            <MyCard className={"dark-mode"} text="Advanced crypto portfolio with django + celery backend and JS/Bootstrap front." title="Crypto Portfolio Web-App (2021)" image="/static/images/crp.png" link="https://github.com/welhoilija/CryptoPortfolio-Django" />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} align="center">
            <MyCard text="React/FastApi app for making reservations and sharing with friends. Go check it out!" title="Dinner Planner App (2023)" image="/static/images/dinnerbooking.png" link="https://dinner.tuomaskangas.com" />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} align="center">
            <MyCard text="Bouldering organic growth project done with couple of friends. Pulls a decent amount of organic traffic every month" title="Boulderinfo (2020)" image="/static/images/boulderinfo.png" link="https://boulderinfo.fi" />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} align="center">
            <MyCard text="1-day hackathon project done with my friend Steellow!" title="Yet Another Drinking Game (2022)" image="/static/images/flutter.png" link="https://github.com/welhoilija/yadg" />
          </Grid>


        </Grid>

        <Grid item xs={12} align="center">
          <Typography variant="h5">
            <Link href="https://github.com/welhoilija" target="_blank" rel="noopener">
              Check more at my Github
            </Link>
          </Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <Typography>
            I also have several private projects.
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
}