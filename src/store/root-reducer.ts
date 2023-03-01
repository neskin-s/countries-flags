import { combineReducers } from 'redux';
import { searchReducer } from './controls/controls-reducer';
import { countriesReducer } from './countries/countries-reducer';
import { themeReducer } from './theme/theme-reducer';

export const rootReducer = combineReducers({
	theme: themeReducer,
	countries: countriesReducer,
	controls: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
