import React, { Component } from 'react';
import Fix from '../assets/Fix.jpg';
import Toyota from '../assets/Toyota.jpg';
import Maintain from '../assets/Maintain.jpg';

class WhatWeDo extends Component {
	render() {
		return (
			<div>
				<h2 style={{ fontWeight: 500, marginTop: '5%' }}>What we do</h2>
				<h5 style={{ color: 'gray' }}>We provide the best work and quality</h5>
				<div className="row" style={{ marginTop: '4%' }}>
					<div className="col-md-4" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
						<div className="card wwd-card">
							<div className="card-image">
								<img src={Toyota} style={{ height: 230 }} />
								<p class="card-title" style={{ color: 'black' }}>
									We have an extensive inventory of wheels, tires, suspension,
									and more. We do offer every brand!
								</p>
							</div>
							<div className="card-content">
								<span className="card-title">Build</span>
								<p />
							</div>
						</div>
					</div>
					<div className="col-md-4" style={{ paddingLeft: '5%', paddingRight:'5%' }}>
						<div className="card wwd-card">
							<div className="card-image" >
								<img src={Fix} style={{ height: 230 }} />
								<p class="card-title" style={{ color: 'black' }}>
									As an auto repair shop, we also fix any issue with your car.
								</p>
							</div>
							<div className="card-content">
								<span className="card-title">Fix</span>
								<p />
							</div>
						</div>
					</div>
					<div class="col-md-4" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
						<div class="card wwd-card">
							<div class="card-image">
								<img src={Maintain} style={{ height: 230 }} />
								<p class="card-title" style={{ color: 'black' }}>
									Oil change, filters, new tires, A/C and more. We will help you keep your vehicle as if it were brand new
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
}

export default WhatWeDo;
