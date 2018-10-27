import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import '../App.css';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path='/' component={Home} />
           				<Route exact path="/" />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
