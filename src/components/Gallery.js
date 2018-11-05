import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from './NavBar';
import Footer from './Footer';

class Gallery extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
		this.props.changeActive('gallery');
		this.props.decideTransparent(false);
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="container" style={{ height: 700 }}>
					{' '}
					Gallery
				</div>
				<Footer />
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(Gallery);
