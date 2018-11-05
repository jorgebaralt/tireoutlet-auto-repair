import React from 'react';
import LandingImage from '../assets/LandingImage.JPG';
import { Link } from 'react-scroll';

const Landing = () => {
	const {
		landingImage,
		introTextContainer,
		introTextStyle,
		iconStyle,
	} = styles;
	return (
		<div style={landingImage}>
			<div style={introTextContainer}>
				<h1 style={introTextStyle}>Build, Fix & Maintain your Vehicle</h1>
				<Link
					activeClass="active"
					to="what-we-do"
					spy={true}
					smooth={true}
					duration={800}
				>
					<i
						id="arrow_down"
						className="material-icons animate-flicker"
						style={iconStyle}
					>
						keyboard_arrow_down
					</i>
				</Link>
			</div>
		</div>
	);
};

const styles = {
	landingImage: {
		backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4) ), url(${LandingImage})`,
		height: '100vh',
		width: '100vw',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'fixed',
		top: 0,
	},
	introTextContainer: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '40vh',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'relative',
		textAlign: 'center',
	},
	introTextStyle: {
		color: '#E0E0E0',
		textAlign: 'center',
		fontWeight: 700,
		fontFamily: 'Roboto Mono',
		top: '40vh',
	},
	iconStyle: {
		color: '#FFCA28',
		fontSize: 150,
		textAlign: 'center',
		marginTop: '20vh',
	},
};

export default Landing;
