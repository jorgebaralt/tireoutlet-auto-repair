import React from 'react';
import { Element } from 'react-scroll';

const TireServices = () => {
	const { rowStyle, colStyle, contentStyle, titleStyle } = styles;
	return (
		<Element name="tires">
			<div style={contentStyle}>
				<h2 style={titleStyle}>Tire Services</h2>
			</div>
		</Element>
	);
};
const styles = {
	contentStyle: {
		paddingtop: 50,
		textAlign: 'center',
		paddingLeft: '10%',
		paddingRight: '10%',
		paddingTop: '1%',
		height: '100vh',
		backgroundColor: 'white',
	},
	titleStyle: { fontWeight: 500, paddingTop: 30  },
	rowStyle: { marginTop: '4%' },
	colStyle: { paddingLeft: '5%', paddingRight: '5%' },
};

export default TireServices;
