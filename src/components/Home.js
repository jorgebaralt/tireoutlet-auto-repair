import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import NavBar from './NavBar';
import WhatWeDo from './WhatWeDo';
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
					<div id="what-we-do"  style={{ textAlign: 'center', paddingLeft: '10%', paddingRight:'10%' }}>
						<WhatWeDo />
					</div>
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
		height: 'auto',
		display: 'block',
		paddingBottom: 0,
		width: '100%'
	},
};

export default connect(
	null,
	actions
)(Home);
