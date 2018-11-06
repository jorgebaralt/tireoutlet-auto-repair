import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from './NavBar';
import Footer from './Footer';
import AllServices from './AllServices';
import OilChange from './OilChange';
class Services extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
		this.props.changeActive('services');
		this.props.decideTransparent(false);
	}

	render() {
		return (
			<div>
				<NavBar />
				<AllServices />
				<OilChange />
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
};

export default connect(
	null,
	actions
)(Services);
