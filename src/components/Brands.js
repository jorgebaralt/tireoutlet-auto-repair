import React, { Component } from 'react';
import Slider from 'react-slick';
import Audi from '../assets/brands/audi.png';
import Chevrolet from '../assets/brands/chevrolet.png';
import Dodge from '../assets/brands/dodge.png';
import Fiat from '../assets/brands/fiat.png';
import Ford from '../assets/brands/ford.png';
import Honda from '../assets/brands/honda.png';
import Hyundai from '../assets/brands/hyundai.png';
import Jaguar from '../assets/brands/jaguar.png';
import Jeep from '../assets/brands/jeep.png';
import Kia from '../assets/brands/kia.png';
import Landrover from '../assets/brands/landrover.png';
import Lexus from '../assets/brands/lexus.png';
import Mazda from '../assets/brands/mazda.png';
import Mercedesbenz from '../assets/brands/mercedesbenz.png';
import Mini from '../assets/brands/mini.png';
import Nissan from '../assets/brands/nissan.png';
import Porsche from '../assets/brands/porsche.png';
import Toyota from '../assets/brands/toyota.png';

const logos = [
	{ brand: Audi, h: 200, w: 250 },
	{ brand: Lexus, h: 200, w: 250 },
	{ brand: Toyota, h: 200, w: 300 },
	{ brand: Chevrolet, h: 200, w: 200 },
	{ brand: Jeep, h: 200, w: 200 },
	{ brand: Porsche, h: 150, w: 300 },
	{ brand: Nissan, h: 200, w: 400 },
	{ brand: Mercedesbenz, h: 150, w: 300 },
	{ brand: Mazda, h: 150, w: 300 },
	{ brand: Jaguar, h: 200, w: 200 },
	{ brand: Landrover, h: 200, w: 300 },
	{ brand: Honda, h: 150, w: 200 },
	{ brand: Fiat, h: 150, w: 300 },
	{ brand: Hyundai, h: 200, w: 300 },
	{ brand: Dodge, h: 200, w: 350 },
	{ brand: Ford, h: 200, w: 300 },
	{ brand: Kia, h: 200, w: 200 },
	{ brand: Mini, h: 200, w: 350 },
];
class Brands extends Component {
	renderBrandLogos = () => {
		return logos.map((logo) => {
			return (
				<div style={{ padding: '20%' }}>
					<img src={logo.brand} style={{ height: 'auto', width: '100%' }} />
				</div>
			);
		});
	};

	render() {
		const settings = {
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			arrows: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		};
		const { contentStyle, titleStyle, subtitleStyle } = styles;
		return (
			<div style={contentStyle}>
				<h2 style={titleStyle}>Brands we work on</h2>
				<h5 style={subtitleStyle}> All American, European, and Japanese </h5>
				<div style={{ marginTop: '2%', cursor: 'pointer'}}>
					<Slider {...settings}>{this.renderBrandLogos()}</Slider>
				</div>
			</div>
		);
	}
}

const styles = {
	contentStyle: {
		textAlign: 'center',
		paddingTop: '1%',
		paddingBottom: '2%',
		paddingLeft: '10%',
		paddingRight: '10%',
		backgroundColor: '#EEEEEE'
	},
	titleStyle: { fontWeight: 500, marginTop: '5%' },
	subtitleStyle: { color: 'gray' },
};

export default Brands;
