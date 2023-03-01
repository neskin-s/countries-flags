import { RootState } from '../root-reducer';

export const selectCountriesInfo = (state: RootState) => ({
	status: state.countries.status,
	error: state.countries.error,
	qty: state.countries.list.length,
});

export const selectAllCountries = (state: RootState) => state.countries.list;
export const selectVisibleCountries = (state: RootState, { search = '' }) => {
	return state.countries.list.filter((country) =>
		country.name.toLowerCase().includes(search.toLowerCase())
	);
};
