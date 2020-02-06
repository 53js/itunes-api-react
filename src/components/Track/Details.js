import React from 'react';
import PropTypes from 'prop-types';

import './Details.scss';
import { Link, Redirect } from 'react-router-dom';

const TrackDetails = ({ track }) => {
	if (!track) {
		return (<Redirect to="/itunes/" />);
	}
	return (
		<section className="TrackDetails">
			<h1>{track.artistName}</h1>
			<ul>
				<li key="id">id : ${track.trackId}</li>
				<li key="Name">Name : ${track.trackName}</li>
				<li key="collectionName">collectionName : ${track.collectionName}</li>
				<li key="country">country : ${track.country}</li>
				<li key="primaryGenreName">primaryGenreName : ${track.primaryGenreName}</li>
			</ul>
			<span>
				<Link to="/itunes/">back</Link>
			</span>
		</section>
	);
};

TrackDetails.propTypes = {
	track: PropTypes.shape({
		trackId: PropTypes.number,
		artistName: PropTypes.string,
		trackName: PropTypes.string,
		collectionName: PropTypes.string,
		country: PropTypes.string,
		primaryGenreName: PropTypes.string,
	}),
};
TrackDetails.defaultProps = {
	track: null,
};

export default TrackDetails;
