import React, { useCallback } from 'react';
import Toggle from 'react-toggle';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';

import { TOGGLE_THEME_ACTION } from '../store/actions/theme';

import 'react-toggle/style.css';
import './ToggleMode.scss';

const ToggleMode = () => {
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();

	const handleChangeTheme = useCallback(() => {
		dispatch({ type: TOGGLE_THEME_ACTION });
	}, [dispatch]);

	return (
		<div className="ToggleMode">
			<Toggle
				id="mode"
				icons={{
					checked: (
						<FontAwesomeIcon icon={faMoon} className="fa faMoon" />
					),
					unchecked: (
						<FontAwesomeIcon icon={faSun} className="fa faSun" />
					),
				}}
				defaultChecked={theme !== 'light'}
				onChange={handleChangeTheme}
			/>

		</div>
	);
};

export default ToggleMode;
