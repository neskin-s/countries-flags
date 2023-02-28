import { SetTheme, THEME_ACTIONS, THEME_VARIABLES } from './theme-actions';

export const themeReducer = (
	state: THEME_VARIABLES = THEME_VARIABLES.light,
	{ type, payload }: SetTheme
) => {
	switch (type) {
		case THEME_ACTIONS.SET_THEME:
			return payload;
		default:
			return state;
	}
};
