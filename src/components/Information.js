import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Clock from '../assets/clock.png';
import Contact from '../assets/contact.png';
import Social from '../assets/social.png';

const Information = (props) => {
	const { contentStyle, titleStyle, subtitleStyle } = styles;
	return (
		<div style={contentStyle}>
			<h2 style={titleStyle}>Information</h2>
			<h5 style={subtitleStyle}>
				Business hours, social media, and contact information
			</h5>
			<ScrollAnimation animateIn="bounceIn" animateOnce={true}>
				<div className="row" style={{ marginTop: '4%' }}>
					<div className="col-md-4" style={{ marginTop: '3.5%' }}>
						<img src={Contact} alt="" style={{ height: 80, width: 120 }} />
						<h4 style={{ fontWeight: 500 }}>Contact us</h4>
						<div style={{ color: 'gray', fontSize: 20 }}>
							<p>Office: 407-888-9918</p>
							<p>email: tireoutletfl@gmail.com</p>
						</div>
					</div>
					<div className="col-md-4" style={{ marginTop: '2%' }}>
						<img src={Clock} alt="" style={{ height: 100, width: 100 }} />
						<h4 style={{ fontWeight: 500 }}>Hours of Operation</h4>
						<div style={{ color: 'gray', fontSize: 20 }}>
							<p>Monday - Saturday:</p>
							<p>9:00 am - 6:30 pm</p>
							<p>Sunday:</p>
							<p>9:00 am - 3:00 pm</p>
						</div>
					</div>
					<div className="col-md-4" style={{ marginTop: '2%' }}>
						<img src={Social} alt="" style={{ height: 100, width: 100 }} />
						<h4 style={{ fontWeight: 500 }}>Follow us</h4>
						<div style={{ color: 'gray', fontSize: 20 }}>
							<div>
								<a
									href="https://www.instagram.com/tireoutletautorepair/?hl=en"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: 'gray' }}
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
									style={{ color: 'gray' }}
								>
									<i className="fab fa-facebook" id="facebook" />{' '}
									@tireoutletautorepair
								</a>
							</div>
						</div>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

const styles = {
	contentStyle: {
		textAlign: 'center',
		paddingTop: '1%',
		paddingBottom: '2%',
		paddingLeft: '10%',
		paddingRight: '10%',
	},
	titleStyle: { fontWeight: 500, marginTop: '5%' },
	subtitleStyle: { color: 'gray' },
};

export default Information;
