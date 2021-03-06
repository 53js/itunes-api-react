import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import './Track.scss';

export const Track = ({ track, onClickTrack }) => {
	const handleOnClick = useCallback(() => {
		onClickTrack(track);
	}, [onClickTrack, track]);

	return (
		<li className="Track" key={`# ${track.trackId}`} onClick={handleOnClick}>
			<h1>{track.artistName}</h1>
			<span>{track.trackName}</span>
		</li>
	);
};

Track.propTypes = {
	track: PropTypes.shape({
		trackId: PropTypes.number,
		artistName: PropTypes.string,
		trackName: PropTypes.string,
	}).isRequired,
	onClickTrack: PropTypes.func.isRequired,
};
