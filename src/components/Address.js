import React from 'react';
import TireOutletMap from './TireOutletMap';

const Address = () => {
	const { contentStyle, titleStyle, subtitleStyle } = styles;
	return (
		<div style={contentStyle}>
		<hr/>
			<h2 style={titleStyle}>Address</h2>
			<h5 style={subtitleStyle}>
				5495 S Orange Blossom Trail, Orlando, FL 32839
			</h5>
			<div style={{ position: 'relative' }}>
				<TireOutletMap
					googleMapURL="maps.googleapis.com/maps/api/js?key=AIzaSyBieffVTLc-p8XOjrrtNBb-JJhjwSp_2fQ"
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '400px' }} />}
					mapElement={<div style={{ height: '100%' }} />}
				/>
				<a
					id="takeme"
					href="https://www.google.com/maps/search/?api=1&query=tire+outlet+truck+bus+and+car+orlando"
					className="waves-effect waves-light btn"
					style={{
						backgroundColor: '#FFC107',
						fontSize: 18,
						position: 'relative',
						bottom: 60,
						textAlign: 'center'
					}}
					target="_blank"
					rel="noopener noreferrer"
				>
					Take me there
				</a>
			</div>
		</div>
	);
};

const styles = {
	contentStyle: {
		textAlign: 'center',
		paddingTop: '1%',
		paddingBottom: '4%',
		paddingLeft: '10%',
		paddingRight: '10%',
	},
	titleStyle: { fontWeight: 500, marginTop: '5%' },
	subtitleStyle: { color: 'gray' },
};

export default Address;
