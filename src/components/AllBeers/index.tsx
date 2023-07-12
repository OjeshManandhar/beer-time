// components
import List from '@/components/List';
import Message from '@/components/Message';

// hooks
import { useGetBeersQuery } from '@/hooks/apis/beer.hook';

// types
import type { Props } from './types';

function AllBeers(props: Props) {
  const { data, error, status } = useGetBeersQuery();

  const content = () => {
    if (status === 'loading') return <Message>Loading...</Message>;

    if (status === 'error' && error) return <Message>{error.message}</Message>;

    if (!data || !data.length) return <Message>{'No beers :('}</Message>;

    return <List beers={data} />;
  };

  return (
    <div className={`my-5 ${props.display ? 'block' : 'hidden'}`}>
      {content()}
    </div>
  );
}

export default AllBeers;
