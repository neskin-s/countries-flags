import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

import { setTheme, THEME_VARIABLES } from './theme-slice';

export const useTheme = () => {
	const dispatch = useDispatch();

	const theme = useSelector((state: RootState) => state.theme);

	const toggleTheme = () => {
		dispatch(
			setTheme(
				theme === THEME_VARIABLES.light
					? THEME_VARIABLES.dark
					: THEME_VARIABLES.light
			)
		);
	};

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return [theme, toggleTheme];
};
