import { useQuery } from '@tanstack/react-query';

export const useGetBeersQuery = () => {
  return useQuery(['beers'], async () => {
    try {
      const res = await fetch(
        'https://api.punkapi.com/v2/beers?page=1&per_page=10',
      );

      if (res.ok) {
        const data = res.json();
        return data;
      }

      throw new Error('Received response was not OK');
    } catch (err) {
      console.log('err in fetching beers:', err);
      throw err;
    }
  });
};
