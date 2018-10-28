import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	state = { transparentNavBar: true };

	componentDidMount() {
		if (this.props.navBarEffect) {
			document.addEventListener('scroll', () => {
				const isTop = window.scrollY;
				if (isTop > 100) {
					this.setState({ transparentNavBar: false });
				}
				if (isTop < 100) {
					this.setState({ transparentNavBar: true });
				}
			});
		} else {
			this.setState({ transparentNavBar: false });
		}
	}

	render() {
		const {
			navbarTransparent,
			regularNavBar,
			navBarTitlesTransparent,
			navBarTitlesRegular,
		} = styles;

		return (
			<div className="navbar-fixed">
				<nav
					style={
						this.state.transparentNavBar ? navbarTransparent : regularNavBar
					}
				>
					<div className="nav-wrapper container">
						<Link
							to="/"
							className="brand-logo"
							style={
								this.state.transparentNavBar
									? { color: '#FFC107', fontWeight: 500 }
									: { color: 'black', fontWeight: 500 }
							}
						>
							Tire Outlet
						</Link>
						<a href="/" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<Link
									to="/"
									style={
										this.state.transparentNavBar
											? navBarTitlesTransparent
											: navBarTitlesRegular
									}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/mechanic"
									style={
										this.state.transparentNavBar
											? navBarTitlesTransparent
											: navBarTitlesRegular
									}
								>
									Mechanic
								</Link>
							</li>
							<li>
								<Link
									to="/"
									style={
										this.state.transparentNavBar
											? navBarTitlesTransparent
											: navBarTitlesRegular
									}
								>
									Lift-Kit
								</Link>
							</li>
							<li>
								<Link
									to="/"
									style={
										this.state.transparentNavBar
											? navBarTitlesTransparent
											: navBarTitlesRegular
									}
								>
									Gallery
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

const styles = {
	navbarTransparent: {
		paddingTop: 30,
		paddingBottom: 30,
		backgroundColor: 'transparent',
		border: 'none',
		boxShadow: 'none',
		transition: 'padding-top 0.4s, padding-bottom 0.4s',
	},
	regularNavBar: {
		backgroundColor: '#FFC107',
		opacity: 0.8,
		transition: 'padding-top 0.4s, padding-bottom 0.4s, background-color 1s',
	},
	navBarTitlesTransparent: {
		color: 'white',
		fontSize: 22,
		fontWeight: 300,
	},
	navBarTitlesRegular: {
		color: 'black',
		fontSize: 22,
		fontWeight: 300,
	},
};

const mapStateToProps = (state) => {
	return { navBarEffect: state.navBarEffect };
};

export default connect(mapStateToProps)(NavBar);
