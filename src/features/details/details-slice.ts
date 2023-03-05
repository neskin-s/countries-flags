import { createSlice } from '@reduxjs/toolkit/';
import { RootState } from '../../store';
import { createAppAsyncThunk } from '../countries/countries-slice';

interface detailsinitialStateProps {
	status: 'idle' | 'loading' | 'received' | 'rejected';
	error: any;
	currentCountry: any;
	neighbors: any[];
}

const initialStateDetails: detailsinitialStateProps = {
	status: 'idle',
	error: null,
	currentCountry: null,
	neighbors: [],
};

export const loadNeighborsByBorder = createAppAsyncThunk(
	'@@details/load-neighbors-by-border',
	async (borders: any[], { extra: { client, api }, rejectWithValue }) => {
		try {
			const response = await client.get(api.filterByCode(borders));
			const data: any[] = response.data;
			return data.map((c: any) => c.name);
		} catch (error: any) {
			return rejectWithValue(error.response?.data);
		}
	}
);

export const loadCountryByName = createAppAsyncThunk(
	'@@details/load-country-by-name',
	async (name: string, { extra: { client, api }, rejectWithValue }) => {
		try {
			const response = await client.get(api.searchByCountry(name));
			return response?.data[0];
		} catch (error: any) {
			return rejectWithValue(error.response?.data);
		}
	}
);

const detailsSlice = createSlice({
	name: '@@details',
	initialState: initialStateDetails,
	reducers: {
		clearDetails: () => initialStateDetails,
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountryByName.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(loadCountryByName.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.payload || action.meta.requestId;
			})
			.addCase(loadCountryByName.fulfilled, (state, action) => {
				state.status = 'received';
				state.currentCountry = action.payload;
			})
			.addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
				state.status = 'received';
				state.neighbors = action.payload;
			});
	},
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

export const selectCurrentCountry = (state: RootState) =>
	state.details.currentCountry;
export const selectDetails = (state: RootState) => state.details;
export const selectNeighbors = (state: RootState) => state.details.neighbors;
