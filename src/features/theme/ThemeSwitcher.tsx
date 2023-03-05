import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import styled from 'styled-components';

import { THEME_VARIABLES } from './theme-slice';
import { useTheme } from './use-theme';

const ModeSwitcher = styled.div`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	cursor: pointer;
	// font-weight: var(--fw-bold);
	text-transform: capitalize;
`;

const ThemeSwitcher = () => {
	const [theme, toggleTheme] = useTheme();

	return (
		<ModeSwitcher onClick={toggleTheme as () => void}>
			{theme === THEME_VARIABLES.light ? (
				<IoMoonOutline size="14px" />
			) : (
				<IoMoon size="14px" />
			)}{' '}
			<span style={{ marginLeft: '0.75rem' }}>
				{theme as THEME_VARIABLES} Theme
			</span>
		</ModeSwitcher>
	);
};

export default ThemeSwitcher;
