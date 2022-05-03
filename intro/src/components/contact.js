import React, { Component } from "react";
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import { Link } from "react-router-dom"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import ResponsiveDrawer from "./Sidebar";



export default class ContactPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: null,
			name: null,
		};

		this.handleSubmitButtonPress = this.handleSubmitButtonPress.bind(this);
		this.handletextchange = this.handletextchange.bind(this);
		this.handlenamechange = this.handlenamechange.bind(this);
	}
	handletextchange(e) {
		this.setState({
			text: e.target.value,
		});
	}
	handlenamechange(e) {
		this.setState({
			name: e.target.value,
		});
	}
	handleSubmitButtonPress() {
		const requestOptions = {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				text: this.state.text,
				name: this.state.name,
			}),
		};
		fetch("/api/Contact", requestOptions)
		.then((response) => response.json())
		.then((data) => console.log(data));
	}
	render() {
    return (
    <div>
    	<ResponsiveDrawer />
    	<div style={{position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>
		    <Grid container spacing={6} >
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

		    			<TextField fullWidth required={true} id="standard-basic" label="Name" variant="standard" onChange={this.handlenamechange} />

		    			
		    			<TextField fullWidth multiline required={true} id="standard-basic" label="Message" variant="standard" onChange={this.handletextchange}/>
		    			<FormHelperText>
		    				<div align="center">
		    					Up to 2000 characters!
		    				</div>
		    			</FormHelperText>
		    		</FormControl>
		    	</Grid>
		    	<Grid item xs={12} align="center">
		    		<Button color="Primary" variant="contained" to="/" component={Link} onClick={this.handleSubmitButtonPress}>
		    			Submit
		    		</Button>
		    	</Grid>
		    </Grid>
	   </div>

    </div>
    )

  }
}

