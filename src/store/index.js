// reducers
import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';

import Reducers from './reducers';

// build store
const logger = createLogger({
	// predicate: (getState, action) => action.type !== '',
	collapsed: (getState, action) => action.type !== '',
});

// get the theme from localstorage
const persistedState = localStorage.getItem('theme')
	? { theme: localStorage.getItem('theme') }
	: {};

// pass the persistedState as initial state (2nd argument)
const store = createStore(Reducers, persistedState, applyMiddleware(logger));


// subscribe to action and when theme value change set into the localstorage
let currentValue;
store.subscribe(() => {
	const previousValue = currentValue;
	currentValue = store.getState().theme;
	if (currentValue !== previousValue) {
		localStorage.setItem('theme', currentValue);
	}
});

export default store;
