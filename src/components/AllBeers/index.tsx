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
          className='flex flex-row items-center justify-start gap-3 mx-auto mt-5 font-semibold cursor-pointer text-french-blue'
        >
          {(() => {
            if (isFetchingNextPage) {
              return (
                <>
                  Loading{' '}
                  <i className='fa-solid fa-circle-notch animate-spin'></i>
                </>
              );
            }

            if (hasNextPage) {
              return (
                <>
                  Load More <i className='fa-solid fa-angle-down'></i>
                </>
              );
            }

            return (
              <>
                Nothing more to load <i className='fa-solid fa-check'></i>
              </>
            );
          })()}
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
