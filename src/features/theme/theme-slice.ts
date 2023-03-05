import { createSlice } from '@reduxjs/toolkit';

export enum THEME_VARIABLES {
	light = 'light',
	dark = 'dark',
}

const themeSlice = createSlice({
	name: '@@theme',
	initialState: THEME_VARIABLES.light,
	reducers: {
		setTheme: (_, action) => action.payload,
	},
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
