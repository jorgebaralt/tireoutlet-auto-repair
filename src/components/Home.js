import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import NavBar from './NavBar';
class Home extends Component {
	componentWillMount() {
		this.props.decideTransparent(true);
	}

	render() {
		return (
			<div>
				<NavBar />
				<Landing />
				<div
					id="asd"
					style={{
						height: 10000,
						position: 'relative',
						top: '100vh',
						backgroundColor: 'white',
					}}
				>
					asdasd
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(Home);
