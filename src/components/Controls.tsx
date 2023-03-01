import styled from 'styled-components';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRegion } from '../store/controls/controls-selectors';
import { setRegion } from '../store/controls/controls-actions';

const optionsMap = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' },
];

const options = Object.values(optionsMap);

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Controls = memo(() => {
	const dispatch = useDispatch();
	const region = useSelector(selectRegion);

	const handleSetRegion = (region: any) =>
		dispatch(setRegion(region?.value || ''));

	return (
		<Wrapper>
			<Search />
			<CustomSelect
				options={options}
				placeholder="Filter by Region"
				isClearable
				isSearchable={false}
				value={region && optionsMap[region]}
				onChange={handleSetRegion}
			/>
		</Wrapper>
	);
});
