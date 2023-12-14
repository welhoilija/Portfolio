import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import SideNavbar from "./sidebar2";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
import axios from "axios";
import ImageGenerator from "./ImageGenerator";

function App() {
  const [seed, setSeed] = useState(null);

  const generateSeed = () => {
    axios
      .post("/api/generate")
      .then((response) => {
        const seed = response.data.seed;
        setSeed(seed);
      })
      .catch((error) => {
        console.error("Error generating seed:", error);
      });
  };

  useEffect(() => {
    generateSeed();
  }, []);

  return (
    <BrowserRouter>
      <Grid>
        <SideNavbar />
        <ImageGenerator seed={seed} />
        <HomePage />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
