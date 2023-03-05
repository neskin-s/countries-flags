import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigateFunction } from 'react-router-dom';
import {
	clearDetails,
	loadCountryByName,
	selectDetails,
} from './details-slice';
import { Info } from './Info';

const CountryDetails = ({
	name,
	navigate,
}: {
	name: string;
	navigate: NavigateFunction;
}) => {
	const dispatch = useDispatch();
	const { status, error, currentCountry } = useSelector(selectDetails);

	useEffect(() => {
		name && dispatch(loadCountryByName(name));

		return () => {
			dispatch(clearDetails());
		};
	}, [name, dispatch]);

	return (
		<>
			{status === 'loading' && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			{currentCountry && <Info push={navigate} {...currentCountry} />}
		</>
	);
};

export default CountryDetails;
