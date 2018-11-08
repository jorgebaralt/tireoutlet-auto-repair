import React from 'react';

const Mechanic = () => {
	const { rowStyle, colStyle, contentStyle, titleStyle } = styles;
	return (
		<div style={contentStyle}>
			<h2 style={titleStyle}>Mechanic</h2>
		</div>
	);
};
const styles = {
	contentStyle: {
		paddingtop: 50,
		textAlign: 'center',
		paddingLeft: '10%',
		paddingRight: '10%',
		height: '93vh',
		backgroundColor: '#ECEFF1',
		paddingTop: '1%',
	},
	titleStyle: { fontWeight: 500 },
	rowStyle: { marginTop: '4%' },
	colStyle: { paddingLeft: '5%', paddingRight: '5%' },
};

export default Mechanic;
