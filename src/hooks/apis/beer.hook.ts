// packages
import { useQuery } from '@tanstack/react-query';

// utils
import { convertApiResponseToBeer } from '@/utils/conversion';

// types
import type { Beer, BeerApiResponse } from '@/types';

export const useGetBeersQuery = () => {
  return useQuery<unknown, Error, Beer[]>(['beers'], async () => {
    try {
      const res = await fetch(
        'https://api.punkapi.com/v2/beers?page=1&per_page=10',
      );

      if (res.ok) {
        const data = (await res.json()) as BeerApiResponse[];
        const beers = convertApiResponseToBeer(data);
        return beers;
      }

      throw new Error('Received response was not OK');
    } catch (err) {
      console.error(err);

      throw new Error('Something went wrong!');
    }
  });
};
