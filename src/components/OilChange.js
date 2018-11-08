import React from 'react';

const OilChange = () => {
	const { rowStyle, colStyle, contentStyle, titleStyle } = styles;
	return (
		<div style={contentStyle}>
			<h2 style={titleStyle}>Oil Change</h2>
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
		backgroundColor: 'rgb(238, 238, 238)',
		paddingTop: '1%',
	},
	titleStyle: { fontWeight: 500, color: 'black' },
	rowStyle: { marginTop: '4%' },
	colStyle: { paddingLeft: '5%', paddingRight: '5%' },
};

export default OilChange;
