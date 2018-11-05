import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from './NavBar';
import Footer from './Footer';

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
				<div className="container" style={{ height: 700 }}>
					{' '}
					Services
				</div>
				<Footer />
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(Services);
