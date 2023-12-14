import React from "react";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";

export default function AboutMePage() {
  return (
    <div className="blog">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          align="center"
          style={{ height: "50%" }}
        >
          <Grid item xs={12} md={8}>
            <div className="container">
              <div className="center">
                <Typography variant="h1" gutterBottom>
                  About me
                </Typography>
                <hr />
                <Typography variant="h2" gutterBottom>
                  Full stack programmer with a blend of business knowledge
                </Typography>
                <Typography variant="body1" paragraph>
                  With four years of hands-on experience, I am a driven software
                  engineer well-versed in an array of programming languages and
                  frameworks including Python and many of its libraries,
                  Javascript and TypeScript. My journey in the tech industry has
                  also honed my skills in marketing, fortifying the online
                  presence of businesses I collaborate with.
                </Typography>
                <Typography variant="body1" paragraph>
                  My intrigue in the digital realm extends to Cryptocurrencies,
                  Artificial Intelligence, and the fintech sector. The rapid
                  evolution of technology fuels my passion and commitment to
                  staying updated with the latest trends. This enthusiasm not
                  only propels my professional development but also manifests in
                  personal projects which I regularly share on my{" "}
                  <a
                    href="https://github.com/welhoilija"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  .
                </Typography>
                <Typography variant="body1" paragraph>
                  Beyond the coding, I am an nerd who likes to sit back with a
                  good game. I also generally like sports, and lately my
                  interests have been around cycling, volleyball and running.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
