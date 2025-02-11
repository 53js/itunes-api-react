import {
	useState, useEffect, useContext, useCallback,
} from 'react';
import {
	Routes, Route, useNavigate, useMatch,
} from 'react-router-dom';
import { Container } from 'reactstrap';

import { fetchItunesSongs } from '../lib/fetchItunesSongs';
import { AudioPlayer } from '../components/AudioPlayer';
import { ToggleModeNight } from '../components/ToggleModeNight';
import { SearchHistory } from '../components/SearchHistory';
import { TrackList } from '../components/Track/List';
import { TrackSearch } from '../components/Track/Search';
import { TrackDetails } from '../components/Track/Details';
import { ThemeContext } from '../context/ThemeContext';
import { ADD_TO_HISTORY, HistoryContext } from '../context/HistoryContext';

import './Itunes.scss';

export const Itunes = () => {
	const match = useMatch('/itunes/:search');
	const navigate = useNavigate();
	const { dispatch } = useContext(HistoryContext);
	const { theme } = useContext(ThemeContext);
	const [currentTrack, setCurrentTrack] = useState();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [noResult, setNoResult] = useState(false);
	const [tracks, setTracks] = useState([]);

	const searchRequest = useCallback(async (term) => {
		setLoading(true);
		setError(false);
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
			}
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e);
			setError(true);
		} finally {
			setLoading(false);
			dispatch({ type: ADD_TO_HISTORY, payload: term });
		}
	}, [dispatch]);

	useEffect(() => {
		if (match && match.params.search) {
			searchRequest(match.params.search);
		}
	}, [match, searchRequest]);

	const handleClickTrack = (track) => {
		setCurrentTrack(track);
	};

	const handleSearchClick = async (term) => {
		navigate(`/itunes/${term}`);
	};

	return (
		<div className={`Itunes ${theme}`}>
			<Container>
				<section className="track-section">
					<ToggleModeNight />
					<header className="App-header">
						<h1>ITUNES API</h1>
					</header>
					<TrackSearch onClick={handleSearchClick} />
					{noResult && <p>Pas de résultat</p>}
					{error && <p>Une erreur est survenue</p>}
					<Routes>
						<Route
							path="/:search/*"
							element={
								<TrackList tracks={tracks} onClickTrack={handleClickTrack} loading={loading} />
							}
						/>
						<Route
							path="/track/:trackname"
							element={<TrackDetails track={currentTrack} />}
						/>
					</Routes>
				</section>
				<SearchHistory />
			</Container>
			<AudioPlayer track={currentTrack} />
		</div>
	);
};
