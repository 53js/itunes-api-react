import { SET_TRACKLIST_ACTION } from '../actions/track';

const defaultState = { tracklist: [] };

const theme = (state = defaultState, action) => {
	switch (action.type) {
	case SET_TRACKLIST_ACTION:
		return { ...state, tracklist: action.list };
	default:
		return state;
	}
};

export default theme;
