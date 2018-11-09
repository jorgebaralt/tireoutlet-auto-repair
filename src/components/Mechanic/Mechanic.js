import React from 'react';
import { Element } from 'react-scroll';

const Mechanic = () => {
	const { rowStyle, colStyle, contentStyle, titleStyle } = styles;
	return (
		<Element name="mechanic">
			<div style={contentStyle}>
				<h2 style={titleStyle}>Mechanic</h2>
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
		height: '100vh',
		backgroundColor: '#ECEFF1',
		paddingTop: '1%',
	},
	titleStyle: { fontWeight: 500, paddingTop: 30 },
	rowStyle: { marginTop: '4%' },
	colStyle: { paddingLeft: '5%', paddingRight: '5%' },
};

export default Mechanic;
