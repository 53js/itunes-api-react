import { TOGGLE_THEME_ACTION } from '../actions/theme';

const defaultState = 'light';

const theme = (state = defaultState, action) => {
	switch (action.type) {
	case TOGGLE_THEME_ACTION:
		return state === 'light' ? 'dark' : 'light';
	default:
		return state;
	}
};

export default theme;
