import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	state = {
		transparentNavBar: true,
		showDropdown: false,
	};

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
					style={this.state.showDropdown ? show : hide}
				>
					<Link to="/" className="collection-item" style={itemDropdownStyle}>
						HOME
					</Link>
					<Link
						to="/services"
						className="collection-item"
						style={itemDropdownStyle}
					>
						SERVICES
					</Link>
					<Link to="/" className="collection-item" style={itemDropdownStyle}>
						LIFT-KIT
					</Link>
					<Link to="/" className="collection-item" style={itemDropdownStyle}>
						GALLERY
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
							<div
								className={
									this.state.showDropdown ? 'Open DrawerToggle' : 'DrawerToggle'
								}
								style={
									this.props.navBarEffect && this.state.transparentNavBar
										? { paddingTop: 26 }
										: {}
								}
								onClick={() => {
									if (this.state.showDropdown) {
										this.setState({ showDropdown: false });
									} else {
										this.setState({ showDropdown: true });
									}
								}}
							>
								<div />
							</div>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li className={this.props.active === 'home' ? 'active' : null}>
									<Link
										to="/"
										style={
											this.state.transparentNavBar
												? navBarTitlesTransparent
												: navBarTitlesRegular
										}
									>
										HOME
									</Link>
								</li>
								<li
									className={this.props.active === 'services' ? 'active' : null}
								>
									<Link
										to="/services"
										style={
											this.state.transparentNavBar
												? navBarTitlesTransparent
												: navBarTitlesRegular
										}
									>
										SERVICES
									</Link>
								</li>
								<li className={this.props.active === 'lift' ? 'active' : null}>
									<Link
										to="/"
										style={
											this.state.transparentNavBar
												? navBarTitlesTransparent
												: navBarTitlesRegular
										}
									>
										LIFT-KIT
									</Link>
								</li>
								<li
									className={this.props.active === 'gallery' ? 'active' : null}
								>
									<Link
										to="/"
										style={
											this.state.transparentNavBar
												? navBarTitlesTransparent
												: navBarTitlesRegular
										}
									>
										GALLERY
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
		opacity: 0.95,
		transition: 'padding-top 0.4s, padding-bottom 0.4s, background-color 1s',
	},
	navBarTitlesTransparent: {
		color: 'white',
		fontSize: 22,
		fontWeight: 300,
		letterSpacing: 3,
	},
	navBarTitlesRegular: {
		color: 'black',
		fontSize: 22,
		fontWeight: 300,
		letterSpacing: 3,
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
	return {
		navBarEffect: state.navBarEffect.transparent,
		active: state.navBarEffect.active
	 };
};

export default connect(mapStateToProps)(NavBar);
