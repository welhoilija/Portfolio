import React, { Component } from "react";
import "/static/intro/scc.scss";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


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

export default function FrontPage() {
  const classes = useStyles();
  return (
    <div>
        <div>
          <Box sx={{flexGrow: 1}}>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" align="center" style={{ height: '50%' }}> 
              <Grid xs={12} className={classes.horizontal}>
              <div>
                <h1>
                    Hi, I'm Tuomas!
                </h1>
                <hr></hr>
                <h2>
                    Full Stack Developer | SEM expert | Crypto enthusiast
                </h2>
              </div>
              </Grid>
            </Grid>
          </Box>
        </div>

    </div>
  );
}
