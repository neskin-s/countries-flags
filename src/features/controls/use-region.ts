import { useDispatch, useSelector } from 'react-redux';
import { selectRegion, setRegion } from './controls-slice';

export const useRegion = () => {
	const dispatch = useDispatch();

	const region = useSelector(selectRegion);

	const handleSetRegion = (region: any) =>
		dispatch(setRegion(region?.value || ''));

	return [region as string, handleSetRegion as (el: any) => void];
};
