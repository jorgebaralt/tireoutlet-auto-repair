import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from './NavBar';

class Mechanic extends Component {
	componentWillMount() {
		this.props.decideTransparent(false);
	}

	render() {
		return (
			<div>
				<NavBar />
				<div> Mechanic</div>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(Mechanic);
