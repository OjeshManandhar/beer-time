// components
import BeerList from '@/components/BeerList';

// types
import type { Props } from './types';

function AllBeers(props: Props) {
  const beers = [
    {
      id: 1,
      name: 'Beer 1',
      image_url: 'https://images.punkapi.com/v2/keg.png',
      tagline: 'Tagline 1',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ingredients: ['Food 1', 'Food 2'],
    },
    {
      id: 2,
      name: 'Beer 2',
      image_url: 'https://images.punkapi.com/v2/keg.png',
      tagline: 'Tagline 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, facilis saepe. Cupiditate, laboriosam? At voluptatem cum dolores quibusdam libero iste impedit eos illum dolore repellendus?',
      ingredients: ['Food 1', 'Food 2'],
    },
    {
      id: 3,
      name: 'Beer 3',
      image_url: 'https://images.punkapi.com/v2/keg.png',
      tagline: 'Tagline 1',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente doloribus consequatur sunt praesentium eius totam libero ea est inventore magni facere alias repellendus cum, aspernatur voluptates architecto maiores perspiciatis! Voluptatum.',
      ingredients: ['Food 1', 'Food 2'],
    },
  ];

  return (
    <div
      className={`mt-3 transition-all ${props.display ? 'block' : 'hidden'}`}
    >
      <BeerList beers={beers} />
    </div>
  );
}

export default AllBeers;
