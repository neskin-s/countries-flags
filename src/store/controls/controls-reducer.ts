import { CONTORLS_ACTIONS, ActionControls } from './controls-actions';

interface initialState {
	search: string;
	region: any;
}

export const searchReducer = (
	state: initialState = {
		search: '',
		region: '',
	},
	{ type, payload }: ActionControls
): initialState => {
	switch (type) {
		case CONTORLS_ACTIONS.SET_SEARCH:
			return {
				...state,
				search: payload,
			};
		case CONTORLS_ACTIONS.SET_REGION:
			return {
				...state,
				region: payload,
			};
		case CONTORLS_ACTIONS.CLEAR_CONTROLS:
			return {
				search: '',
				region: '',
			};
		default:
			return state;
	}
};
