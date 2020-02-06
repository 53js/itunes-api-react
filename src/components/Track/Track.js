import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';

import { SET_TRACK_ACTION } from '../../store/actions/player';

import './Track.scss';

const Track = ({ track }) => {
	const dispatch = useDispatch();
	const handleOnClickPlay = useCallback(() => {
		dispatch({ type: SET_TRACK_ACTION, track });
	}, [dispatch, track]);

	return (
		<li
			className="Track"
			key={`# ${`${track.collectionId} ${track.trackId}`}`}
		>
			<h1>{track.artistName}</h1>
			<span>
				{track.trackName}
			</span>
			<br />
			<button type="button" className="btn" onClick={handleOnClickPlay}>
				{' '}
				<Fa icon={faPlayCircle} className="fa" />
			</button>
			<br />
			<span>
				<Link to={`/itunes/track/${track.trackId}`}>Voir plus</Link>
			</span>
		</li>
	);
};

Track.propTypes = {
	track: PropTypes.shape({
		trackId: PropTypes.number,
		collectionId: PropTypes.number,
		artistName: PropTypes.string,
		trackName: PropTypes.string,
	}).isRequired,
};


export default Track;
