import { CONTORLS_ACTIONS, ActionControls } from './controls-actions';

interface initialState {
	search: string;
	region: string;
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
		default:
			return state;
	}
};
