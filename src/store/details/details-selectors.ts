import { RootState } from '../root-reducer';

export const selectCurrentCountry = (state: RootState) =>
	state.details.currentCountry;
export const selectDetails = (state: RootState) => state.details;
