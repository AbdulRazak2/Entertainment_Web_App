import { useQuery } from 'react-query';
import { getMovies } from './api';

export function useMovies() {
	return useQuery('getMovies', getMovies, {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	});
}
