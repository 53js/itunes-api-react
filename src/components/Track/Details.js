import React from 'react';
import PropTypes from 'prop-types';

import { Link, Redirect, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Details.scss';

const TrackDetails = () => {
	// get tracklist from store
	const tracklist = useSelector((state) => state.track.tracklist);
	// get trackid from url (with useParams)
	let { trackid } = useParams();
	// convert trackid to number
	trackid = parseInt(trackid, 10);
	// get the track with the corresponding id in the tracklist
	const track = tracklist.find((t) => t.trackId === trackid);

	// debug usefull log
	// console.log({ track, tracklist, trackid });

	// no id in url or id track not found in list redirect to /itunes
	if (!trackid || !track) return <Redirect to="/itunes" />;
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
