import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBar from './NavBar';
import Footer from './Footer';
// import Instafeed from 'instafeed.js';
import Masonry from './Masonry/Masonry';
import MasonryItem from './MasonryItems/MasonryItem';
import Lift1 from '../assets/gallery/Lift1.jpeg';
import Lift4 from '../assets/gallery/Lift4.jpeg';
import Lift5 from '../assets/gallery/Lift5.jpeg';
import Lift7 from '../assets/gallery/Lift7.jpeg';
import Lift3 from '../assets/gallery/Lift3.jpeg';
import Allignment from '../assets/gallery/Allignment.jpeg';
class Gallery extends Component {
	async componentWillMount() {
		window.scrollTo(0, 0);
		this.props.changeActive('gallery');
		this.props.decideTransparent(false);
	}

	render() {
		const { titleStyle, ImgiFrameStyle } = styles;
		const marsoniContent = (
			<div>
				<div className="item">
					<h1>Follow us</h1> <br />{' '}
					<p style={{ fontSize: 20 }}>@tireoutletautorepair</p>
				</div>
				<div className="item">
					<iframe
						title="Tire Outlet Map"
						width="425"
						height="350"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
						src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=5495%20S%20ORANGE%20BLOSSOM%20TRAIL%2C%20orlando%20fl%2C%2032839+(Tire%20outlet)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=A&amp;output=embed"
					/>
				</div>
				<div className="item">
					<img src={Lift1} />
					<br />
					Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
					deleniti possimus cumque accusantium rerum quibusdam.
				</div>
				<div className="item">
					<img src={Lift4} />
					<br />
					Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
					deleniti possimus cumque accusantium rerum quibusdam.
				</div>
				<div className="item">
					<img src={Lift5} />
					<br />
					Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
					deleniti possimus cumque accusantium rerum quibusdam.
				</div>
				<div className="item">
					<img src={Lift7} />
					<br />
					Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
					deleniti possimus cumque accusantium rerum quibusdam.
				</div>
				<div className="item">
					<img src={Lift3} />
					<br />
					Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
					deleniti possimus cumque accusantium rerum quibusdam.
				</div>
				<div className="item">
					<img src={Allignment} />
					<br />
					Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
					deleniti possimus cumque accusantium rerum quibusdam.
				</div>
			</div>
		);
		return (
			<div>
				<NavBar />
				<div style={{ backgroundColor: '#e9e9e9' }}>
					<p style={titleStyle}>Welcome to our Gallery</p>
					<Masonry>
						<MasonryItem>
							<h1>Follow us</h1> <br />{' '}
							<p style={{ fontSize: 20 }}>@tireoutletautorepair</p>
						</MasonryItem>
						<MasonryItem>
							<img src={Allignment} style={ImgiFrameStyle} />
							<br />
							Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
							deleniti possimus cumque accusantium rerum quibusdam.
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
							<img src={Lift1} style={ImgiFrameStyle} />
							<br />
							Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
							deleniti possimus cumque accusantium rerum quibusdam.
						</MasonryItem>
						<MasonryItem>
							<img src={Lift3} style={ImgiFrameStyle} />
							<br />
							Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
							deleniti possimus cumque accusantium rerum quibusdam.
						</MasonryItem>
						<MasonryItem>
							<img src={Lift4} style={ImgiFrameStyle} />
							<br />
							Lorem ipsum dolor sit amet, dicta dolore adipisci hic ipsam velit
							deleniti possimus cumque accusantium rerum quibusdam.
						</MasonryItem>
						{/* {marsoniContent} */}
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
