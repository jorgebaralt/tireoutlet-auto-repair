import React from 'react';
import { Element } from 'react-scroll';

const OilChange = () => {
	const { rowStyle, colStyle, contentStyle, titleStyle } = styles;
	return (
		<Element name="oil">
			<div style={contentStyle}>
				<h2 style={titleStyle}>Oil Change</h2>
			</div>
		</Element>
		
	);
};
const styles = {
	contentStyle: {
		textAlign: 'center',
		paddingLeft: '10%',
		paddingRight: '10%',
		height: '100vh',
		backgroundColor: 'rgb(238, 238, 238)',
		paddingTop: '1%',
	},
	titleStyle: { fontWeight: 500, paddingTop: 30 },
	rowStyle: { marginTop: '4%' },
	colStyle: { paddingLeft: '5%', paddingRight: '5%' },
};

export default OilChange;
