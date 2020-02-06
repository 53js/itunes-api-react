import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

// components
import Home from './pages/Home';
import Itunes from './pages/Itunes';

// store
import store from './store';
// CSS
import './App.scss';


function App() {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default App;
