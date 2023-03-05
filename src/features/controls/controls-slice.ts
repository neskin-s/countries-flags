import { createSlice } from '@reduxjs/toolkit/';
import { RootState } from '../../store';

interface ControlsinitialStateProps {
	search: string;
	region: string;
}

const initialState: ControlsinitialStateProps = {
	search: '',
	region: '',
};

const controlsSlice = createSlice({
	name: '@@controls',
	initialState: initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload;
		},
		setRegion: (state, action) => {
			state.region = action.payload;
		},
		clearControls: () => initialState,
	},
});

export const { setSearch, setRegion, clearControls } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;

export const selectSearch = (state: RootState) => state.controls.search;
export const selectRegion = (state: RootState) => state.controls.region;
export const selectControls = (state: RootState) => state.controls;
