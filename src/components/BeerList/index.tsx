// types
import type { Props } from './types';

function BeerList({ beers }: Props) {
  return (
    <ul className='grid grid-cols-1 gap-3 md:grid-cols-2'>
      {beers.map(beer => (
        <li key={beer.id} className='border-2 border-red-200'>
          {beer.name} <br />
          {beer.tagline} <br />
          {beer.description}
        </li>
      ))}
    </ul>
  );
}

export default BeerList;
