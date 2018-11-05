import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

class Footer extends Component {
	renderTextField = ({ label, input, meta, ...custom }) => {
		const { classes } = this.props;
		return (
			<TextField
				id="standard-name"
				label={label}
				className={classes.textField}
				margin="normal"
				variant="outlined"
				multiline={label === 'Description'}
				rows={label === 'Description' ? 3 : 1}
				InputProps={{
					className: classes.inputField,
				}}
				InputLabelProps={{
					className: classes.inputLabel,
				}}
				{...input}
				{...custom}
				error={meta.touched && meta.error !== undefined}
			/>
		);
	};

	onSubmit = (values) => {
		console.log(values);
	};

	render() {
		const { handleSubmit } = this.props;
		const { classes } = this.props;
		return (
			<footer className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Contact us</h5>
							<form
								onSubmit={handleSubmit(this.onSubmit)}
								className={classes.container}
							>
								<Field
									name="name"
									type="text"
									label="Name"
									component={this.renderTextField}
								/>
								<Field
									name="email"
									type="email"
									label="Email"
									component={this.renderTextField}
								/>
								<Field
									name="description"
									type="text"
									label="Description"
									component={this.renderTextField}
								/>
								<button
									type="submit"
									className="waves-effect waves-light btn"
									style={{
										backgroundColor: '#FFC107',
										color: 'white',
										width: 300,
										marginTop: 10,
									}}
								>
									Submit
								</button>
							</form>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Quick links</h5>
							<ul>
								<li>
									<Link to="/" className="grey-text text-lighten-3" href="#!">
										HOME
									</Link>
								</li>
								<li>
									<Link
										to="services"
										className="grey-text text-lighten-3"
										href="#!"
									>
										SERVICES
									</Link>
								</li>
								<li>
									<Link to="/lift" className="grey-text text-lighten-3" href="#!">
										LIFT-KIT
									</Link>
								</li>
								<li>
									<Link to="/gallery" className="grey-text text-lighten-3" href="#!">
										GALLERY
									</Link>
								</li>
							</ul>
							<div>
								<a
									href="https://www.instagram.com/tireoutletautorepair/?hl=en"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: 'white' }}
								>
									<i className="fab fa-instagram" id="instagram" />{' '}
									@tireoutletautorepair
							</a>
							</div>
							<div>
								<a
									href="https://www.facebook.com/tireoutletautorepair/"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: 'white' }}
								>
									<i className="fab fa-facebook" id="facebook" />{' '}
									@tireoutletautorepair
							</a>
							</div>
						</div>
						
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						Tire Outlet Auto Repair @ 2018
						<p className="grey-text text-lighten-4 right">
							Developed by Jorge Baralt
						</p>
					</div>
				</div>
			</footer>
		);
	}
}
Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		width: 300,
	},
	inputField: {
		color: 'white',
		paddingLeft: 20,
	},
	inputLabel: {
		color: 'white',
	},
});

function validate(value) {
	const errors = {};
	if (!value.name) {
		errors.name = 'Please enter a name';
	}
	if (!value.email) {
		errors.email = 'Please enter an email';
	}
	if (!value.description) {
		errors.description = 'Please fill the description';
	}
	return errors;
}

export default withStyles(styles)(
	reduxForm({
		validate: validate,
		form: 'contactForm',
	})(Footer)
);
