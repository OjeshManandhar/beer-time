// components
import Card from '@/components/Card';

// types
import type { Props } from './types';

function List({ beers }: Props) {
  return (
    <ul className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      {beers.map(beer => (
        <Card key={beer.id} beer={beer} />
      ))}
    </ul>
  );
}

export default List;
