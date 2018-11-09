import React from 'react';
import { Element } from 'react-scroll';
import classes from './Mechanic.module.css';

const mechData = [
	{
		id: '0',
		title: 'General Services',
		description:
			'A General service will typically include an oil and filter change and a visual inspection',
	},
	{
		id: '1',
		title: 'Car and Truck Services',
		description: ' We offer the General Services to Cars and Trucks',
	},
	{
		id: '2',
		title: 'Car Inspection',
		description:
			' Visual Inspection to your Vehicle, as well as connecting the computer for more specific information about the vehicle.',
	},
	{
		id: '3',
		title: 'Brakes',
		description:
			'We can check, replace, and install new Brakes whenever you need it.',
	},
	{
		id: '4',
		title: 'Engine and Transmissions',
		description:
			'We offer inspection of Engine and Transmissions, Fixes and Replacements.',
	},
	{
		id: '5',
		title: 'Engine Maintenance ',
		description:
			'Proper Engine Maintenance is the critical for the car. The engine is the heart of the car,and the fluids are its blood. We make sure to keep the fluids clean and fresh.',
	},
	{
		id: '6',
		title: '4x4 Services',
		description:
			'Draining and refilling the Transfer Case, Front Differential, and the rear differential with fresh, clean fluid.',
	},
	{
		id: '7',
		title: 'Heating and Cooling Services',
		description: 'Inspect and diagnose the A/C cooling and heating services.',
	},
	{
		id: '8',
		title: 'Electrical Services ',
		description:
			'We inspect and repair any electrical problems that the vehicle may have.',
	},
	{
		id: 9,
		title: 'Electronic Services',
		description:
			'We can help fixing and installing electronic services, For example Sound System.',
	},
	{
		id: 10,
		title: 'Quick Lube Services',
		description:
			'Any type of oil services, You can refer to the Oil Services Section for more information.',
	},
];

const renderData = () => {
	const cardStyle = classes.card + ' card';
	return mechData.map((oil) => {
		return (
			<div className=" col-md-4 col-sm-6">
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

const Mechanic = () => {
	const { rowStyle, colStyle, contentStyle, titleStyle } = styles;
	return (
		<Element name="mechanic">
			<div style={contentStyle}>
				<h2 style={titleStyle}>Mechanic</h2>
				<div className="row" style={{ marginTop: 20, marginBottom: 0, paddingBottom: 30 }}>
					{renderData()}
				</div>
			</div>
		</Element>
	);
};

const styles = {
	contentStyle: {
		textAlign: 'center',
		paddingLeft: '10%',
		paddingRight: '10%',
		backgroundColor: '#ECEFF1',
	},
	titleStyle: { fontWeight: 500, paddingTop: 70, margin: 0 },
	rowStyle: { marginTop: '4%' },
	colStyle: { paddingLeft: '5%', paddingRight: '5%' },
};

export default Mechanic;
