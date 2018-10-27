import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingImage from '../assets/LandingImage.JPG';
import LandingImage2 from '../assets/LandingImage2.jpeg';

class Home extends Component {
	state = { transparentNavBar: true };

	componentDidMount() {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY;
			if (isTop > 100) {
				this.setState({ transparentNavBar: false });
			}
			if (isTop < 100) {
				this.setState({ transparentNavBar: true });
			}
		});
	}

	render() {
		const {
			navbarTransparent,
			navBarTitles,
			landingImage,
			regularNavBar,
		} = styles;
		return (
			<div>
				<div style={landingImage}>
					<div class="navbar-fixed">
						<nav
							style={
								this.state.transparentNavBar ? navbarTransparent : regularNavBar
							}
						>
							<div className="nav-wrapper container">
								<a href="#" className="brand-logo" style={{ color: '#FFC107' }}>
									Tire Outlet Auto Repair
								</a>
								<ul id="nav-mobile" className="right hide-on-med-and-down">
									<li>
										<a href="sass.html" style={navBarTitles}>
											Sass
										</a>
									</li>
									<li>
										<a href="badges.html" style={navBarTitles}>
											Components
										</a>
									</li>
									<li>
										<a href="collapsible.html" style={navBarTitles}>
											JavaScript
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
				<div style={{ height: 10000 }}>asdasdasd</div>
				
			</div>
		);
	}
}

const styles = {
	navbarTransparent: {
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: 'transparent',
		border: 'none',
		boxShadow: 'none',
		transition: 'padding-top 0.4s, padding-bottom 0.4s',
	},
	regularNavBar: {
		backgroundColor: 'black',
		opacity: 0.8,
		transition: 'padding-top 0.4s, padding-bottom 0.4s',
	},
	navBarTitles: {
		color: 'white',
		fontSize: 22,
	},
	landingImage: {
		backgroundImage: `url(${LandingImage})`,
		height: '100vh',
		width: '100vw',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
};

export default Home;
