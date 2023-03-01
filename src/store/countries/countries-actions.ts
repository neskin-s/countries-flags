export enum COUNTRIES_ACTIONS {
	SET_COUNTRIES = '@@/country/SET_COUNTRIES',
	SET_LOADING = '@@/country/SET_LOADING',
	SET_ERROR = '@@/country/SET_ERROR',
}

export type SetCountries = {
	type: COUNTRIES_ACTIONS;
	payload?: any;
};

export const setCountries = (countries: []): SetCountries => ({
	type: COUNTRIES_ACTIONS.SET_COUNTRIES,
	payload: countries,
});

export const setLoading = (): SetCountries => ({
	type: COUNTRIES_ACTIONS.SET_LOADING,
});

export const setError = (error: any): SetCountries => ({
	type: COUNTRIES_ACTIONS.SET_ERROR,
	payload: error,
});

export const loadCountries =
	() =>
	(dispatch: any, getState: any, { client, api }: any) => {
		dispatch(setLoading());
		client
			.get(api.ALL_COUNTRIES)
			.then(({ data }: any) => dispatch(setCountries(data)))
			.catch((err: any) => dispatch(setError(err.message)));
	};
