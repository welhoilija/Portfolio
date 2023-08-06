import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import "/static/intro/scc.scss";
import "/static/intro/button.scss";
import { Box } from '@material-ui/core';


class ContactPage extends React.Component {
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
		.then(document.getElementById("message").style.display = "block")
	}
  
    render() {
      return (
        <div>

		<div>
		<Box sx={{flexGrow: 1}}>
			<Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" align="center" style={{ height: '50%' }}>
				
					<Grid xs={12} align="center">
						
						<h4>
							Contact me!
						</h4>
						
					</Grid>
					<Grid xs={12} align="center">
						<FormControl component="fieldset">

							<TextField
								fullWidth
								required={true}
								id="input-with-icon-textfield"
								label="Name"
								onChange={this.handlenamechange}
								InputLabelProps={{
									style: { color: "#F5F5E9"},
									}}
								InputProps={{
								style: { color: "#F5F5E9" },
								startAdornment: (
									<InputAdornment position="start" sx={{
										padding: "27.5px 14px",
										color: ("#F5F5E9"),
										borderTopLeftRadius: (theme) =>
										theme.shape.borderRadius + "px",
										borderBottomLeftRadius: (theme) =>
										theme.shape.borderRadius + "px"
									}}>
									<AccountCircle />
									</InputAdornment>
								),
								}}
								variant="standard"
							/>
							
							<TextField
								id="standard-multiline-static"
								label="Message"
								multiline
								rows={4}
								InputLabelProps={{
									style: { color: "#F5F5E9" },
									}}
								InputProps={{
									style: { color: "#F5F5E9" },
									}}
								defaultValue=""
								variant="standard"
								onChange={this.handletextchange}
							/>
							<FormHelperText>
								<div align="center">
									Up to 2000 characters!
								</div>
							</FormHelperText>
						</FormControl>
					</Grid>
					<Grid item xs={12} align="center">
						<button
							className='submitbutton'
							onClick={this.handleSubmitButtonPress}
							>
							Submit
						</button>
					</Grid>
					<Grid item xs={12} align="center">
						<div id="message" style={{ display: "none" }}>
							<p>Your form was uploaded successfully</p>
						</div>
					</Grid>
			</Grid>
		</Box>
		</div>
	</div>
      );
    }
  }

export default ContactPage;