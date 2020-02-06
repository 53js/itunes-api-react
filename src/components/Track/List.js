import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Track from './Track';

import './List.scss';

const TrackList = ({ loading, tracks }) => {
	return (
		<div className="TrackList">
			<p>
				{loading && (
					<FontAwesomeIcon icon={faSpinner} spin className="fa" />
				)}
			</p>
			<ul>
				{!loading && (tracks || []).map((t) => (
					<Track track={t} />
				))}
			</ul>
		</div>
	);
};

TrackList.propTypes = {
	loading: PropTypes.bool,
	tracks: PropTypes.arrayOf(PropTypes.shape({})),
};

TrackList.defaultProps = {
	loading: false,
	tracks: [],
};

export default TrackList;
