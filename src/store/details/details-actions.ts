export enum DETAILS_ACTIONS {
	SET_COUNTRY = '@@/details/SET_COUNTRY',
	SET_LOADING = '@@/controls/SET_LOADING',
	SET_ERROR = '@@/controls/SET_ERROR',
	CLEAR_DETAILS = '@@/controls/CLEAR_DETAILS',
}

export type ActionDetails = {
	type: DETAILS_ACTIONS;
	payload?: any;
};

export const setCountry = (country: any): ActionDetails => ({
	type: DETAILS_ACTIONS.SET_COUNTRY,
	payload: country,
});

export const setLoading = (): ActionDetails => ({
	type: DETAILS_ACTIONS.SET_LOADING,
});

export const clearDetails = (): ActionDetails => ({
	type: DETAILS_ACTIONS.CLEAR_DETAILS,
});

export const setError = (error: any): ActionDetails => ({
	type: DETAILS_ACTIONS.SET_ERROR,
	payload: error,
});

export const loadCountryByName =
	(name: string) =>
	(dispatch: any, getState: any, { client, api }: any) => {
		dispatch(setLoading());
		client
			.get(api.searchByCountry(name))
			.then(({ data }: any) => dispatch(setCountry(data[0])))
			.catch((err: any) => dispatch(setError(err.message)));
	};
