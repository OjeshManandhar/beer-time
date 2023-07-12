// components
import List from '@/components/List';
import Message from '@/components/Message';

// hooks
import { useGetBeersQuery } from '@/hooks/apis/beer.hook';

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
      ingredients: [
        'Food 1',
        'Food 2',
        'Food 3',
        'Food 4',
        'Food 5',
        'Food 1',
        'Food 2',
        'Food 3',
        'Food 4',
        'Food 5',
      ],
    },
  ];

  const { data, error, isError, isLoading, isSuccess } = useGetBeersQuery();

  console.log('error:', error);

  const content = () => {
    if (isLoading) return <Message>Loading...</Message>;

    if (isError) return <Message>Error</Message>;

    if (isSuccess && !data.length) return <Message>{'No beers :('}</Message>;

    return <List beers={beers} />;
  };

  return (
    <div className={`mt-3 ${props.display ? 'block' : 'hidden'}`}>
      {content()}
    </div>
  );
}

export default AllBeers;
