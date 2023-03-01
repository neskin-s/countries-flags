import styled from 'styled-components';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { Container } from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/root-reducer';
import { setTheme, THEME_VARIABLES } from '../store/theme/theme-actions';
import { clearControls } from '../store/controls/controls-actions';

const HeaderEl = styled.header`
	box-shadow: var(--shadow);
	background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
`;

const Title = styled(Link).attrs({
	to: '/',
})`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	text-decoration: none;
	font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	cursor: pointer;
	// font-weight: var(--fw-bold);
	text-transform: capitalize;
`;

export const Header = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state: RootState) => state.theme);

	const toggleTheme = () =>
		dispatch(
			setTheme(
				theme === THEME_VARIABLES.light
					? THEME_VARIABLES.dark
					: THEME_VARIABLES.light
			)
		);

	const cleanUp = () => dispatch(clearControls());

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title onClick={cleanUp}>Where is the world?</Title>
					<ModeSwitcher onClick={toggleTheme}>
						{theme === THEME_VARIABLES.light ? (
							<IoMoonOutline size="14px" />
						) : (
							<IoMoon size="14px" />
						)}{' '}
						<span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
					</ModeSwitcher>
				</Wrapper>
			</Container>
		</HeaderEl>
	);
};
