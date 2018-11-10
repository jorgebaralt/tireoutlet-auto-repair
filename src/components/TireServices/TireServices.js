import React from 'react';
import classes from './TireServices.module.css'
import { Element } from 'react-scroll';
const tireServicesData = [
	{
		id: 0,
		price: 'Starting at 44.99$',
		title: 'Alignment',
		description:
			"Alignment refers to an adjustment of a vehicle's suspension – the system that connects a vehicle to it's wheels. It is not an adjustment of the tires or wheels themselves. The key to proper alignment is adjusting the angles of the tires which affects how they make contact with the road."
	},
	{
		id: 1,
		price: 'Starting at 19.99$',
		title: 'Mount and Balance',
		description:
			'Unbalanced tires will cause a car to vibrate at certain speeds, usually between 50 and 70 mph. A tire is out of balance when one section of the tire is heavier than the others. One ounce ofimbalance on a front tire is enough to cause a noticeable vibration in the steering wheel at about 60mph.'
	},
	{
		id: 2,
		price: 'Starting at 9.99$ ',
		title: 'Flat Tire / Repair',
		description:
			' If no internal damage is found when the tire is dismounted, this puncture can be repaired following industry guidelines and the tire returned to service.'
	},
	{
		id: 3,
		price: 'Starting at 4.99$ Per Tire',
		title: 'Tire Rotation',
		description:
			'Tire rotation is the practice of moving the wheels and tires of an automobile from one position to another, to ensure even tire wear. Even tire wear is desirable to extend the useful life of a set of tires. '
	}
];
const renderData = () => {
	return tireServicesData.map((service) => {
		return (
			<div key={service.id} className="card" style={{ marginTop: 20}}>
				<div className="card-body">
					<div className="row">
						<div className="col-lg-6">
							<h4>{service.title}</h4>
							<p className={classes.price}>{service.price}</p>
						</div>
						<div className="col-lg-6">
							<p>{service.description}</p>
						</div>
					</div>
				</div>
			</div>
		)
	})
	
}

const TireServices = () => {
	return (
		<Element name="tires">
			<div className={classes.content}>
				<h2 className={classes.title}>Tire Services</h2>
				<h5 style={{ color: 'gray' }}>We also sell new and used tires</h5>
				{renderData()}
			</div>
		</Element>
	);
};

export default TireServices;
