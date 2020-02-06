import { SET_TRACK_ACTION } from '../actions/player';

const defaultState = { current: null };

const theme = (state = defaultState, action) => {
	switch (action.type) {
	case SET_TRACK_ACTION:
		return { ...state, current: action.track };
	default:
		return state;
	}
};

export default theme;
