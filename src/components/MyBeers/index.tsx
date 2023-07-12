// components
import List from '@/components/List';

// types
import type { Props } from './types';

function MyBeers(props: Props) {
  const beers = [
    {
      id: 1,
      name: 'Beer A',
      image_url: 'https://images.punkapi.com/v2/keg.png',
      tagline: 'Tagline A',
      description: 'Description A',
      ingredients: ['Food 1', 'Food 2'],
    },
    {
      id: 2,
      name: 'Beer B',
      image_url: 'https://images.punkapi.com/v2/keg.png',
      tagline: 'Tagline B',
      description: 'Description B',
      ingredients: ['Food 1', 'Food 2'],
    },
    {
      id: 3,
      name: 'Beer C',
      image_url: 'https://images.punkapi.com/v2/keg.png',
      tagline: 'Tagline B',
      description: 'Description C',
      ingredients: ['Food 1', 'Food 2'],
    },
  ];

  return (
    <div
      className={`my-5 transition-all ${props.display ? 'block' : 'hidden'}`}
    >
      <List beers={beers} />
    </div>
  );
}

export default MyBeers;
