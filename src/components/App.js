import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import '../App.css';
import Services from './Services';
import Lift from './Lift';
import Gallery from './Gallery';
class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/services" component={Services} />
						<Route exact path="/lift" component={Lift} />
						<Route exact path="/gallery" component={Gallery} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
