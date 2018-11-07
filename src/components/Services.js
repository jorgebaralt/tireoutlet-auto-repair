import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from './NavBar';
import Footer from './Footer';
import OilChange from './OilChange';
import TireServices from './TireServices';
import Mechanic from './Mechanic';
import SideNav from './SideNav/SideNav';
class Services extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
		this.props.changeActive('services');
		this.props.decideTransparent(false);
	}

	render() {
		return (
			<div style={{ backgroundColor: '#eee' }}>
				<NavBar />
				<SideNav />
				<div className="main">
					<OilChange />
					<TireServices />
					<Mechanic />
				</div>
				<Footer />
			</div>
		);
	}
}

const styles = {
	contentStyle: {
		position: 'relative',
		top: '100vh',
		backgroundColor: 'white',
		display: 'block',
		paddingBottom: 0,
		width: '100%',
	},
	main: {},
	sideNav: {},
};

export default connect(
	null,
	actions
)(Services);
