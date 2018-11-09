import React, { Component } from 'react';
import classes from './SideNav.module.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-scroll';
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
						<Link
							activeClass="active"
							to="oil"
							spy={true}
							smooth={true}
							duration={800}
							style={{ margin: 0, padding: 0}}
						>
							<div className={classes.oil}>
								<img src={OilIcon} alt="" className={classes.iconStyle} />
								<span className={textMenuClass.join(' ')}>OIL CHANGE</span>
							</div>
						</Link>
						<Link
							activeClass="active"
							to="tires"
							spy={true}
							smooth={true}
							duration={800}
							style={{ margin: 0, padding: 0 }}
						>
							<div className={classes.tires}>
								<img src={TireIcon} alt="" className={classes.iconStyle} />
								<span className={textMenuClass.join(' ')}>TIRES</span>
							</div>
						</Link>
						<Link
							activeClass="active"
							to="mechanic"
							spy={true}
							smooth={true}
							duration={800}
							style={{ margin: 0, padding: 0 }}
						>
							<div className={classes.mechanic}>
								<img src={GearIcon} alt="" className={classes.iconStyle} />
								<span className={textMenuClass.join(' ')}>MECHANIC</span>
							</div>
							</Link>
					</div>
				</div>
			);
		}
		return <div />;
	}
}

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
