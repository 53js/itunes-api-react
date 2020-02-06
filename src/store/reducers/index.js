import { combineReducers } from 'redux';
import theme from './theme';
import player from './player';
import track from './track';

const reducers = combineReducers({
	player,
	theme,
	track,
});

export default reducers;
