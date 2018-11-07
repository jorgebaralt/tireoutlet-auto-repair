import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ImageZoom from 'react-medium-image-zoom';
import NavBar from './NavBar';
import Footer from './Footer';
import Masonry from './Masonry/Masonry';
import MasonryItem from './MasonryItems/MasonryItem';
//Images
import Lift1 from '../assets/gallery/Lift1.jpeg';
import Lift2 from '../assets/gallery/Lift2.jpeg';
import Lift4 from '../assets/gallery/Lift4.jpeg';
import Lift5 from '../assets/gallery/Lift5.jpeg';
import Lift7 from '../assets/gallery/Lift7.jpeg';
import Lift3 from '../assets/gallery/Lift3.jpeg';
import Allignment from '../assets/gallery/Allignment.jpeg';
import Tires5 from '../assets/gallery/Tires5.jpeg';
import Tires4 from '../assets/gallery/Tires4.jpeg';
import Tires1 from '../assets/gallery/Tires1.jpeg';
import Wheels1 from '../assets/gallery/Wheels1.jpeg';
import Lift9 from '../assets/gallery/Lift9.jpeg';
import LandingImage from '../assets/LandingImage.JPG';
import TireOutletLogo from '../assets/TireOutletLogo.png';

class Gallery extends Component {
	async componentWillMount() {
		window.scrollTo(0, 0);
		this.props.changeActive('gallery');
		this.props.decideTransparent(false);
	}

	render() {
		const { titleStyle, ImgiFrameStyle } = styles;

		return (
			<div>
				<NavBar />
				<div style={{ backgroundColor: '#e9e9e9' }}>
					<p style={titleStyle}>Welcome to our Gallery</p>
					<Masonry>
						<MasonryItem>
							<a
								href="https://www.instagram.com/tireoutletautorepair/?hl=en"
								target="_blank"
								rel="noopener noreferrer"
								style={{ color: 'black' }}
							>
								<h1
									style={{ margin: 0 }}
									href="https://www.instagram.com/tireoutletautorepair/?hl=en"
									target="_blank"
								>
									<i
										className="fab fa-instagram"
										id="instagram"
										style={{ color: 'black' }}
									/>{' '}
									Follow us
								</h1>
								<p style={{ fontSize: 20, margin: 0, textAlign: 'center' }}>
									@tireoutletautorepair
								</p>
							</a>
							<br />
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Allignment,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<p style={{ fontSize: 20, margin: 0, fontWeight: 'bold' }}>
								Looking for new wheels? stop at our show room
							</p>
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Lift1,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: TireOutletLogo,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Tires5,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Lift3,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Tires1,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<iframe
								style={ImgiFrameStyle}
								title="Tire Outlet Map"
								width="425"
								height="350"
								frameBorder="0"
								scrolling="no"
								marginHeight="0"
								marginWidth="0"
								src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=5495%20S%20ORANGE%20BLOSSOM%20TRAIL%2C%20orlando%20fl%2C%2032839+(Tire%20outlet)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=A&amp;output=embed"
							/>
						</MasonryItem>

						<MasonryItem>
							<ImageZoom
								image={{
									src: LandingImage,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<p style={{ fontSize: 20, margin: 0, fontWeight: 'bold' }}>
								The best auto repair shop in Orlando
							</p>
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Lift4,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
							{/* <br />
							Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
							deleniti possimus cumque accusantium rerum quibusdam. */}
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Lift5,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Wheels1,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Lift7,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
							{/* <br />
							Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
							deleniti possimus cumque accusantium rerum quibusdam. */}
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Lift2,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Tires4,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<ImageZoom
								image={{
									src: Lift9,
									alt: 'Example 1',
									style: ImgiFrameStyle,
								}}
							/>
						</MasonryItem>
						<MasonryItem>
							<p style={{ fontSize: 20, margin: 0, fontWeight: 'bold' }}>
								Got a flat tire? we got you
							</p>
						</MasonryItem>
					</Masonry>
				</div>
				<Footer />
			</div>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 40,
		textAlign: 'center',
		fontWeight: 500,
		paddingTop: 30,
	},
	ImgiFrameStyle: {
		maxWidth: '100%',
		height: 'auto',
		display: 'block',
	},
};

export default connect(
	null,
	actions
)(Gallery);
