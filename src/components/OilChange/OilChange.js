import React from 'react';
import { Element } from 'react-scroll';
import classes from './OilChange.module.css';

const oilData = [
	{
		id: 0,
		price: 'Starting at 34.99$',
		title: 'Regular Oil',
		description:
			" It's a basic oil that doesn't have the special additives to make it more durable and long-lasting",
	},
	{
		id: 1,
		price: 'Starting at 44.99$',
		title: 'High Mileage Oil',
		description:
			"We recommend high mileage oils for those vehicles with more than 75,000 miles, especially if they're driven an above-average number of miles, generally around 15,000 per year.",
	},
	{
		id: 2,
		price: 'Starting at 59.99$',
		title: 'Full Synthetic Oil',
		description:
			'It is the most expensive of all oils,but is the one with the most benefits and possibly save money over time. We recommend synthetic engine oils for newer and high-performance vehicles.',
	},
];

const renderData = () => {
	const cardStyle = classes.card + ' card';
	return oilData.map((oil) => {
		return (
			<div key={oil.id} className="col-lg-4">
				<div className={cardStyle}>
					<div className="card-body">
						<h4>{oil.title}</h4>
						<p className={classes.price}>{oil.price}</p>
						<p>{oil.description}</p>
					</div>
				</div>
			</div>
		);
	});
};

const OilChange = () => {
	return (
		<Element name="oil">
			<div className={classes.content}>
				<h2 className={classes.title}>Oil Change</h2>
				<div className="row" style={{ marginTop: 20 }}>
					{renderData()}
				</div>
			</div>
		</Element>
	);
};

export default OilChange;
