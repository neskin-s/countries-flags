import { ActionDetails, DETAILS_ACTIONS } from './details-actions';

interface initialState {
	status: 'idle' | 'loading' | 'received' | 'rejected';
	error: any;
	currentCountry: any;
}

export const detailsReducer = (
	state: initialState = {
		status: 'idle',
		error: null,
		currentCountry: null,
	},
	{ type, payload }: ActionDetails
): initialState => {
	switch (type) {
		case DETAILS_ACTIONS.SET_LOADING:
			return {
				...state,
				error: null,
				status: 'loading',
			};
		case DETAILS_ACTIONS.SET_ERROR:
			return {
				...state,
				status: 'rejected',
				error: payload,
			};
		case DETAILS_ACTIONS.SET_COUNTRY:
			return {
				...state,
				status: 'received',
				currentCountry: payload,
			};
		case DETAILS_ACTIONS.CLEAR_DETAILS:
			return {
				status: 'idle',
				error: null,
				currentCountry: null,
			};
		default:
			return state;
	}
};
