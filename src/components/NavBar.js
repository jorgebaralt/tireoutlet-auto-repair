import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class NavBar extends Component {
	state = { transparentNavBar: true, showDropdown: false };

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

	renderDropmenu = () => {
		const {
			dropdownStyleHidden,
			itemDropdownStyle,
			dropdownStyleShow,
			dropdownStyleShowTrans,
			dropdownStyleHiddenTrans,
		} = styles;

		let show, hide;

		if (this.state.transparentNavBar) {
			show = dropdownStyleShowTrans;
			hide = dropdownStyleHiddenTrans;
		} else {
			show = dropdownStyleShow;
			hide = dropdownStyleHidden;
		}
		return (
			<div>
				<ul
					className="collection"
					style={
						this.state.showDropdown ? show : hide
					}
				>
					<Link to="/" className="collection-item" style={itemDropdownStyle}>
						Home
					</Link>
					<Link
						to="/mechanic"
						className="collection-item"
						style={itemDropdownStyle}
					>
						Mechanic
					</Link>
					<Link to="/" className="collection-item" style={itemDropdownStyle}>
						Lift-Kit
					</Link>
					<Link to="/" className="collection-item" style={itemDropdownStyle}>
						Gallery
					</Link>
				</ul>
			</div>
		);
	};

	render() {
		const {
			navbarTransparent,
			regularNavBar,
			navBarTitlesTransparent,
			navBarTitlesRegular,
		} = styles;

		return (
			<div>
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
							<a className="sidenav-trigger">
								<i
									onClick={() => {
										if (this.state.showDropdown) {
											this.setState({ showDropdown: false });
										} else {
											this.setState({ showDropdown: true });
										}
									}}
									className="material-icons"
								>
									menu
								</i>
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
				{this.renderDropmenu()}
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
	dropdownStyleHidden: {
		border: 'none',
		boxShadow: 'none',
		position: 'fixed',
		zIndex: 20,
		width: '100%',
		height: 0,
		transition: 'height 0.5s, opacity 0.5s',
		opacity: 0,
		marginTop: 0,
	},
	dropdownStyleShow: {
		border: 'none',
		boxShadow: 'none',
		position: 'fixed',
		zIndex: 20,
		width: '100%',
		height: '100%',
		transition: 'height 0.5s, opacity 0.5s',
		opacity: 1,
		marginTop: 0,
	},
	dropdownStyleHiddenTrans: {
		border: 'none',
		boxShadow: 'none',
		position: 'fixed',
		zIndex: 20,
		width: '100%',
		height: 0,
		transition: 'height 0.5s, opacity 0.5s',
		opacity: 0,
		marginTop: 25,
	},
	dropdownStyleShowTrans: {
		border: 'none',
		boxShadow: 'none',
		position: 'fixed',
		zIndex: 20,
		width: '100%',
		height: '100%',
		transition: 'height 0.5s, opacity 0.5s',
		opacity: 1,
		marginTop: 25,
	},
	itemDropdownStyle: {
		textAlign: 'center',
		fontSize: 22,
		backgroundColor: '#FFC107',
		opacity: 0.8,
		color: 'black',
		border: 'none',
		boxShadow: 'none',
	},
};

const mapStateToProps = (state) => {
	return { navBarEffect: state.navBarEffect };
};

export default connect(mapStateToProps)(NavBar);
