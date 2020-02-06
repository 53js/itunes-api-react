import { combineReducers } from 'redux';
import theme from './theme';
import player from './player';

const reducers = combineReducers({
	player,
	theme,
});

export default reducers;
