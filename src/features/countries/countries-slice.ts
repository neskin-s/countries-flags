import { createAsyncThunk, createSlice } from '@reduxjs/toolkit/';
import { Axios } from 'axios';
import { ApiType, AppDispatch, RootState } from '../../store';

interface CountriesinitialStateProps {
	status: 'idle' | 'loading' | 'received' | 'rejected';
	error: any;
	list: any[];
}

const initialStateCountries: CountriesinitialStateProps = {
	status: 'idle',
	error: null,
	list: [],
};

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: RootState;
	dispatch: AppDispatch;
	extra: { client: Axios; api: ApiType };
}>();

export const loadCountries = createAppAsyncThunk(
	'@@countries/load-countries',
	async (_, { extra: { client, api }, rejectWithValue }) => {
		try {
			const response = await client.get(api.ALL_COUNTRIES);
			return response?.data as [];
			// return fulfillWithValue(response?.data as []);
		} catch (error: any) {
			return rejectWithValue(error.response?.data);
		}
	}
);

const countriesSlice = createSlice({
	name: '@@countries',
	initialState: initialStateCountries,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountries.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(loadCountries.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.payload || action.meta.requestId;
			})
			.addCase(loadCountries.fulfilled, (state, action) => {
				state.status = 'received';
				state.list = action.payload;
			});
	},
});

// export const {} = countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;

export const selectCountriesInfo = (state: RootState) => ({
	status: state.countries.status,
	error: state.countries.error,
	qty: state.countries.list.length,
});

export const selectAllCountries = (state: RootState) => state.countries.list;
export const selectVisibleCountries = (
	state: RootState,
	{ search = '', region = '' }
) => {
	return state.countries.list.filter(
		(country) =>
			country.name.toLowerCase().includes(search.toLowerCase()) &&
			country.region.toLowerCase().includes(region.toLowerCase())
	);
};
