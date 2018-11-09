import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from './NavBar';
import Footer from './Footer';
import OilChange from './OilChange/OilChange';
import TireServices from './TireServices/TireServices';
import Mechanic from './Mechanic/Mechanic';
import SideNav from './SideNav/SideNav';
class Services extends Component {
	state = { width: window.innerWidth };

	componentWillMount() {
		window.scrollTo(0, 0);
		this.props.changeActive('services');
		this.props.decideTransparent(false);
	}

	checkWidth = () => {
		this.setState({ width: window.innerWidth });
	};

	componentDidMount() {
		window.addEventListener('resize', this.checkWidth);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.checkWidth);
	}

	decideStyle = () => {
		if (this.state.width > 600){
			return this.props.expandSideNavbar
				? { marginLeft: 200, transition: 'margin-left 0.25s ease-in-out', padding: 0 }
				: { marginLeft: 60, transition: 'margin-left 0.25s ease-in-out', padding: 0 };
		} else {
			return {marginLeft : 0}
		}
		
	};

	render() {
		console.log(this.props.expandSideNavbar);
		return (
			<div style={{ backgroundColor: '#616161', padding: 0 }}>
				<NavBar />
				<SideNav />
				<div style={this.decideStyle()}>
					<OilChange />
					<TireServices />
					<Mechanic />
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		expandSideNavbar: state.navBarEffect.expandSideNavbar,
	};
};

export default connect(
	mapStateToProps,
	actions
)(Services);
