export enum CONTORLS_ACTIONS {
	SET_SEARCH = '@@/controls/SET_SEARCH',
}

export type ActionControls = {
	type: CONTORLS_ACTIONS;
	payload: any;
};

export const setSearch = (search: string): ActionControls => ({
	type: CONTORLS_ACTIONS.SET_SEARCH,
	payload: search,
});
