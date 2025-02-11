import React, { useCallback, useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Itunes } from './pages/Itunes';
import { Error404 } from './pages/Error404';
import useLocalStorage from './lib/useLocalStorage';
import { ThemeContext } from './context/ThemeContext';
import { HistoryContextProvider } from './context/HistoryContext';
import './App.scss';

const App = () => {
	const [theme, setTheme] = useState();
	const [storageMode, setStorageMode] = useLocalStorage('darkmode');

	const changeThemeContext = useCallback((newTheme) => {
		setTheme(newTheme);
		setStorageMode(newTheme);
	}, [setStorageMode]);

	useEffect(() => {
		setTheme(storageMode);
	}, [storageMode]);

	return (
		<ThemeContext.Provider value={{ theme, changeThemeContext }}>
			<HistoryContextProvider>
				<Router>
					<Routes>
						<Route path="/itunes/*" element={<Itunes />} />
						<Route path="/" element={<Home />} />
						<Route path="*" element={<Error404 />} />
					</Routes>
				</Router>
			</HistoryContextProvider>
		</ThemeContext.Provider>
	);
};

export default App;
