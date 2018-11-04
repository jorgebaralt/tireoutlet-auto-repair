import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import NavBar from './NavBar';
import WhatWeDo from './WhatWeDo';
import Brands from './Brands';
import Information from './Information';

class Home extends Component {
	componentWillMount() {
		this.props.decideTransparent(true);
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
				</div>
			</div>
		);
	}
}

const styles = {
	contentStyle: {
		position: 'absolute',
		top: '100vh',
		backgroundColor: 'white',
		paddingTop: '1%',
		display: 'block',
		paddingBottom: 0,
		width: '100%',
	},
};

export default connect(
	null,
	actions
)(Home);
