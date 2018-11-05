import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import NavBar from './NavBar';
import WhatWeDo from './WhatWeDo';
import Brands from './Brands';
import Information from './Information';
import Address from './Address';
import Footer from './Footer';

class Home extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
		this.props.decideTransparent(true);
		this.props.changeActive('home');
	}

	render() {
		return (
			<div>
				<NavBar />
				<Landing />
				<div style={styles.contentStyle}>
					<WhatWeDo />
					<Brands />
					<Information />
					<Address />
					<Footer />
				</div>
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
)(Home);
