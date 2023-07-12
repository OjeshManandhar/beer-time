// components
import List from '@/components/List';
import Message from '@/components/Message';
import ButtonNoOutline from '@/components/Buttons/NoOutline';

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

    if (!beers.length) {
      return (
        <Message>
          <p>
            No beers <i className='ml-2 fa-solid fa-face-sad-cry'></i>
          </p>
        </Message>
      );
    }

    return (
      <>
        <List beers={beers} />

        <ButtonNoOutline
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          classNames='flex flex-row items-center justify-start gap-3 mx-auto mt-5 font-semibold'
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
        </ButtonNoOutline>
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
