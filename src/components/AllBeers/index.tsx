// components
import BeerList from '@/components/BeerList';

// types
import type { Props } from './types';

function AllBeers(props: Props) {
  const beers = [
    {
      id: 1,
      name: 'Buzz',
      image_url: 'https://images.punkapi.com/v2/keg.png',
      tagline: 'A Real Bitter Experience.',
      description:
        'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
      ingredients: ['Food 1', 'Food 2'],
    },
    {
      id: 2,
      name: 'Trashy Blonde',
      tagline: "You Know You Shouldn't",
      description:
        'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
      image_url: 'https://images.punkapi.com/v2/2.png',
      ingredients: ['Food 1', 'Food 2'],
    },
    {
      id: 3,
      name: 'Berliner Weisse With Yuzu - B-Sides',
      tagline: 'Japanese Citrus Berliner Weisse.',
      description:
        'Japanese citrus fruit intensifies the sour nature of this German classic.',
      image_url: 'https://images.punkapi.com/v2/keg.png',
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
