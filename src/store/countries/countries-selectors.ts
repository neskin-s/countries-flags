import { RootState } from '../root-reducer';

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
