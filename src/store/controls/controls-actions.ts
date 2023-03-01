export enum CONTORLS_ACTIONS {
	SET_SEARCH = '@@/controls/SET_SEARCH',
	SET_REGION = '@@/controls/SET_REGION',
	CLEAR_CONTROLS = '@@/controls/CLEAR_CONTROLS',
}

export type ActionControls = {
	type: CONTORLS_ACTIONS;
	payload?: any;
};

export const setSearch = (search: string): ActionControls => ({
	type: CONTORLS_ACTIONS.SET_SEARCH,
	payload: search,
});

export const setRegion = (region: any): ActionControls => ({
	type: CONTORLS_ACTIONS.SET_REGION,
	payload: region,
});

export const clearControls = (): ActionControls => ({
	type: CONTORLS_ACTIONS.CLEAR_CONTROLS,
});
