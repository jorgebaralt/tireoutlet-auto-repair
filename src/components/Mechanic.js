import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from './NavBar';
import Footer from './Footer';

class Mechanic extends Component {
	componentWillMount() {
		this.props.decideTransparent(false);
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="container" style={{ height: 700}}> Mechanic</div>
				<Footer />
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(Mechanic);
