// packages
import { useInfiniteQuery } from '@tanstack/react-query';

// utils
import { convertApiResponseToBeer } from '@/utils/conversion';

// types
import type { Beer, BeerApiResponse } from '@/types';

// env
import { PAGE_SIZE } from '@/env_config';

export const useGetBeersInfiniteQuery = () => {
  return useInfiniteQuery<Beer[], Error>(
    ['beers'],
    async ({ pageParam = { page: 1 } }) => {
      try {
        const res = await fetch(
          `https://api.punkapi.com/v2/beers?page=${pageParam.page}&per_page=${PAGE_SIZE}`,
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
    },
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < PAGE_SIZE) {
          return undefined;
        }

        return { page: allPages.length + 1 };
      },
    },
  );
};
