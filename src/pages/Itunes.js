import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import fetchItunesSongs from '../lib/fetchItunesSongs';

import AudioPlayer from '../components/AudioPlayer';
import TrackDetails from '../components/Track/Details';
import ToggleMode from '../components/ToggleMode';
import SearchHistory from '../components/SearchHistory';
import SongList from '../components/Track/List';
import SongSearch from '../components/Track/Search';

import { SET_TRACKLIST_ACTION } from '../store/actions/track';

import './Itunes.scss';

const Itunes = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme);

	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [noResult, setNoResult] = useState(false);
	const [tracks, setTracks] = useState([]);
	const [searchs, setSearchs] = useState([]);

	const handleSearchClick = useCallback(async (term) => {
		setLoading(true);
		setError(false);
		setSearchs((prev) => [...prev, term]);
		try {
			const response = await fetchItunesSongs(term);
			if (response.resultCount === 0) {
				setNoResult(true);
			}
			if (response.resultCount) {
				setNoResult(false);
				const tracksFromResponse = response.results.filter(
					(r) => r.kind === 'song',
				);

				setTracks(tracksFromResponse);
				dispatch({
					type: SET_TRACKLIST_ACTION,
					list: tracksFromResponse,
				});
			}
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e);
			setError(true);
		} finally {
			setLoading(false);
		}
	}, [dispatch]);

	return (
		<div className={`Itunes ${theme}`}>
			<div className="container">
				<section className="track-section">
					<ToggleMode />
					<header className="Itunes-header">
						<h1>ITUNES API</h1>
					</header>
					<SongSearch onClick={handleSearchClick} />
					{noResult && <p>Pas de résultat</p>}
					{error && <p>Une erreur est survenue</p>}
					<Switch>
						<Route exact path="/itunes">
							<SongList
								tracks={tracks}
								loading={loading}
							/>
						</Route>
						<Route path="/itunes/track/:trackid">
							<TrackDetails />
						</Route>
					</Switch>
				</section>
				<SearchHistory searchs={searchs} />
			</div>
			<AudioPlayer />
		</div>
	);
};

export default Itunes;
