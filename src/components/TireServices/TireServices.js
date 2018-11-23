import React from 'react';
import classes from './TireServices.module.css';
import { Element } from 'react-scroll';
const tireServicesData = [
	{
		id: 0,
		price: 'Starting at 44.99$',
		title: 'Alignment',
		description:
			"Alignment refers to an adjustment of a vehicle's suspension, the system that connects a vehicle to it's wheels.",
	},
	{
		id: 1,
		price: 'Starting at 19.99$',
		title: 'Mount and Balance',
		description:
			'Unbalanced tires will cause a car to vibrate at certain speeds, usually between 50 and 70 mph. A tire is out of balance when one section of the tire is heavier than the others.',
	},
	{
		id: 2,
		price: 'Starting at 9.99$ ',
		title: 'Flat Tire / Repair',
		description:
			' If no internal damage is found when the tire is dismounted, this puncture can be repaired following industry guidelines and the tire returned to service.',
	},
	{
		id: 3,
		price: 'Starting at 4.99$ Per Tire',
		title: 'Tire Rotation',
		description:
			'Tire rotation is the practice of moving the wheels and tires of an automobile from one position to another, to ensure even tire wear. Even tire wear is desirable to extend the useful life of a set of tires. ',
	},
];
const renderData = () => {
	return tireServicesData.map((service) => {
		return (
			<div key={service.id} className={classes.customCard}>
				<div className="row" style={{ marginTop: 10, marginBottom: 10 }}>
					<div className="col-lg-12" style={{ textAlign: 'left' }}>
						<h5 style={{ padding: 0, margin: 0, textAlign: 'left' }}>
							{service.title}
						</h5>
						<p className={classes.price}>{service.price}</p>
						<p>{service.description}</p>
					</div>
				</div>
			</div>
		);
	});
};

const renderTireServiceDetails = () => {
	return (
		<div className={classes.centered}>
			<p className={classes.title}>
				Tire <span className={classes.breakLine}>Services</span>
			</p>
			<p className={classes.subTitle} style={{ color: 'gray' }}>
				We sell new and used tires.{' '}
				<span className={classes.breakLine}>
					Any brand you want, we got it.
				</span>
			</p>
		</div>
	);
};

const TireServices = () => {
	return (
		<Element name="tires">
			<div className={classes.content}>
				<div className={classes.flexContainer}>
					<div className={classes.colLeft}>{renderTireServiceDetails()}</div>
					<div className={classes.colRight}>{renderData()}</div>
				</div>
			</div>
		</Element>
	);
};

export default TireServices;
