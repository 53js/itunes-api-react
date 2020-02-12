import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

const Search = memo(({ onClick, onKeyPress }) => {
	const [term, setTerm] = useState('');
	const [search, setSearch] = useState([]);

	const handleChange = useCallback((e) => {
		setTerm(e.target.value);
	}, []);

	const handleClick = useCallback(() => {
		const searchTeam = term.trim();

		setSearch([...search, searchTeam]);
		onClick(searchTeam);
	}, [onClick, search, term]);

	return (
		<div className="TrackSearch">
			<input
				type="text"
				placeholder="search"
				id="search"
				onChange={handleChange}
				onKeyPress={onKeyPress}
				value={term}
			/>
			<button type="button" className="btn" onClick={handleClick}>
				Search
			</button>
		</div>
	);
});

Search.propTypes = {
	onClick: PropTypes.func.isRequired,
	onKeyPress: PropTypes.func,
};

Search.defaultProps = {
	onKeyPress: null,
};

export default Search;
