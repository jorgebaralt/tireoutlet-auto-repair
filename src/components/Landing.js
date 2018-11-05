import React from 'react';
import { Link } from 'react-scroll';

const Landing = (props) => {
	const {
		introTextContainer,
		introTextStyle,
		iconStyle,
	} = styles;

	const landingImage= {
		backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4) ), url(${props.image})`,
		height: '100vh',
		width: '100vw',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'fixed',
		top: 0,
	}
	
	return (
		<div style={landingImage}>
			<div style={introTextContainer}>
				<h1 style={introTextStyle}>{props.title}</h1>
				<Link
					activeClass="active"
					to="first"
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
		transform: 'translate(-50 %, -50 %)'
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
