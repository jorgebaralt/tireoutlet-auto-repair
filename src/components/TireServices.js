import React from 'react';

const TireServices = () => {
	const { rowStyle, colStyle, contentStyle, titleStyle } = styles;
	return (
		<div style={contentStyle}>
			<h2 style={titleStyle}>Tire Services</h2>
		</div>
	);
};
const styles = {
	contentStyle: {
		paddingtop: 50,
		textAlign: 'center',
		paddingLeft: '10%',
		paddingRight: '10%',
		paddingTop: '1%',
		height: '93vh',
		backgroundColor: 'gray',
		color: 'white'
	},
	titleStyle: { fontWeight: 500 },
	rowStyle: { marginTop: '4%' },
	colStyle: { paddingLeft: '5%', paddingRight: '5%' },
};

export default TireServices;
