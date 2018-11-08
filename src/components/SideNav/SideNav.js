import React, { Component } from 'react';
import classes from './SideNav.module.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TireIcon from '../../assets/tire.svg';
import GearIcon from '../../assets/gear.svg';
import OilIcon from '../../assets/diesel.svg';

class SideNav extends Component {
	state = { width: window.innerWidth };

	checkWidth = () => {
		this.setState({ width: window.innerWidth });
	};

	componentDidMount() {
		window.addEventListener('resize', this.checkWidth);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.checkWidth);
	}
	renderSidebarText = (textMenu) => {
		if (this.props.expandSideNavbar) {
			return (
				<span
					style={{
						display: 'inline-block',
						fontSize: 30,
						marginTop: 20,
						transition: 'all 0.25s ease-in-out',
					}}
				>
					{textMenu}
				</span>
			);
		}
	};

	render() {
		const sidenavClass = [classes.sidenav];
		const textMenuClass = [classes.textMenu];

		this.props.sidenavPosition === 'fixed'
			? sidenavClass.push(classes.fixed)
			: sidenavClass.push(classes.absolute);

		if (this.props.expandSideNavbar) {
			sidenavClass.push(classes.sidenavOpen);
			textMenuClass.push(classes.textShow);
		} else {
			sidenavClass.push(classes.sidenavClosed);
			textMenuClass.push(classes.textHidden);
		}

		const hamburgerStyle = [classes.hamburger, classes.hamburgerArrow];
		if (this.props.expandSideNavbar) {
			hamburgerStyle.push(classes.isActive);
			hamburgerStyle.push(classes.hamburgerExtended);
		}

		if (this.state.width > 600) {
			return (
				<div className={sidenavClass.join(' ')}>
					<div
						className={hamburgerStyle.join(' ')}
						onClick={() =>
							this.props.decideExpandSideNav(!this.props.expandSideNavbar)
						}
					>
						<div className={classes.hamburgerBox}>
							<div className={classes.hamburgerInner} />
						</div>
					</div>
					<div>
						<div style={{ cursor: 'pointer' }}>
							<img src={OilIcon} alt="" style={styles.iconStyle} />
							<span
								className={textMenuClass.join(' ')}
								style={styles.textStyle}
							>
								OIL CHANGE
							</span>
						</div>
						<div
							style={{ position: 'absolute', marginTop: 60, cursor: 'pointer' }}
						>
							<img src={TireIcon} alt="" style={styles.iconStyle} />
							<span
								className={textMenuClass.join(' ')}
								style={styles.textStyle}
							>
								TIRES
							</span>
						</div>
						<div
							style={{
								position: 'absolute',
								marginTop: 120,
								cursor: 'pointer',
							}}
						>
							<img src={GearIcon} alt="" style={styles.iconStyle} />
							<span
								className={textMenuClass.join(' ')}
								style={styles.textStyle}
							>
								MECHANIC
							</span>
						</div>
					</div>
				</div>
			);
		}
		return <div />;
	}
}

const styles = {
	iconStyle: {
		float: 'left',
		width: 40,
		height: 40,
		marginTop: 20,
		marginLeft: 10,
		transition: 'all 0.25s ease-in-out',
	},
	textStyle: {
		position: 'absolute',
		whiteSpace: 'nowrap',
	},
};

const mapStateToProps = (state) => {
	return {
		sidenavPosition: state.navBarEffect.sideNavPosition,
		expandSideNavbar: state.navBarEffect.expandSideNavbar,
	};
};

export default connect(
	mapStateToProps,
	actions
)(SideNav);
