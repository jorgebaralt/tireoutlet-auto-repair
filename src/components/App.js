import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import '../App.css';
import Mechanic from './Mechanic';


class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/mechanic" component={Mechanic} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
