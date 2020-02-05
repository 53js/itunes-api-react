import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Itunes from './pages/Itunes';

import './App.scss';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/itunes">
						<Itunes />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
