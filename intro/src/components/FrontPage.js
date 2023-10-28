import React from "react";
import "/static/intro/scc.scss";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default function FrontPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
      }}
    >
      <div>
        <h1>
          Hi, I'm Tuomas!
        </h1>
        <hr />
        <h2>
          Full Stack Developer | SEM expert | Crypto enthusiast
        </h2>
      </div>
    </Box>
  );
}