import React, { Component } from "react";
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import { Link } from "react-router-dom"
import FormControlLabel from "@material-ui/core/FormControlLabel"


export default class ContactPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    return <Grid container spacing={1}>
    	<Grid item xs={12} align="center">
    		<Typography component="h4" variant="h4">
    			Contact me!
    		</Typography>
    	</Grid>
    	<Grid item xs={12} align="center">
    		<FormControl component="fieldset">
    			<FormHelperText>
    				<div align="center">
    					Contact Me!
    				</div>
    			</FormHelperText>

    			<TextField fullWidth required={true} id="standard-basic" label="Name" variant="standard" />

    			
    			<TextField fullWidth multiline required={true} id="standard-basic" label="Message" variant="standard"/>
    			<FormHelperText>
    				<div align="center">
    					Up to 2000 characters!
    				</div>
    			</FormHelperText>
    		</FormControl>
    	</Grid>
    	<Grid item xs={12} align="center">
    		<Button color="Primary" variant="contained" to="/" component={Link}>
    			Submit
    		</Button>
    	</Grid>
    </Grid>;
  }
}

