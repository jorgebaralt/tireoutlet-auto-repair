import React, { Component } from 'react';
import Fix from '../assets/Fix.jpg';
import Toyota from '../assets/Toyota.jpg';
import Maintain from '../assets/Maintain.jpg';

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
			<div id="what-we-do" style={contentStyle}>
				<h2 style={titleStyle}>What we do</h2>
				<h5 style={subtitleStyle}>We provide the best work and quality</h5>
				<div className="row" style={rowStyle}>
					<div
						className="col-lg-4"
						style={colStyle}
					>
						<div className="card wwd-card">
							<div className="card-image">
								<img src={Toyota} style={imgStyle} alt="" />
								<p class="card-title" style={textImgStyle}>
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
					<div
						className="col-lg-4"
						style={colStyle}
					>
						<div className="card wwd-card">
							<div className="card-image">
								<img src={Fix} style={imgStyle} alt="" />
								<p class="card-title" style={textImgStyle}>
									We can identify and repair anything wrong about your vehicle
								</p>
							</div>
							<div className="card-content">
								<span className="card-title">Fix</span>
								<p />
							</div>
						</div>
					</div>
					<div
						class="col-lg-4"
						style={colStyle}
					>
						<div class="card wwd-card">
							<div class="card-image">
								<img src={Maintain} style={imgStyle} alt="" />
								<p class="card-title" style={textImgStyle}>
									Oil change, filters, new tires and more.
									Keep your vehicle brand new
								</p>
							</div>
							<div class="card-content">
								<span class="card-title">Maintain</span>
								<p />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}


const styles = {
	contentStyle: {
		textAlign: 'center',
		paddingLeft: '10%',
		paddingRight: '10%',
	},
	titleStyle: { fontWeight: 500, marginTop: '5%' },
	subtitleStyle: { color: 'gray' },
	rowStyle: { marginTop: '4%' },
	colStyle: { paddingLeft: '5%', paddingRight: '5%' },
	imgStyle: { height: 'auto' },
	textImgStyle: { color: 'black', padding: '2%', fontSize: '1.6vw' },
};

export default WhatWeDo;
