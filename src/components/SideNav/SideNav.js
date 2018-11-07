import React, { Component } from 'react';
import classes from './SideNav.module.css';
import { connect } from 'react-redux';

class SideNav extends Component {
	render() {
		const sidenavClass = [classes.sidenav];
		
		this.props.sidenavPosition === 'fixed'
			? sidenavClass.push(classes.fixed)
			: sidenavClass.push(classes.absolute);
		return (
			<div className={sidenavClass.join(' ')}>
				<a href="#about" className={classes.verticalText}>
					Oil
				</a>
				<a href="#services" className={classes.verticalText}>
					Tires
				</a>
				<a href="#clients" className={classes.verticalText}>
					Mechanic
				</a>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { sidenavPosition: state.navBarEffect.sideNavPosition };
};

export default connect(mapStateToProps)(SideNav);
