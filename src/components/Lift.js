import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from './NavBar';
import Footer from './Footer';
import Landing from './Landing';
import OffRoad from '../assets/4x4.jpg';

class Lift extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
		this.props.changeActive('lift');
		this.props.decideTransparent(true);
	}

	render() {
		return (
			<div>
				<NavBar />
				<Landing
					image={OffRoad}
					title={'Suspension, Accessories, Wheels & More'}
				/>
				<div style={styles.contentStyle}>
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
)(Lift);
