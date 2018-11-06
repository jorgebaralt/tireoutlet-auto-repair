import React from 'react';

const OilChange = () => {
	const { rowStyle, colStyle, contentStyle, titleStyle } = styles;
	return (
		<div style={contentStyle}>
			<h2 style={titleStyle}>Oil Change</h2>
			<div className="row" style={rowStyle}>
				<div className="col-lg-4" style={colStyle}>
					asdasdasd
				</div>

				<div className="col-lg-4" style={colStyle}>
					asdasdasd
				</div>

				<div className="col-lg-4" style={colStyle}>
					asdasdasd
				</div>
			</div>
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
		backgroundColor: 'gray'
	},
	titleStyle: { fontWeight: 500, marginTop: 0 },
	rowStyle: { marginTop: '4%' },
	colStyle: { paddingLeft: '5%', paddingRight: '5%' },
};

export default OilChange;
