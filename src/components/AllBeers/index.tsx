// components
import List from '@/components/List';
import Message from '@/components/Message';

// hooks
import { useGetBeersInfiniteQuery } from '@/hooks/apis/beer.hook';

// types
import type { Beer } from '@/types';
import type { Props } from './types';

function AllBeers(props: Props) {
  const {
    data,
    error,
    status,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetBeersInfiniteQuery();

  const content = () => {
    if (status === 'loading') return <Message>Loading...</Message>;

    if (status === 'error' && error) return <Message>{error.message}</Message>;

    console.log('data:', data);
    const beers: Beer[] = [];
    data.pages.forEach(page => {
      page.forEach(beer => {
        beers.push(beer);
      });
    });

    if (!beers.length) return <Message>{'No beers :('}</Message>;

    return (
      <>
        <List beers={beers} />

        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </>
    );
  };

  return (
    <div className={`my-5 ${props.display ? 'block' : 'hidden'}`}>
      {content()}
    </div>
  );
}

export default AllBeers;
