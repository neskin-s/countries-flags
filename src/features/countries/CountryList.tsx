import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Card } from '../../components/Card';
import { List } from '../../components/List';
import {
	loadCountries,
	selectCountriesInfo,
	selectVisibleCountries,
} from './countries-slice';

const CountryList = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const countries = useSelector(selectVisibleCountries);
	const { status, error } = useSelector(selectCountriesInfo);

	useEffect(() => {
		dispatch(loadCountries());
	}, [dispatch]);

	return (
		<>
			{error && <h2>Can't fetch data</h2>}

			{status === 'loading' && <h2>Loading...</h2>}

			{status === 'received' && (
				<List>
					{countries.map((c) => {
						const countryInfo = {
							img: c.flags.png,
							name: c.name,
							info: [
								{
									title: 'Population',
									description: c.population.toLocaleString(),
								},
								{
									title: 'Region',
									description: c.region,
								},
								{
									title: 'Capital',
									description: c.capital,
								},
							],
						};

						return (
							<Card
								key={c.name}
								onClick={() => navigate(`/country/${c.name}`)}
								{...countryInfo}
							/>
						);
					})}
				</List>
			)}
		</>
	);
};

export default CountryList;
