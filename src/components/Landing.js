import React from 'react';
import LandingImage from '../assets/LandingImage.JPG';

const Landing = () => {
	const { landingImage, introTextContainer } = styles;
	return (
		<div style={landingImage}>
			<div style={introTextContainer}>
				<h1
					style={{
						color: '#E0E0E0',
						textAlign: 'center',
						fontWeight: 700,
						fontFamily: 'Roboto Mono',
						top: '40vh',
					}}
				>
					Build, Fix & Maintain your Vehicle
				</h1>
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
		zIndex: -1,
		top: 0,
	},
	introTextContainer: {
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '40vh',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
};

export default Landing;
