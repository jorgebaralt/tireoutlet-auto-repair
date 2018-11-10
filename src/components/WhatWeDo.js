import React from 'react';
import Fix from '../assets/Fix.jpg';
import Toyota from '../assets/Toyota.jpg';
import Maintain from '../assets/Maintain.jpg';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

const WhatWeDo = (props) => {
	const {
		contentStyle,
		titleStyle,
		subtitleStyle,
		imgStyle,
		textImgStyle,
		rowStyle,
		colStyle,
	} = styles;
	return (
		<Element name="first">
			<div style={contentStyle}>
				<h2 style={titleStyle}>What we do</h2>
				<h5 style={subtitleStyle}>We provide the best work and quality</h5>
				<ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
					<div className="row" style={rowStyle}>
						<div className="col-lg-4" style={colStyle}>
							<div className="card wwd-card">
								<div className="card-image">
									<img src={Toyota} style={imgStyle} alt="" />
									<p className="card-title" style={textImgStyle}>
										We have an extensive inventory of wheels, tires, suspension,
										and more.
									</p>
								</div>
								<div className="card-content">
									<span className="card-title">Build</span>
									<p />
								</div>
							</div>
						</div>
						<div className="col-lg-4" style={colStyle}>
							<div className="card wwd-card">
								<div className="card-image">
									<img src={Fix} style={imgStyle} alt="" />
									<p className="card-title" style={textImgStyle}>
										We can identify and repair anything wrong about your vehicle
									</p>
								</div>
								<div className="card-content">
									<span className="card-title">Fix</span>
									<p />
								</div>
							</div>
						</div>
						<div className="col-lg-4" style={colStyle}>
							<div className="card wwd-card">
								<div className="card-image">
									<img src={Maintain} style={imgStyle} alt="" />
									<p className="card-title" style={textImgStyle}>
										Oil change, filters, new tires and more. Keep your vehicle
										brand new
									</p>
								</div>
								<div className="card-content">
									<span className="card-title">Maintain</span>
									<p />
								</div>
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</Element>
	);
};

const styles = {
	contentStyle: {
		paddingTop: 100,
		textAlign: 'center',
		paddingLeft: '10%',
		paddingRight: '10%',
	},
	titleStyle: { fontWeight: 500, marginTop: 0 },
	subtitleStyle: { color: 'gray' },
	rowStyle: { marginTop: '4%' },
	colStyle: { paddingLeft: '5%', paddingRight: '5%', marginTop: 20 },
	imgStyle: { height: 'auto' },
	textImgStyle: {
		color: 'black',
		wordWrap: 'break-word',
		fontSize: '1.5em',
		boxSizing: 'content-box',
		heigth: 'auto',
		padding: '1%',
		overflow: 'hidden',
		maxHeigth: '100%',
		textOverflow: 'ellipsis',
	},
};

export default WhatWeDo;
