import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormHelperText,
  FormControl,
  InputAdornment,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "/static/intro/scc.scss";
import "/static/intro/button.scss";

export default function ContactPage() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [messageDisplay, setMessageDisplay] = useState("none");

  const handleTextChange = (e) => setText(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const handleSubmitButtonPress = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, name }),
    };

    fetch("/api/Contact", requestOptions)
      .then((response) => response.json())
      .then(() => setMessageDisplay("block"));
  };

  return (
    <Box sx={{ flexGrow: 1, height: "50%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} align="center">
          <Typography variant="h4">Contact me!</Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <FormControl component="fieldset" fullWidth sx={{ mb: 2 }}>
            <TextField
              fullWidth
              required
              id="input-with-icon-textfield"
              label="Name"
              onChange={handleNameChange}
              InputProps={{
                style: { color: "#F5F5E9", borderBottom: "1px solid white" },
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: { color: "#F5F5E9" },
              }}
              variant="standard"
            />

            <TextField
              id="standard-multiline-static"
              label="Message"
              multiline
              rows={4}
              sx={{ borderBottom: "1px solid white" }}
              variant="standard"
              onChange={handleTextChange}
              InputProps={{
                style: { color: "#F5F5E9", borderBottom: "1px solid white" },
              }}
              InputLabelProps={{
                style: { color: "#F5F5E9" },
              }}
            />

            <FormHelperText align="center">
              Up to 2000 characters!
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="primary"
            className="submitbutton"
            onClick={handleSubmitButtonPress}
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Grid>

        <Grid item xs={12} align="center">
          <div id="message" style={{ display: messageDisplay }}>
            <Typography>Your form was uploaded successfully</Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
