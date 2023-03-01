import { SetCountries, COUNTRIES_ACTIONS } from './countries-actions';

interface initialState {
	status: 'idle' | 'loading' | 'received' | 'rejected';
	error: any;
	list: any[];
}

export const countriesReducer = (
	state: initialState = {
		status: 'idle',
		error: null,
		list: [],
	},
	{ type, payload }: SetCountries
): initialState => {
	switch (type) {
		case COUNTRIES_ACTIONS.SET_LOADING:
			return {
				...state,
				error: null,
				status: 'loading',
			};
		case COUNTRIES_ACTIONS.SET_ERROR:
			return {
				...state,
				status: 'rejected',
				error: payload,
			};
		case COUNTRIES_ACTIONS.SET_COUNTRIES:
			return {
				...state,
				status: 'received',
				list: payload,
			};
		default:
			return state;
	}
};
