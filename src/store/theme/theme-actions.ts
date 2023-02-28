export enum THEME_ACTIONS {
	SET_THEME = '@@/theme/SET_THEME',
}

export enum THEME_VARIABLES {
	light = 'light',
	dark = 'dark',
}

export type SetTheme = {
	type: THEME_ACTIONS;
	payload: THEME_VARIABLES;
};

export const setTheme = (theme: THEME_VARIABLES): SetTheme => ({
	type: THEME_ACTIONS.SET_THEME,
	payload: theme,
});
